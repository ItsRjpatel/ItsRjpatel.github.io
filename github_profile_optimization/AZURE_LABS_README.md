# Azure Infrastructure Labs

[![Azure](https://img.shields.io/badge/Azure-Microsoft%20Azure-0078D4?logo=microsoft-azure&logoColor=white)](#)
[![Certification](https://img.shields.io/badge/Certification-AZ--900%20Certified-10b981.svg)](#)
[![Status](https://img.shields.io/badge/Status-Hands--on%20Lab%20Documentation-blue.svg)](#)

> 💡 **Repository Purpose:**  
> This repository documents my practical, hands-on lab experience with **Microsoft Azure**, bridging my existing Windows Server administration and endpoint support background with cloud infrastructure operations.

---

## 🎯 Lab Objectives & Scope

- **Cloud Provisioning:** Provisioning, configuring, and managing core Azure IaaS and PaaS resources.
- **Virtual Networking:** Building secure Virtual Networks (VNets), subnets, and Network Security Groups (NSGs).
- **Identity & Security:** Configuring Entra ID (Azure AD) basics, Role-Based Access Control (RBAC), and subscription management.
- **Hybrid Infrastructure:** Preparing for hybrid cloud administration by bridging on-premises Active Directory concepts with Azure AD / Azure VMs.

---

## ☁️ Azure Services & Modules Covered

### 1. Azure Virtual Machines (Compute)
- Provisioned Windows Server 2022 and Linux (Ubuntu) Virtual Machines.
- Configured OS disk sizing, storage account association, and administrative credentials.
- Configured secure Remote Desktop (RDP) and SSH access rules.

### 2. Virtual Networking & NSGs
- Built custom Virtual Networks (`VNets`) and partitioned subnets (`FrontendSubnet`, `BackendSubnet`).
- Formulated Network Security Groups (`NSG`) to control inbound and outbound port traffic (enforcing HTTP/HTTPS, RDP, and SSH port restrictions).

### 3. Resource Groups & Governance
- Structured cloud resources using Azure Resource Manager (ARM) Resource Groups (`rg-infrastructure-lab-01`).
- Applied resource tags, subscription level access management, and cost monitoring controls.

### 4. Azure App Service & Container Hosting
- Deployed basic web applications to Azure App Service.
- Explored containerized application hosting workflows (Docker images on Azure Container Registry & App Service).

---

## 🏆 Associated Certification

- 🎓 **Microsoft Certified: Azure Fundamentals (AZ-900)**  
  *Official Microsoft Certification validating foundational knowledge of cloud concepts, Azure architecture, Azure management, governance, security, and networking.*

---

## 📂 Repository Layout

```text
Azure-Infrastructure-Labs/
├── README.md                      # Centralized Cloud Lab Documentation
├── 1-Certifications/              # AZ-900 certification verification & badge details
├── 2-HandsOn-Labs/                # Step-by-step guides for VMs, VNets, and NSG rules
├── 3-Projects/                    # Cloud architecture deployment templates & scripts
└── 4-Resume/                    # Technical summary & cloud career connection
```

---

## 🤝 Connection to Infrastructure Career

My background includes Tier-1/Tier-2 enterprise endpoint support, ServiceNow administration, and server vulnerability management. These Azure labs demonstrate my commitment to extending core Windows Server skills into modern Microsoft Cloud environments.
