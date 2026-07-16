# ClaudeOps

AI-powered operations assistant that helps organizations triage requests, generate documentation, and streamline repetitive workflows using Claude.

---

## Overview

Small organizations often spend significant time responding to repetitive operational requests, documenting resolutions, and transferring knowledge between team members.

ClaudeOps is a full-stack web application that combines traditional incident management with AI-assisted workflows. Instead of only tracking requests, ClaudeOps helps users understand issues faster, generate actionable recommendations, and automatically create reusable documentation.

This project demonstrates how large language models can augment—not replace—human decision making in everyday organizational operations.

---

## Features

### Incident Management
- Create, update, and delete incidents
- Track status and severity
- Store incidents in a relational database

### AI Ticket Analysis
- Categorize incidents
- Summarize issues
- Identify priority
- Recommend troubleshooting steps

### AI Documentation
- Generate knowledge-base articles
- Produce reusable runbooks
- Create incident summaries

### Analytics
- Dashboard showing incidents
- Status tracking
- Severity distribution

---

## Tech Stack

Frontend
- React
- TypeScript
- Vite

Backend
- FastAPI
- Python
- SQLAlchemy
- SQLite

AI
- Claude API

Tools
- Git
- GitHub

---

## Why I Built This

During my time working in IT support, I noticed that resolving technical issues often depended on institutional knowledge scattered across emails, tickets, and individual team members.

I built ClaudeOps to explore how AI can reduce repetitive work while preserving human oversight. Rather than replacing technical staff, the goal is to help organizations respond more consistently, document solutions automatically, and make operational knowledge easier to share.

---

## Future Improvements

- Role-based authentication
- Searchable knowledge base
- Multi-organization support
- AI-generated workflow automation
- Reporting and analytics