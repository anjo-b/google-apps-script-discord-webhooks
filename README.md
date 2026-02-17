# Discord Webhook Scripts for Google Apps Script

A collection of Google Apps Script utilities for sending notifications, alerts, and form responses from Google services to Discord channels via webhooks.

## 📁 Project Structure

```
.
├── Alert/                          # Discord embed notifications
│   ├── README.md                   
│   └── TaskAlertSystem.gs          # Sends formatted embed messages
│
├── Google-Form-Responses/          # Form submission handlers
│   ├── Responses/                   
│   │   ├── get_responses.gs        # Sends all form responses
│   │   └── README.md               
│   └── Specific-Responses/         
│       ├── get_specific_responses.gs # Sends selected form fields only
│       └── README.md                
│
└── Send-Notifications/             # Simple message notifications
    ├── HelloWorld.gs               # Basic text messages with validation
    └── README.md                   
```

## 🚀 Overview

This repository contains multiple Google Apps Script solutions for integrating Google Workspace with Discord. Each script is designed for different use cases:

### 1️⃣ **Alert System** (`/Alert`)
Sends formatted **embed messages** to Discord with rich formatting including titles, colors, fields, and footers. Perfect for system alerts and task completion notifications.

**Best for:**
- Task completion alerts
- System monitoring
- Status updates
- Automated notifications

### 2️⃣ **Form Response Handler** (`/Google-Form-Responses/Responses`)
Automatically sends **all Google Form responses** to Discord as formatted embeds when a form is submitted.

**Best for:**
- Real-time form submission notifications
- Community applications
- Support ticket systems
- Feedback collection

### 3️⃣ **Specific Form Fields** (`/Google-Form-Responses/Specific-Responses`)
Sends **only selected fields** from Google Form responses to Discord, ignoring unnecessary data.

**Best for:**
- Profile submissions
- Staff applications
- Lead generation
- Filtered data sharing

### 4️⃣ **Simple Notifications** (`/Send-Notifications`)
Basic text message sender with built-in validation and error handling. Includes connection testing functionality.

**Best for:**
- Quick notifications
- Testing Discord connections
- Simple alerts
- Hello World examples

## 🔧 Quick Start

### Prerequisites
- A Discord server with webhook creation permissions
- Google account (for Apps Script)
- Google Sheets/Forms (for form response scripts)

### General Setup Steps

1. **Create a Discord Webhook**
   - Open your Discord server
   - Go to **Server Settings → Integrations → Webhooks**
   - Click **New Webhook**
   - Copy the Webhook URL

2. **Configure the Script**
   - Open Google Apps Script editor
   - Paste the desired script
   - Replace the placeholder URL:
   ```javascript
   var discordWebhookUrl = "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE";
   ```
   with:
   ```javascript
   var discordWebhookUrl = "YOUR_ACTUAL_WEBHOOK_URL";
   ```

3. **Set Up Triggers (For Form Scripts)**
   - Click the clock icon (Triggers) in Apps Script
   - Add a new trigger
   - Choose function: `onFormSubmit`
   - Event type: `On form submit`
   - Save and authorize

## 📊 Script Comparison

| Script | Message Type | Use Case | Features |
|--------|-------------|----------|----------|
| `TaskAlertSystem.gs` | Embed | System alerts | Title, description, color, fields, footer |
| `get_responses.gs` | Embed | All form responses | Auto-formatting, date stamp, all fields |
| `get_specific_responses.gs` | Embed | Filtered responses | Field filtering, clean alignment |
| `HelloWorld.gs` | Text | Simple notifications | URL validation, error handling, test function |

## 🎨 Customization Options

All scripts support Discord webhook customization:

```javascript
var payload = {
  "content": message,                    // For text messages
  "embeds": [embed],                      // For embed messages
  "username": "Your Bot Name",            // Custom bot name
  "avatar_url": "https://i.imgur.com/image.png" // Custom bot avatar
};
```

## ⚠️ Important Notes

- **Never share your webhook URL publicly** - regenerate if exposed
- All scripts include error logging for debugging
- Avatar URLs must be publicly accessible
- Respect Discord's rate limits and character limits
- Test scripts with `testDiscordConnection()` where available

## 🔒 Security Features

- URL validation before sending
- Placeholder URL detection
- Error handling with detailed logging
- Safe execution with `muteHttpExceptions`

## 📚 Documentation

Each subfolder contains a detailed README.md with:
- Specific setup instructions
- Configuration options
- Example outputs
- Usage tips
