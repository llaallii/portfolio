# MedTech Engineering Blog Guide

**Purpose**: This guide documents the editorial workflow, governance, and quality standards for the blog section of your portfolio.

---

## 1. Goals & Guardrails

### Primary Goal
Publish clear, technical MedTech posts that demonstrate:
- Systems engineering expertise
- V&V methodology depth
- Regulatory literacy (ISO 13485, ISO 14971, ISO 11608, IEC 60601)

### Target Audience
- MedTech hiring managers
- Systems engineers & V&V engineers
- QA/RA professionals
- MedTech startup founders

### Tone & Style
- **Precise**: Use specific metrics, tolerances, and units
- **Patient-safe**: Avoid clinical claims or therapeutic effectiveness statements
- **Evidence-led**: Cite standards, papers, and datasheets
- **Honest**: Discuss trade-offs, failures, and iterative improvements

---

## 2. Content Model

### Post Types
- **Technical Deep-Dives**: 1200-1800 words, architecture diagrams, code examples
- **Case Studies**: 800-1200 words, project retrospectives with quantitative outcomes
- **How-To Guides**: 600-1000 words, step-by-step procedures with checklists

### Frontmatter Fields
```yaml
---
title: "Descriptive Title (Use Title Case)"
description: "1-2 sentence summary, max 160 characters"
date: "2025-01-15"  # ISO format YYYY-MM-DD
updated: "2025-02-01"  # Only for substantial edits
tags: ["V&V", "BLE", "ISO 13485"]  # Max 5 tags
cover: "/images/blog/slug-name.jpg"  # Optional
draft: true  # Remove to publish
canonical: "https://linkedin.com/..."  # If cross-posting
author: "Ratan Lal Bunkar"
---
```

### Taxonomy (Tags)
Use existing tags when possible. Current tags:
- **Domains**: V&V, Test Automation, CATS, Requirements Engineering, Risk Management
- **Technologies**: BLE, Python, UART, MATLAB, SysML
- **Standards**: ISO 13485, ISO 14971, ISO 11608, IEC 60601, ISO 62304
- **Methods**: DFMEA, IQ/OQ/PQ, GRR, TMV, MBSE
- **Devices**: Autoinjectors, IoT Medical Devices, Embedded Systems

---

## 3. Editorial Workflow

### File Management
- **Location**: `/content/blog/slug-name.md`
- **Naming**: Use kebab-case slugs (e.g., `ble-timing-validation.md`)
- **Images**: Store in `/public/images/blog/` and optimize (<500KB)

### Workflow States

1. **Draft** (in repo with `draft: true`)
   - Write initial outline
   - Add placeholder images
   - Run through self-review checklist

2. **Review**
   - Complete editorial checklist (see template)
   - Verify all links functional
   - Check for sensitive/proprietary data
   - Ensure no product claims

3. **Publish**
   - Remove `draft: true` from frontmatter
   - Git commit with message: `feat(blog): add [title]`
   - Verify RSS feed updated

4. **Update** (if substantial changes)
   - Add `updated: "YYYY-MM-DD"` field
   - Add brief update note at top of article
   - Commit: `update(blog): refresh [title] with [changes]`

### Version Control
- Create branch: `post/slug-name`
- Commit frequently during drafting
- Merge to main when published

---

## 4. Quality Bars

### What Makes a "Good" Post
- ✅ Teaches a specific technique with clear diagrams or pseudo-flow
- ✅ Quantifies outcomes (e.g., latency distribution, GRR < 10%)
- ✅ Names standards correctly and explains **why** they matter
- ✅ Links to reusable checklists/templates where helpful
- ✅ Discusses trade-offs and failure modes honestly

### What to Avoid
- ❌ Vague claims without data ("significantly improved")
- ❌ Unexplained acronyms (expand on first use)
- ❌ Product claims or therapeutic effectiveness statements
- ❌ Proprietary device names or sensitive project data
- ❌ Prescriptive regulatory guidance ("you must...")

---

## 5. SEO & Metadata

### Page Titles
Format: `[Article Title] | MedTech Engineering Blog`

### Meta Descriptions
- 1-2 sentences, max 160 characters
- Include primary keyword (e.g., "BLE timing validation")
- Focus on value: "Learn how to..."

### Open Graph Images
- Dimensions: 1200x630px
- Include title overlay
- High contrast for social media feeds

### Internal Linking
- Link from project pages to related blog posts
- Cross-link between blog posts (2-3 links per article)
- Use descriptive anchor text (not "click here")

---

## 6. Accessibility Standards

### WCAG 2.1 AA Compliance
- ✅ Text contrast ratio > 4.5:1
- ✅ All images have descriptive alt text
- ✅ Headings in logical order (H1 → H2 → H3)
- ✅ Links have meaningful text
- ✅ Focus indicators visible on keyboard navigation

### Image Guidelines
```markdown
![Descriptive alt text explaining diagram content](path-to-image.jpg)
*Figure 1: Caption with units and context*
```

### Table of Contents
- Auto-generated for posts >1200 words
- Anchored links to H2 and H3 headings
- Sticky sidebar on desktop

---

## 7. Governance (Regulated Domain)

### Regulatory Disclaimer
Displayed on all blog pages:
> All blog content is provided for engineering and educational purposes only. Information represents professional experience and cited standards, not prescriptive regulatory guidance or product claims.

### Content Rules

**✅ Allowed:**
- Descriptive discussion of standards (what they cover, why they exist)
- Engineering methods and test approaches
- Quantitative data from public or anonymized projects
- Trade-offs and technical decision-making
- Failure mode analysis and lessons learned

**❌ Not Allowed:**
- Product claims ("our device reduces infection rates")
- Prescriptive regulatory guidance ("to be compliant, you must...")
- Sensitive project data (real device names, customer info)
- Clinical effectiveness claims
- Unapproved therapeutic uses

### Data Sanitization Checklist
- [ ] Remove real device/project names (use generic terms)
- [ ] Anonymize customer/company references
- [ ] Sanitize log files and screenshots (no serial numbers, MACs)
- [ ] Use representative data or normalized values
- [ ] Clear diagrams of proprietary architecture details

---

## 8. Publishing Cadence

### Target Frequency
**2 posts per month** (24 posts/year)

### Content Calendar (Quarterly Plan)
Maintain rolling 6-week backlog:
- Week 1-2: Idea → Outline
- Week 3-4: Draft → Review
- Week 5-6: Finalize → Publish

### Editorial Calendar Template
See Section 13 in original plan for first 8 post ideas.

---

## 9. Distribution Strategy

### Primary Channels
1. **Portfolio Blog** (canonical source)
2. **LinkedIn** (summary with link back to blog)
3. **Technical Communities** (Reddit r/MedicalDevices, LinkedIn groups)

### Cross-Posting Guidelines
- Write LinkedIn summary (3-5 paragraphs)
- Link back to canonical URL on your site
- Include "Read the full article at [link]"
- Engage with comments within 48 hours

### Internal Promotion
- Add "Related Posts" sidebar to project pages
- Include blog link in email signature
- Mention in cover letters/applications

---

## 10. Analytics & Feedback

### Metrics to Track
- Page views (monthly)
- Time on page (target: >3 min for long-form)
- Bounce rate (target: <60%)
- RSS subscribers
- Inbound links from LinkedIn/external sites

### Feedback Mechanisms
- "Was this helpful?" CTA at bottom of posts
- Contact form link in author box
- Monitor LinkedIn comments for questions

### Quarterly Review
- Identify top 3 performing posts
- Update outdated technical info
- Refresh meta descriptions based on performance

---

## 11. Maintenance Schedule

### Quarterly Tasks
- Review top-traffic posts for outdated info
- Update broken external links
- Refresh images if standards have changed
- Add "Updated: [date]" notice for substantial changes

### Annual Tasks
- Audit full taxonomy (consolidate similar tags)
- Review RSS feed structure
- Update author bio
- Archive or unpublish obsolete posts (with 301 redirects)

---

## 12. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Revealing proprietary info | Legal/NDA breach | Anonymize data, use generic device names |
| Over-claiming compliance | Regulatory scrutiny | Descriptive language only, "context/example" disclaimer |
| Time sink (writing too much) | Delayed portfolio updates | 90-min writing sprints, reuse templates |
| Outdated technical info | Loss of credibility | Quarterly review cycle, update notices |

---

## 13. Editorial Checklist (Pre-Publish)

**Content Quality**
- [ ] Clear problem statement and context
- [ ] Reproducible steps or architecture diagram
- [ ] Trade-offs and failure modes discussed
- [ ] Standards/regulatory implications explained plainly
- [ ] Figures labeled (caption, numbering, callouts)
- [ ] Units, tolerances, and assumptions stated
- [ ] Spellcheck completed
- [ ] Acronyms expanded on first use

**Links & References**
- [ ] Two internal links (projects or related posts)
- [ ] One external reference (standard or paper)
- [ ] All links tested and functional

**Accessibility**
- [ ] Alt text for all images
- [ ] Heading order logical (H1 → H2 → H3)
- [ ] Table headers properly formatted
- [ ] High contrast maintained

**Metadata**
- [ ] Tags added (max 5)
- [ ] Meta description written (1-2 sentences)
- [ ] Cover image optimized (<500KB)
- [ ] `draft: false` or field removed

**Governance**
- [ ] No proprietary/sensitive data exposed
- [ ] No product claims or clinical effectiveness statements
- [ ] Disclaimer displayed on page
- [ ] Standards cited descriptively, not prescriptively

---

## 14. Technical Setup

### File Structure
```
portfolio/
├── content/
│   └── blog/
│       ├── _template.md
│       ├── ble-timing-validation.md
│       └── dfmea-test-strategy.md
├── public/
│   └── images/
│       └── blog/
│           ├── ble-timing-fixture.jpg
│           └── dfmea-traceability.jpg
├── app/
│   ├── blog/
│   │   ├── page.tsx
│   │   ├── [slug]/page.tsx
│   │   └── tag/[tag]/page.tsx
│   └── rss.xml/route.ts
└── lib/
    ├── blog.ts
    ├── rss.ts
    └── types/blog.ts
```

### RSS Feed
- Available at: `/rss.xml`
- Auto-generated on build
- Includes full post content or excerpt

### Sitemap
Blog routes auto-included in Next.js sitemap generation.

---

## 15. Resources & Tools

### Writing Tools
- **Markdown Editor**: VS Code with Markdown Preview Enhanced
- **Grammar Check**: Grammarly or LanguageTool
- **Image Optimization**: TinyPNG, ImageOptim

### Diagram Tools
- **Architecture Diagrams**: Draw.io, Lucidchart
- **Signal Traces**: matplotlib (Python)
- **System Models**: Cameo Systems Modeler, Enterprise Architect

### Standards Access
- ISO standards via organization subscription
- IEC standards via IEC Webstore
- FDA Guidance documents (free at fda.gov)

---

## 16. Example Post Titles (Backlog)

1. ✅ Designing a Low-Cost CATS Fixture for BLE Event Timing
2. From DFMEA to Test Strategy: Mapping Risks to V&V Artifacts
3. Validating Injection Timing on Electromechanical Autoinjectors
4. IQ/OQ/PQ in Practice for Custom Test Equipment
5. BLE Broadcast Latency: State Machines, Sniffers, and Timestamps
6. LTE Cat-M1 Verification on Embedded PCBAs
7. Authoring SRS/SDS That Engineers Actually Read
8. Supplier Transfer: IQC Specs, AQL, and Incoming Inspection

---

## 17. Support & Questions

**For technical issues with the blog system:**
- Check Next.js docs: https://nextjs.org/docs
- Blog utility functions: `lib/blog.ts`

**For editorial questions:**
- Refer to this guide
- Use `_template.md` as starting point
- Review published examples in `/content/blog/`

---

**Last Updated**: 2025-01-15
**Next Review**: 2025-04-15
