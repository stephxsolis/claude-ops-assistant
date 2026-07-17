# ClaudeOps

ClaudeOps is a full-stack AI-powered IT incident management application built with React, FastAPI, SQLite, and Anthropic's Claude API.

Users can create support tickets, manage incident status and assignments, and use Claude to automatically analyze incidents by identifying the issue, assigning a priority, and recommending troubleshooting steps.

## Overview

Small organizations often spend significant time responding to repetitive operational requests, documenting resolutions, and transferring knowledge between team members.

ClaudeOps is a full-stack web application that combines traditional incident management with AI-assisted workflows. Instead of only tracking requests, ClaudeOps helps users understand issues faster, generate actionable recommendations, and automatically create reusable documentation.

This project demonstrates how large language models can augment—not replace—human decision making in everyday organizational operations.



## Features

### Ticket Management
- Create IT support tickets
- Update ticket status
- Assign tickets to team members
- Delete tickets
- Store tickets in SQLite using SQLAlchemy

### AI Incident Analysis
- Analyze tickets using Anthropic Claude
- Identify incident category
- Recommend priority level
- Generate concise incident summaries
- Suggest troubleshooting steps

### User Interface
- Responsive React frontend
- Dark-themed dashboard
- Loading state during AI analysis

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

## Demo
![alt text](<images/Screenshot 2026-07-16 at 9.24.51 PM.png>)

## Why I Built This

During my time working in IT support, I noticed that resolving technical issues often depended on institutional knowledge scattered across emails, tickets, and individual team members.

I built ClaudeOps to explore how AI can reduce repetitive work while preserving human oversight. Rather than replacing technical staff, the goal is to help organizations respond more consistently, document solutions automatically, and make operational knowledge easier to share.


## Future Improvements

- Role-based authentication
- Searchable knowledge base
- Multi-organization support
- AI-generated workflow automation
- Reporting and analytics