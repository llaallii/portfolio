---
title: "Designing a Low-Cost CATS Fixture for BLE Event Timing"
description: "A technical deep-dive into building a custom automated test system for validating BLE broadcast timing and payload accuracy in medical IoT devices."
date: "2025-01-15"
tags: ["V&V", "BLE", "Test Automation", "CATS", "Python"]
cover: "/images/blog/ble-timing-fixture.jpg"
draft: false
author: "Ratan Lal Bunkar"
---

## Introduction

In connected medical device development, Bluetooth Low Energy (BLE) broadcast timing and payload integrity are critical parameters that require rigorous validation. This article details the engineering approach, design trade-offs, and validation methodology for a custom Computer-Aided Test System (CATS) fixture developed to automate BLE event timing measurements.

## Problem Statement

Our autoinjector cap device broadcasts critical therapy data via BLE advertisements. Key requirements included:

- **Broadcast Interval**: 100ms ± 10ms (per system requirements specification)
- **Payload Accuracy**: 100% match to expected data structure
- **Repeatability**: Gage R&R < 10% across 30 units
- **Throughput**: Test 120 units/day minimum

Manual validation using commercial BLE sniffers proved:
- Time-intensive (>15 min/unit)
- Operator-dependent (variation >15%)
- Inadequate for production-scale verification

## System Architecture

### Hardware Components

1. **Nordic nRF52840 DK** - BLE sniffer and packet capture
2. **Raspberry Pi 4** - Test orchestration and data logging
3. **Custom PCB Test Jig** - Device Under Test (DUT) fixture with:
   - Spring-loaded pogo pins for power
   - UART tap for firmware synchronization
   - LED indicators for pass/fail status

### Software Stack

```python
# Core Python libraries
import bleak  # BLE async communication
import pyshark  # Packet capture analysis
import pandas as pd  # Data logging and analysis
import sqlite3  # Test result database
```

## Measurement Methodology

### Timing Validation

Broadcast intervals were captured using Wireshark's Nordic BLE Sniffer firmware with sub-millisecond resolution:

```python
def measure_broadcast_interval(capture_file, target_address):
    """
    Extract inter-packet timing from pcap capture.

    Args:
        capture_file: Path to Wireshark pcap
        target_address: MAC address of DUT

    Returns:
        List of inter-packet intervals (ms)
    """
    cap = pyshark.FileCapture(capture_file,
                              display_filter=f'bthci_evt.bd_addr == {target_address}')
    timestamps = [float(pkt.sniff_timestamp) for pkt in cap]
    intervals = [(timestamps[i+1] - timestamps[i]) * 1000
                 for i in range(len(timestamps)-1)]
    return intervals
```

### Acceptance Criteria

Per ISO 13485 traceability requirements, we defined three-tier validation:

| Parameter | LSL | Target | USL | Notes |
|-----------|-----|--------|-----|-------|
| Mean Interval | 95ms | 100ms | 105ms | Statistical mean over 100 samples |
| Std Deviation | - | - | 3ms | Process capability requirement |
| Payload CRC | - | Match | - | 100% integrity check |

## Validation Results

### Gage Repeatability & Reproducibility

Performed 30-unit study per AIAG MSA guidelines:

- **Equipment Variation (EV)**: 1.2ms
- **Appraiser Variation (AV)**: 0.8ms
- **Total GR&R**: 8.4% (< 10% requirement ✓)

### Throughput Improvement

| Metric | Manual Method | Automated CATS |
|--------|---------------|----------------|
| Test Duration | 15 min | 2.5 min |
| Operator Time | 15 min | 30 sec |
| Data Logging | Manual entry | Automatic SQLite |
| False Positive Rate | ~5% | <0.5% |

## Trade-offs and Failure Modes

### Design Decisions

1. **Nordic vs. Commercial Sniffer**
   Selected Nordic nRF52840 over Ellisys for cost ($40 vs $8K+). Trade-off: Manual calibration required quarterly.

2. **Synchronous vs. Async Testing**
   Implemented async Python (`bleak`) for 3x throughput gain. Complexity increased but justified by production volume.

3. **Fixed Fixture vs. Modular Adapter**
   Fixed jig design reduced setup time but requires new fixture for design changes.

### Known Limitations

- **RF Interference**: Shielded test chamber required (added $2K cost)
- **Temperature Sensitivity**: Calibration drift observed >30°C ambient
- **Firmware Dependency**: UART logging must be enabled (1KB flash overhead)

## Regulatory Implications (ISO 13485 Context)

This system was qualified under ISO 13485 §7.5.1 (Production Process Validation) as **Type 2 Equipment** requiring:

- **IQ**: Installation documentation, calibration certificates
- **OQ**: Performance verification per SOP-TEST-012
- **PQ**: 30-unit production run with CPK > 1.33 (achieved 1.67)

Documentation included:
- Equipment Validation Protocol (EVP)
- Test Method Validation (TMV) per FDA Guidance
- Traceability matrix linking SRS requirements to test cases

## Lessons Learned

### What Worked Well

- **Modular Python Architecture**: Easy to extend for new test cases
- **Real-time Dashboards**: Reduced debug time by 40%
- **Automated Reporting**: Generated PDF reports with plots and statistics

### What Could Improve

- **Error Handling**: Initial version crashed on unexpected packet formats
- **Calibration Workflow**: Manual process; should automate quarterly verification
- **Multi-DUT Testing**: Current design tests serially; parallel testing would improve throughput

## Conclusion

This CATS fixture reduced BLE validation time by 6x while improving measurement repeatability (GR&R < 10%). Key success factors included:

1. Early definition of acceptance criteria linked to SRS
2. Iterative prototype validation with cross-functional team
3. Robust data logging for post-test analysis
4. Formal equipment validation per ISO 13485

The system is now deployed across three manufacturing lines, validating >500 units/week. Total development cost: $4,200. Annual manual testing cost avoided: ~$85K.

## References

1. ISO 13485:2016 - Medical devices - Quality management systems
2. FDA Guidance: "General Principles of Software Validation" (2002)
3. AIAG MSA-4: "Measurement Systems Analysis" (4th Edition)
4. Bluetooth SIG: "Core Specification v5.3" (2021)

## Related Resources

- [IQ/OQ/PQ in Practice for Custom Test Equipment](/blog/iqoqpq-custom-equipment)
- [BLE Broadcast Latency: State Machines and Sniffers](/blog/ble-latency-measurement)
- [Authoring SRS/SDS That Engineers Actually Read](/blog/requirements-engineering)

---

*Have questions about BLE test automation or CATS development? [Get in touch](#contact) - I'm happy to discuss technical approaches and trade-offs.*
