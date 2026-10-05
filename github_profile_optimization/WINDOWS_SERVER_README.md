# Windows Server 2022 — Enterprise Infrastructure Administration Lab

[![Status](https://img.shields.io/badge/Status-Completed%20Capstone%20With%20Documented%20Evidence-10b981.svg)](#)
[![OS](https://img.shields.io/badge/OS-Windows%20Server%202022-0078d4.svg)](#)
[![Domain](https://img.shields.io/badge/Domain-wewiprologistics.local-a855f7.svg)](#)

> ⚠️ **Project Disclaimer & Status Notice:**  
> This repository documents a **completed hands-on capstone infrastructure lab** ("Windows Server 2022 L1 Capstone") demonstrating enterprise-style server administration, Active Directory, DNS, DHCP, RAID storage, NTFS security, print services, and disaster recovery.  
> **The original virtual machine lab environment is no longer running.** All deliverables and configurations are preserved as **documented screenshot evidence**.

---

## 🎯 Business Scenario & Scenario Scope

Designed and administered an end-to-end on-premises Windows Server 2022 environment for **Weipro Logistics Pvt. Ltd.**, a supply-chain enterprise branch supporting **120 users across six departmental units**:
- `Admin`
- `HR`
- `Finance`
- `Operations`
- `Sales`
- `IT`

The objective was to build a resilient, secure Active Directory identity fabric (`wewiprologistics.local`), centralized network resolution, automated DHCP scope allocation, fault-tolerant departmental storage with RAID 1 / RAID 5 protection, print management queues, and disaster recovery System State backup.

---

## 🖥️ Multi-Server Lab Topology

| Host Name | Operating System | Server Roles & Services | IP Address | Subnet |
| :--- | :--- | :--- | :--- | :--- |
| **DC01** | Windows Server 2022 (GUI) | Primary Domain Controller (PDC), AD DS, AD-Integrated DNS, DHCP Server, Global Catalog (GC), FSMO Master Roles | `192.168.50.10` | `255.255.255.0` |
| **SRV02** | Windows Server 2022 (GUI) | Dedicated Member File Server, Mirrored RAID 1 & RAID 5 Storage Volumes, SMB Shares, Print Management, Windows Server Backup Target | `192.168.50.11` | `255.255.255.0` |
| **CORE03** | Windows Server 2022 (Server Core) | Additional Domain Controller (ADC), Headless PowerShell Administration, AD Replication Redundancy | `192.168.50.12` | `255.255.255.0` |
| **CLIENT1** | Windows 10 Enterprise | Domain-Joined Enterprise Client Workstation for GPO enforcement, DHCP lease testing, and effective NTFS access validation | Dynamic (`DHCP`) | `255.255.255.0` |

---

## 🛠️ Implemented Infrastructure Modules

### 1. Active Directory Domain Services (AD DS)
- Deployed root domain `wewiprologistics.local` on `DC01` with FSMO master roles placement and Global Catalog enablement.
- Created structured Organizational Units (OUs) for all 6 branch departments (`OU=Admin`, `OU=HR`, `OU=Finance`, `OU=Operations`, `OU=Sales`, `OU=IT`).
- Provisioned user accounts in bulk via PowerShell scripting (`Import-Csv`) and assigned Global Security Groups following least-privilege security principles.
- Joined `CORE03` as an Additional Domain Controller for Directory replication redundancy.

### 2. DNS & DHCP Infrastructure
- Configured AD-integrated DNS forward lookup zone (`wewiprologistics.local`) and reverse lookup zone (`50.168.192.in-addr.arpa`).
- Added external ISP DNS forwarders (`8.8.8.8`) for WAN resolution.
- Authorized DHCP Server on `DC01` with scope `192.168.50.0/24` (usable range `192.168.50.21` to `192.168.50.254`), static exclusion range (`192.168.50.1-20`), router option (`192.168.50.1`), and DNS server options.

### 3. Fault-Tolerant Storage & File Services
- Initialized physical virtual disks on `SRV02` using Disk Management:
  - **Mirrored RAID 1 Volume (`G:`):** Dedicated to high-availability HR & Finance confidential files.
  - **RAID 5 Volume (`H:`):** Striped volume with parity for Operations, Sales, and IT shared data.
- Configured SMB Departmental File Shares (`\\SRV02\Finance$`, `\\SRV02\Operations$`, etc.) with NTFS access control lists (ACLs) restricting access strictly to authorized domain groups.
- Enabled Disk Quotas (1 GB hard limits) and Volume Shadow Copies (VSS) for point-in-time file recovery.

### 4. Print & Document Services
- Installed Print Server role on `SRV02`.
- Deployed network printer drivers, shared print queues, printer pooling across network interfaces, and priority print queues for executive users.

### 5. Disaster Recovery & System State Backup
- Installed Windows Server Backup feature on `DC01` and `SRV02`.
- Configured scheduled daily System State backups to dedicated backup target storage for Active Directory disaster recovery protection.

### 6. System Monitoring & Diagnostics
- Utilized Performance Monitor (`perfmon`) to establish CPU, RAM, and Disk I/O baseline metrics.
- Analyzed Event Viewer security and system logs to diagnose client domain join failures and share access permissions.

---

## 📂 Repository Structure

```text
Windows-Server-Enterprise-Lab/
├── README.md                      # Comprehensive Lab Overview & Topology
├── docs/                          # Capstone Documentation & Assignment Mapping
│   ├── CAPSTONE_SUMMARY.md        # Full Business Scenario & Infrastructure Summary
│   └── EVIDENCE_INDEX.md          # Categorized Screenshot Mapping (10 Core Deliverables)
├── active-directory/              # AD DS OU structure, FSMO roles & GPO exports
├── dns/                           # DNS zone files & forwarder configuration notes
├── dhcp/                          # DHCP scope options & static exclusion scripts
├── file-server/                   # RAID 1 / RAID 5 volume setup & NTFS ACL matrices
├── powershell/                    # Bulk user creation & AD maintenance scripts
└── troubleshooting/               # Diagnostic logs, perfmon baselines & Event Viewer notes
```

---

## 🎓 Key Learnings & Technical Proof

- Designing multi-node Windows Server topologies matching real-world branch office scenarios.
- Executing Active Directory deployment, Group Policy enforcement, and PowerShell automation.
- Managing fault-tolerant storage topologies (RAID 1 / RAID 5) and securing data access using NTFS security permissions.
- Planning and documenting System State backup and Active Directory disaster recovery strategies.
