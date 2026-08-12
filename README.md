# srckit-smtp

<p align="center">
  <strong>Configure and test SMTP connections.</strong>
</p>

<p align="center">
  <a href="https://smtp.srckit.org">Live Demo</a> ·
  <a href="https://github.com/srckit-org/srckit">SrKit Suite</a> ·
  <a href="https://github.com/srckit-org/srckit-smtp/issues">Report Bug</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/react-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/MUI-9-007FFF?style=flat-square&logo=mui&logoColor=white" alt="MUI 9" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind 4" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 6" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/github/license/srckit-org/srckit-smtp?style=flat-square" alt="License" />
</p>

---

## Overview

srckit-smtp helps you configure SMTP settings for email sending. View connection strings, test configurations, and reference common SMTP providers.

## Features

### SMTP Tester
- **Configuration** — host, port, username, password
- **Connection string** — generated SMTP URL
- **From/To** — sender and recipient addresses
- **Reference** — connection string format

### Provider Reference
- **Gmail** — smtp.gmail.com:587
- **SendGrid** — smtp.sendgrid.net:587
- **Mailgun** — smtp.mailgun.org:587
- **AWS SES** — email-smtp.us-east-1.amazonaws.com:587
- **Mailtrap** — smtp.mailtrap.io:2525

## Getting Started

```bash
git clone https://github.com/srckit-org/srckit-smtp.git
cd srckit-smtp
npm install
npm run dev
```

## License

MIT © [srckit-org](https://github.com/srckit-org)
