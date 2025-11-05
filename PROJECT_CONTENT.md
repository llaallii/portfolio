# Projects Content for Sanity Studio

This document contains all the content for the three medical device projects. Use this as a reference when creating projects in Sanity Studio at `/studio`.

---

## PROJECT 1: SMARTHUB - SMART MEDICAL DATA COLLECTOR

### Basic Information

**Title:** SmartHub - Smart Medical Data Collector

**Slug:** `smarthub` (auto-generated from title)

**Role:** Systems Engineer - Verification & Validation

**Duration:** May 2023 - Present

**Excerpt:**
IoT-enabled medical data collection system featuring BLE and LTE Cat-M1 connectivity for real-time cloud transmission of patient therapy data, enabling remote monitoring and improved patient outcomes.

**Technologies:** (Add as separate tags)

- BLE
- LTE Cat-M1
- Cloud Integration
- IoT Medical Devices
- Python
- Real-time Data

**Published At:** 2023-05-01 (or current date)

**Featured:** Yes (to show on homepage)

---

### Description (Overview)

SmartHub is an intelligent medical data collection system designed to capture therapy events from medical devices and seamlessly transmit them to cloud platforms for remote patient monitoring. The system bridges the gap between traditional medical devices and modern connected healthcare solutions, enabling healthcare providers to track patient therapy adherence and outcomes without manual intervention.

As the Systems Engineer responsible for verification and validation, I led the development of comprehensive automated test solutions that ensured the reliability and regulatory compliance of this critical medical IoT system.

---

### Challenge

The healthcare industry needed a reliable solution for automated collection and transmission of patient therapy data. Traditional medical devices required manual logging and data transfer, creating gaps in monitoring and reducing treatment efficacy tracking.

**Key Challenges:**

- Ensuring reliable wireless communication in medical environments with electromagnetic interference
- Maintaining real-time data integrity across BLE and LTE communication protocols
- Meeting stringent battery life requirements for portable medical devices
- Achieving full regulatory compliance with medical device standards
- Validating end-to-end data transmission from device to cloud under various network conditions

---

### Constraints & Requirements

**Regulatory Requirements:**

- **ISO 13485** - Medical Device Quality Management System
- **ISO 14971** - Application of Risk Management to Medical Devices
- **IEC 60601** - Medical Electrical Equipment Safety Standards
- Full traceability required from requirements through test outcomes
- Design control documentation and QMS alignment

**Technical Constraints:**

- Real-time data synchronization requirements
- Limited power budget for battery-operated devices
- Reliable operation across varying cellular network conditions
- Secure data transmission with patient privacy protection
- Integration with existing healthcare IT infrastructure

**Quality Requirements:**

- Comprehensive test coverage of communication protocols
- Automated validation to reduce cycle time
- Cost-effective testing solutions

---

### Approach & Solution

**Test System Development:**

Designed and implemented custom Computer-Aided Test Systems (CATS) using cost-effective single-board computers (Raspberry Pi) to validate BLE and LTE communication interfaces. These automated test jigs simulated real-world scenarios and user interactions while capturing comprehensive test data.

**Automated Testing Strategy:**

Developed Python-based test automation scripts for:

- BLE communication protocol validation
- LTE Cat-M1 interface testing
- Real-time data capture verification
- Cloud data transmission end-to-end testing
- Log analysis and failure triaging using pyserial, pyshark, and Wireshark

**Verification & Validation Methodologies:**

Applied rigorous V&V processes including:

- **Test Method Validation (TMV)** - Qualifying test equipment and methods
- **Equipment Validation (IQ/OQ/PQ)** - Installation, Operational, and Performance Qualification
- **DFMEA** - Design Failure Mode and Effects Analysis participation
- **Risk-based test strategy** - Aligned with ISO 14971 risk management

**Documentation & Traceability:**

Authored comprehensive regulatory documentation:

- System Requirements Specifications (SRS)
- System Design Specifications (SDS)
- Test Plans and Test Protocols
- Equipment User Requirement Specifications (EURS)
- Equipment System Design Specifications (ESDS)
- Maintained full requirements-to-tests traceability

---

### Outcomes & Impact

**Cycle Time Reduction:**
Achieved approximately 30% reduction in verification and validation cycle time through automated test solutions, accelerating time-to-market while maintaining quality standards.

**Cost Savings:**
Significantly reduced project V&V costs by developing in-house test systems using commercial single-board computers instead of expensive proprietary test equipment.

**Regulatory Compliance:**

- Successfully validated real-time event capture and cloud data transmission
- Achieved full regulatory compliance with ISO 13485 and ISO 14971
- Completed comprehensive equipment validation (IQ/OQ/PQ) per company QMS
- Maintained complete traceability from requirements through test outcomes

**Quality Achievements:**

- Validated BLE and LTE communication reliability across various environmental conditions
- Ensured data integrity throughout the device-to-cloud transmission chain
- Reduced manual testing effort through comprehensive automation
- Enhanced bug isolation and root cause analysis capabilities across firmware, mechanical, and electrical layers

**Key Technical Achievements:**

- Developed robust automated log analysis tools for rapid failure identification
- Created reusable test frameworks applicable to future medical IoT projects
- Established best practices for multi-protocol communication validation

---

## PROJECT 2: MOLLY cCAP - CONNECTED MECHANICAL AUTOINJECTOR

### Basic Information

**Title:** Molly cCap - Connected Mechanical Autoinjector

**Slug:** `molly-ccap` (auto-generated from title)

**Role:** Lead Verification & Validation Engineer

**Duration:** May 2023 - Present

**Excerpt:**
BLE-enabled cap-triggered mechanical autoinjector with custom automated test solutions, reducing V&V costs by 30% through innovative low-cost test systems while ensuring full regulatory compliance for self-injection medical devices.

**Technologies:** (Add as separate tags)

- BLE Connectivity
- Automated Test Equipment (ATE)
- Python Automation
- TMV
- IQ/OQ/PQ
- ISO 13485
- ISO 14971
- Gage R&R (GRR)

**Published At:** 2023-05-01 (or current date)

**Featured:** Yes

---

### Description (Overview)

Molly cCap is a sophisticated BLE-connected mechanical autoinjector designed for patient self-administration of injectable medications. The device features a cap-triggered activation mechanism and wireless connectivity for dose tracking and patient adherence monitoring, combining mechanical precision with modern connectivity features.

As the lead V&V engineer, I independently designed, built, and validated complete automated test solutions from concept through equipment qualification, enabling cost-effective validation while maintaining the highest quality and regulatory compliance standards.

---

### Challenge

Developing a reliable self-injection device that combines:

- Precise mechanical activation through cap-trigger mechanism
- Reliable BLE connectivity for dose tracking and patient monitoring
- User safety and ease-of-use for diverse patient populations
- Compliance with stringent medical device regulations for injection systems

The project required reducing validation costs and cycle time without compromising quality or regulatory compliance, while ensuring production readiness for high-volume manufacturing.

**Specific Technical Challenges:**

- Cap-trigger activation consistency across thousands of actuations
- BLE timing and reliability for critical event notification
- Mechanical-electronic integration validation
- User interaction simulation for regulatory testing
- Cost-effective test automation with limited budget

---

### Constraints & Requirements

**Regulatory Requirements:**

- **ISO 13485** - Medical Device Quality Management System
- **ISO 14971** - Risk Management for Medical Devices
- **ISO 11608** - Needle-based Injection Systems for Medical Use
- **IEC 60601** - Medical Electrical Equipment Safety
- Production-ready, regulatory-compliant deliverables required

**Technical Constraints:**

- Mechanical precision requirements for drug delivery accuracy
- BLE reliability under various environmental conditions
- User safety requirements for self-injection applications
- Battery life constraints for long-term storage and use
- Manufacturing feasibility and cost targets

**Project Constraints:**

- Pressure to reduce V&V costs while maintaining quality
- Timeline requirements for design transfer to manufacturing
- Limited access to expensive commercial test equipment
- Need for comprehensive test coverage across mechanical and electronic subsystems

---

### Approach & Solution

**Custom Test Equipment Development:**

Independently authored Equipment User Requirement Specifications (EURS) and Equipment System Design Specifications (ESDS), then designed and built complete in-house test systems using:

- Cost-effective single-board computers (Raspberry Pi)
- Custom sensors for mechanical validation
- Automated test jigs for cap-trigger simulation
- UI-level validation fixtures for user interaction testing

**Test Automation Implementation:**

Developed comprehensive Python-based test automation including:

- BLE communication validation using bleak, pyserial
- Real-time event monitoring and validation
- Cap-trigger mechanism testing under various conditions
- Automated data logging and statistical analysis
- Failure detection and root cause analysis tools

**Validation Methodologies:**

Executed complete validation lifecycle:

- **Test Method Development & Validation (TMV)** - Developed and qualified test methods
- **Equipment Validation (IQ/OQ/PQ)** - Full Installation, Operational, and Performance Qualification
- **Gage R&R (GRR)** - Measurement System Analysis for accuracy and repeatability
- **DFMEA Participation** - Early identification of failure modes and testability requirements
- **Risk-based Testing** - Test strategy aligned with ISO 14971 risk management

**Documentation & Traceability:**

Authored comprehensive documentation package:

- System Requirements Specifications (SRS)
- System Design Specifications (SDS)
- Test Plans, Protocols, and Reports
- Equipment validation documentation (EURS/ESDS)
- TMV and GRR reports
- IQC protocols for component inspection
- Full traceability matrices

---

### Outcomes & Impact

**Cost Reduction Achievement:**
Reduced project verification and validation costs by approximately 30% through innovative in-house test solutions, proving that sophisticated medical device testing doesn't require expensive proprietary equipment.

**Validation Success:**

- Successfully completed full equipment validation (IQ/OQ/PQ) in compliance with company QMS
- Achieved comprehensive Gage R&R studies demonstrating measurement system accuracy
- Validated cap-trigger mechanism reliability across operating ranges
- Confirmed BLE connectivity and reliability under diverse conditions

**Regulatory Compliance:**

- Achieved full traceability and regulatory alignment with ISO 13485, ISO 14971, ISO 11608
- Delivered production-ready, regulatory-compliant test equipment and documentation
- Passed all design review gates for manufacturing transfer

**Quality Improvements:**

- Ensured test system accuracy and compliance through proper TMV and GRR
- Automated previously manual testing processes, improving consistency and repeatability
- Enhanced defect detection through comprehensive stress testing and component evaluations
- Enabled rapid root cause analysis through automated log capture and analysis

**Innovation & Knowledge Transfer:**

- Established reusable test framework for future BLE-enabled medical devices
- Demonstrated feasibility of low-cost automation for complex medical device testing
- Created comprehensive documentation templates adopted by engineering team
- Mentored team members on test automation best practices

**Key Learnings:**

- Cost-effective automation using commercial SBCs can significantly reduce V&V expenses
- Early DFMEA participation is critical for identifying testability requirements
- Traceability tools are essential for maintaining regulatory compliance at scale

---

## PROJECT 3: ELEXY - ELECTROMECHANICAL AUTOINJECTOR

### Basic Information

**Title:** Elexy - Electromechanical Autoinjector Platform

**Slug:** `elexy` (auto-generated from title)

**Role:** Systems Verification Engineer - Embedded PCBA Validation

**Duration:** May 2023 - Present

**Excerpt:**
Advanced electromechanical autoinjector platform featuring RFID identification, optical sensors, and LTE connectivity with comprehensive PCBA-level validation, achieving 30% reduction in V&V cycle time while ensuring production readiness.

**Technologies:** (Add as separate tags)

- Electromechanical Systems
- RFID Module Testing
- Optical Sensor Calibration
- LTE Communication
- PCBA Validation
- Python CATS
- Signal Processing
- IQ/OQ/PQ
- ISO 13485/14971/11608

**Published At:** 2023-05-01 (or current date)

**Featured:** Yes

---

### Description (Overview)

Elexy represents a next-generation electromechanical autoinjector platform integrating advanced sensing, identification, and communication technologies. The system combines RFID for component identification, optical sensors for precise feedback control, LTE cellular communication for cloud connectivity, and sophisticated mechanical actuation—all requiring deep integration validation at the embedded PCBA level.

As the Systems Verification Engineer, I led comprehensive validation efforts spanning hardware integration, signal processing, communication protocols, and system-level performance, ensuring this complex multi-domain system met all functional and regulatory requirements for market introduction.

---

### Challenge

Validating a highly integrated electromechanical medical device system with multiple interconnected subsystems:

**System Complexity:**

- RFID module for cartridge/component identification and traceability
- Optical sensor systems for position detection, dose verification, and user feedback
- LTE Cat-M1 cellular communication for real-time cloud data transmission
- Precise mechanical actuation coordinated with electronic control
- Embedded PCBA requiring component-level and system-level validation

**Validation Challenges:**

- Complex signal processing for optical sensor calibration and validation
- RFID read accuracy and reliability across various environmental conditions
- LTE connectivity validation in diverse network environments
- Hardware-software integration testing across firmware, electrical, and mechanical domains
- Multi-layer debugging of system-level issues
- Ensuring production readiness with comprehensive PCBA-level validation

---

### Constraints & Requirements

**Regulatory Requirements:**

- **ISO 13485** - Medical Device Quality Management System
- **ISO 14971** - Application of Risk Management to Medical Devices
- **ISO 11608** - Needle-based Injection Systems Standard
- **IEC 60601** - Medical Electrical Equipment Safety
- **IEC 62304** - Medical Device Software Lifecycle (familiarity required)
- Full traceability and design control per QMS

**Technical Constraints:**

- Complex signal processing requirements for optical sensors
- RFID read reliability and accuracy specifications
- LTE connectivity across varying network conditions and signal strengths
- Hardware integration complexity across multiple subsystems
- Precise mechanical-electrical timing coordination
- Component-level validation requirements for PCBA

**Quality & Manufacturing Requirements:**

- Design for Manufacturing and Assembly (DFMA)
- Production readiness validation
- Test coverage across all interfaces and protocols
- Scalable test solutions for high-volume manufacturing
- Cost-effective validation approach

---

### Approach & Solution

**PCBA-Level Test Development:**

Designed and implemented comprehensive embedded hardware validation:

- Custom test jigs for PCBA-level component validation
- Automated fixtures for RFID module read accuracy testing
- Optical sensor calibration stations with precision measurement
- LTE communication test setups with network simulation
- Integration of multiple sensor types for end-to-end validation

**Advanced Test Automation:**

Developed sophisticated Python-based automated test systems:

- Signal processing algorithms for optical sensor validation using NumPy, SciPy
- RFID communication protocol validation and read rate testing
- LTE interface testing scripts with comprehensive coverage
- Multi-interface validation (RS-232, RS-422, RS-485, UART, SPI)
- Real-time data logging, analysis, and automated failure detection
- Automated log analysis tools using pyserial, pyshark, Wireshark

**Systems Engineering Approach:**

Applied Model-Based Systems Engineering (MBSE) and structured methodologies:

- **Requirements Modeling** using SysML for clear traceability
- **MBSE Tools** - Siemens Polarion for requirements and test management
- **Test Method Validation (TMV)** for test equipment qualification
- **Equipment Validation (IQ/OQ/PQ)** protocols
- **Gage R&R (GRR)** for measurement system analysis
- **DFMEA** participation for early failure mode identification
- **Risk-based Testing** aligned with ISO 14971

**Multi-Domain Integration:**

Led cross-functional debugging and validation:

- Isolated and resolved system-level bugs across firmware, mechanical, and electrical layers
- Coordinated with firmware, electrical, and mechanical engineering teams
- Conducted root cause analysis (RCA) for complex integration issues
- Validated timing-critical interactions between subsystems

**Comprehensive Documentation:**

Authored extensive regulatory and technical documentation:

- System Requirements Specifications (SRS) and System Design Specifications (SDS)
- Equipment specifications (EURS/ESDS)
- Test Plans, Protocols, and comprehensive Test Reports
- IQ/OQ/PQ validation documentation
- TMV and GRR studies
- Incoming Quality Control (IQC) protocols
- Requirements ↔ Tests traceability matrices
- Root cause analysis reports

---

### Outcomes & Impact

**Cycle Time & Efficiency:**

- Achieved approximately 30% reduction in V&V cycle time through comprehensive automated test solutions
- Significantly reduced project verification and validation costs using in-house developed test systems
- Accelerated defect detection and resolution through automated log analysis

**Technical Validation Success:**

- **PCBA-Level Validation:** Successfully completed comprehensive embedded hardware validation
- **RFID Validation:** Verified module accuracy and reliability across specified operating ranges
- **Optical Sensor Calibration:** Achieved precise calibration to design specifications with documented accuracy
- **LTE Communication:** Validated connectivity and data transmission across various network conditions
- **Signal Processing:** Ensured accurate signal processing and hardware integration compliance

**Regulatory & Quality Achievements:**

- Achieved full traceability and regulatory alignment with ISO 13485, ISO 14971, ISO 11608, IEC 60601
- Met all design specification compliance requirements
- Completed comprehensive equipment qualification (IQ/OQ/PQ) per company QMS
- Successfully passed design transfer to manufacturing with production-ready deliverables

**System Integration:**

- Validated multi-layer system integration across firmware, electronics, and mechanics
- Resolved complex hardware-software integration challenges
- Ensured proper coordination between electronic control and mechanical actuation
- Verified multiple serial communication protocols operating simultaneously

**Knowledge & Innovation:**

- Developed advanced signal processing expertise for optical sensor systems
- Gained deep understanding of RFID system validation and calibration
- Created reusable test frameworks for complex multi-interface validation
- Established best practices for PCBA-level testing in medical devices
- Built expertise in LTE validation applicable to connected medical device portfolio

**Cross-Functional Leadership:**

- Engaged with stakeholders from product management, end users, and cross-functional teams from earliest development stages
- Led root cause analysis efforts across multiple engineering disciplines
- Participated in design reviews and DFMEA sessions
- Supported design transfer activities with manufacturing teams
- Coordinated validation activities across R&D, firmware, quality, and NPI teams

**Production Readiness:**

- Delivered complete validation package for manufacturing release
- Achieved design specifications compliance milestone
- Established Incoming Quality Control (IQC) protocols for component inspection
- Completed regulatory documentation package for submission

---

## NOTES FOR SANITY STUDIO

### How to Add Projects:

1. **Navigate to Sanity Studio:**
   - Go to `http://localhost:3001/studio` in your browser
   - Click on "Projects" in the left sidebar

2. **Create New Project:**
   - Click "Create new Project" button
   - Fill in the fields using content from above

3. **Field Mapping:**
   - **Title** → Copy from "Title" section above
   - **Slug** → Let it auto-generate from title (or manually set as shown)
   - **Cover Image** → Upload a relevant image (device photo, system diagram, or placeholder)
   - **Excerpt** → Copy from "Excerpt" section (max 200 characters)
   - **Description** → Copy from "Description (Overview)" section
   - **Role** → Copy from "Role" field
   - **Duration** → Copy from "Duration" field
   - **Challenge** → Copy from "Challenge" section content
   - **Constraints** → Copy from "Constraints & Requirements" section
   - **Approach** → Copy from "Approach & Solution" section
   - **Outcomes** → Copy from "Outcomes & Impact" section
   - **Gallery** → Leave empty for now (add images later if available)
   - **Technologies** → Add each technology as a separate tag
   - **Project URL** → Leave empty (these are confidential medical device projects)
   - **GitHub URL** → Leave empty (these are proprietary projects)
   - **Published At** → Set to May 1, 2023 (or current date)
   - **Featured** → Check this box to show on homepage

4. **Formatting Tips:**
   - Use the rich text editor's heading buttons for section titles (H2 or H3)
   - Use bullet lists for lists
   - Use bold for emphasis on key terms
   - Keep paragraphs reasonably short for readability

5. **After Creating All Three Projects:**
   - Click "Publish" for each project
   - Navigate to `/projects` to see the index page
   - Click on each project card to verify the case study page displays correctly

### Cover Image Suggestions:

Since actual device images may be confidential, consider using:

- Generic medical device placeholder images
- System architecture diagrams
- Abstract technology images representing IoT, connectivity, medical devices
- Or create simple graphics with the project name and key technologies

---

## VERIFICATION CHECKLIST

After adding all projects to Sanity Studio:

- [ ] All three projects created and published
- [ ] Project cards display correctly on `/projects` index page
- [ ] Each project has 3-6 technology tags
- [ ] Clicking project cards navigates to case study pages
- [ ] Case study pages show all sections (Overview, Challenge, Constraints, Approach, Outcomes)
- [ ] Role and Duration display in header
- [ ] Technologies display as badges
- [ ] Responsive design works on mobile/tablet
- [ ] Dark mode compatibility verified
- [ ] Featured projects appear on homepage (if homepage has project section)
- [ ] No broken images or layout issues
