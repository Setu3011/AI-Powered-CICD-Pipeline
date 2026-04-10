# 🚀 AI-Powered CI/CD Pipeline

An intelligent DevOps project that integrates **CI/CD automation with AI-powered debugging**.
This system not only builds, tests, and deploys applications but also **analyzes failures using AI and suggests fixes automatically**.

---

## 📌 Project Overview

This project demonstrates a complete **end-to-end CI/CD pipeline** using:

* 🐳 Docker for containerization
* ⚙️ Jenkins for automation
* ☸️ Kubernetes for deployment & scaling
* 🤖 OpenAI API for AI-based error analysis

When a pipeline fails, the system:

1. Captures error logs
2. Sends them to AI
3. Gets root cause + fix suggestion
4. Displays output in logs/dashboard

---

## 🧠 Key Features

* ✅ Automated CI/CD pipeline
* ✅ Docker image build & push
* ✅ Kubernetes deployment with scaling
* ✅ AI-based failure analysis
* ✅ Secure API key handling using environment variables
* ✅ Real-time debugging suggestions

---

## 🏗️ Architecture

GitHub → Jenkins → Docker → Kubernetes → AI Analysis

---

## ⚙️ Tech Stack

| Tool       | Purpose                |
| ---------- | ---------------------- |
| Jenkins    | CI/CD automation       |
| Docker     | Containerization       |
| Kubernetes | Deployment & scaling   |
| Node.js    | Application backend    |
| OpenAI API | AI error analysis      |
| GitHub     | Source code management |

---

## 🚀 Setup & Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/AI-Powered-CICD-Pipeline.git
cd AI-Powered-CICD-Pipeline
```

---

### 2️⃣ Run Application Locally

```bash
npm install
node app.js
```

---

### 3️⃣ Build Docker Image

```bash
docker build -t your-dockerhub-username/ai-cicd-app .
docker run -p 3000:3000 ai-cicd-app
```

---

### 4️⃣ Push to Docker Hub

```bash
docker login
docker push your-dockerhub-username/ai-cicd-app
```

---

### 5️⃣ Deploy to Kubernetes

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

---

### 6️⃣ Run Jenkins Pipeline

* Configure Jenkins job
* Add credentials:

  * Docker Hub credentials
  * OpenAI API key
* Run pipeline

---

## 🤖 AI Integration

When a failure occurs:

* Logs are stored in `error.log`
* Sent to OpenAI API via `ai_debug.py`
* AI returns:

  * Root cause
  * Suggested fix

---

## 🔐 Security Best Practices

* API keys are NOT hardcoded
* Stored using environment variables
* Managed securely via Jenkins credentials

---

