<div align="center">
  <img src="https://img.icons8.com/?size=100&id=42749&format=png&color=000000" alt="Sentinel Logo" width="80"/>
  <h1>Endpoint Sentinel X</h1>
  <p><strong>Personal Engineering Project / Enterprise-style Endpoint Management Platform</strong></p>
  <p>
    <img alt="License" src="https://img.shields.io/badge/License-MIT-blue.svg">
    <img alt="Python" src="https://img.shields.io/badge/Python-3.13+-blue?logo=python&logoColor=white">
    <img alt="FastAPI" src="https://img.shields.io/badge/FastAPI-0.141.1-009688?logo=fastapi&logoColor=white">
    <img alt="React" src="https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black">
    <img alt="Docker" src="https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white">
  </p>
</div>

---

## ⚡ 60-Second Recruiter Summary

**Endpoint Sentinel X** is a personal engineering project designed as an enterprise-style endpoint management and monitoring platform to deliver real-time system visibility, automated risk assessment, health telemetry, and real-time remote command orchestration across Windows endpoints.

Built as a lightweight alternative to commercial endpoint platforms like **Microsoft Intune** or **ManageEngine Endpoint Central**, it features an asynchronous **FastAPI** backend, persistent **WebSocket** channels, **Redis Pub/Sub**, and a native **Windows Agent Service** executing WMI and PowerShell telemetry collectors.

---

## 🎯 Problem & Solution

- **The Enterprise Challenge:** IT Administrators and Security Operations teams require real-time visibility into distributed endpoint health, hardware configurations, and active security posture without relying on slow manual polling.
- **The Sentinel Solution:** Engineered a lightweight client-agent architecture paired with non-blocking asynchronous REST and persistent WebSocket channels, enabling real-time command dispatch, live health telemetry, and automated alert resolution.

---

## 🏗️ Architecture & Component Stack

```mermaid
graph TD
    subgraph "Enterprise Dashboard (Frontend)"
        UI[React 18 + TypeScript UI]
        API_CLIENT[Axios / TanStack Query]
        WS_CLIENT[WebSocket Service]
    end

    subgraph "Sentinel X API (Backend)"
        ROUTER[FastAPI Routers]
        AUTH[Auth / RBAC Middleware]
        WS_MANAGER[WebSocket Manager]
        SERVICES[Business Logic Services]
        ORM[SQLAlchemy Async ORM]
    end

    subgraph "Data & Messaging Layer"
        DB[(PostgreSQL Database)]
        REDIS[(Redis Pub/Sub & Cache)]
    end

    subgraph "Endpoint Agent (Windows)"
        AGENT_CORE[Python Agent Service]
        COLLECTORS[WMI / PS Collectors]
        WS_CLIENT_AGENT[WebSocket Client]
        HTTP_CLIENT[REST Client]
    end

    UI <--> API_CLIENT
    UI <--> WS_CLIENT
    
    API_CLIENT -- "HTTPS (REST)" --> AUTH
    WS_CLIENT -- "WSS (Real-time)" --> WS_MANAGER
    
    AUTH --> ROUTER
    ROUTER --> SERVICES
    WS_MANAGER <--> SERVICES
    SERVICES <--> ORM
    SERVICES <--> REDIS
    ORM <--> DB

    AGENT_CORE <--> COLLECTORS
    AGENT_CORE <--> WS_CLIENT_AGENT
    AGENT_CORE <--> HTTP_CLIENT

    HTTP_CLIENT -- "HTTPS (REST)" --> AUTH
    WS_CLIENT_AGENT -- "WSS (Real-time)" --> WS_MANAGER
```

### 🔹 Component Breakdown
- **Backend API:** Python 3.13, FastAPI (Asynchronous REST + WebSockets), Pydantic v2 data validation, Alembic schema migrations.
- **Endpoint Agent:** Registered Windows Service (packaged via PyInstaller) running WMI & PowerShell metric collectors.
- **Data & Message Layer:** PostgreSQL (Async via `asyncpg`) for relational inventory and alert logs + Redis for Pub/Sub command dispatching & heartbeat caching.
- **Frontend Console:** React 18, TypeScript, Vite, Tailwind CSS, TanStack Query.
- **Security Operations:** JWT authentication, bcrypt/Argon2 password hashing, Role-Based Access Control (Super Admin, Operator, Security Analyst, Viewer), CORS policy enforcement.

---

## ✨ Implemented Core Capabilities

- 🖥️ **Hardware & OS Inventory:** Automatic collection of CPU, RAM, Disk partitions, and Network Interface specifications.
- ⏱️ **Real-Time Telemetry & Status:** Online/offline heartbeat detection and performance metrics collection.
- 🛡️ **Security Posture & Alerting:** Risk scoring, threat triage dashboard, and automated alert resolution workflows.
- ⚡ **Real-Time Command Dispatch:** Execution of remote system commands (scans, process termination, agent updates) via persistent WebSockets.
- 🐳 **Containerized Deployment:** Dockerized multi-container setup with Azure App Service deployment automation (`.github/workflows/main_sentinel-backend-x.yml`).

---

## 🛠️ Quick Local Setup

1. **Backend Setup:**
   ```bash
   cd backend
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   pip install -e .
   alembic upgrade head
   python scripts/bootstrap.py
   uvicorn app.main:app --reload
   ```

2. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Interactive API Documentation:**
   Access OpenAPI / Swagger UI at `http://localhost:8000/docs`

---

## 📋 Security & Compliance Notes

- **Zero Hardcoded Credentials:** Environment variables managed via `.env` and Azure KeyVault integration.
- **RBAC Enforcement:** Route-level dependency injection enforcing user permissions.
- **Telemetry Integrity:** Agent token rotation and HMAC message verification.
