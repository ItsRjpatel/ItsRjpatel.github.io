# Portfolio Optimization & Enhancement Changelog

**Candidate:** Rajeev (RJ) Kumar  
**Target Identity:** Project Engineer | IT Infrastructure | Windows Server | Azure | Endpoint Management | Intune | PowerShell  
**Implementation Date:** October 5, 2026  
**Status:** Clean Homepage Refactoring & Evidence Gallery Modal Implemented  

---

## 1. Homepage Visual Refactoring (Clean & Uncluttered)

- **Preserved Project Hierarchy:**
  1. **Endpoint Sentinel X** — Flagship engineering project (Python, FastAPI, Redis, WebSockets, React).
  2. **Windows Server 2022 Lab** — Flagship infrastructure project.
  3. **Azure Infrastructure Labs** — Cloud infrastructure showcase.
- **Streamlined Homepage Project Card:**
  - Reduced homepage screenshot count from 10 to **4 featured highlights** (Active Directory Forest, DNS & DHCP Services, RAID Storage Volumes, System Backup).
  - Maintained clean typography, multi-server topology diagram, business scenario summary (**Weipro Logistics Pvt. Ltd.**), and status badge (`COMPLETED — DOCUMENTED EVIDENCE`).
  - Added clean CTA button: `View Full Categorized Gallery (10 Screenshots)`.

---

## 2. Dedicated Evidence Gallery Modal & Category Filtering

- **Interactive Evidence Modal (`#evidence-gallery-modal`):**
  - Displays all 10 extracted capstone evidence items inside a dedicated overlay modal.
  - Added category filter tabs:
    - `All Evidence (10)`
    - `Active Directory` (Forest & OUs/Users)
    - `DNS & DHCP` (Forward/Reverse Zones & Scopes)
    - `Storage & File Shares` (RAID 1/5 & SMB Shares)
    - `Admin & Print` (Server Manager & Print Management)
    - `Backup & Diagnostics` (System State & PerfMon)
  - Labeled all evidence items accurately: `DOCUMENTED IN CAPSTONE`.

---

## 3. Full-Screen Lightbox Zoom Modal

- **Interactive Lightbox (`#lightbox-modal`):**
  - Added click-to-zoom functionality on all evidence screenshots (`.zoomable-img`).
  - Displays full-screen image preview, title, and detailed technical caption.
  - Supports close button, overlay click, and `Escape` key dismissal.

---

## 4. Certifications & Homepage Integrity

- **Clean Certification Cards:**
  - Retained clean professional cards for AZ-900 Microsoft Azure Fundamentals, Wipro Internal Assessments (Windows Server L1/L2, EUC L2, Linux L1/L2), and Education (BITS Pilani / Govt Poly).
  - Kept homepage free of certificate image clutter.
- **Privacy Enforcement:**
  - Preserved redaction of student ADID `RA40138927`, phone numbers, and private credentials.

---

## 5. Code Quality & Local Verification

- **Architecture:** Pure Vanilla Web Stack (HTML5, CSS3, JS).
- **Responsive & Accessibility:** Verified modal, filter tabs, and lightbox functionality across Desktop, Tablet, and Mobile screen sizes.
- **No Git Push:** All changes remain local in `d:\Project-nw` for user review.
