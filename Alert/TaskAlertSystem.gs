/**
 * Sends a formatted embed message to a Discord channel via Webhook.
 * Replace the placeholder URL with your actual Discord Webhook URL.
 */
function sendEmbedToDiscord() {
  // 1. Setup - Replace this with your actual URL
  var discordWebhookUrl = "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE";

  // safety check to prevent errors if you haven't pasted the URL yet
  if (discordWebhookUrl === "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE") {
    Logger.log("Error: Please paste your Discord Webhook URL into the script.");
    return;
  }

  // 2. Define the Embed Content
  var embed = {
    "title": "🚀 New Alert from Google Sheets",
    "description": "A specific task has been completed successfully.",
    "color": 5763719, // This is a specific shade of Green
    "fields": [
      {
        "name": "Status",
        "value": "✅ Success",
        "inline": true
      },
      {
        "name": "Timestamp",
        "value": new Date().toLocaleString(),
        "inline": true
      }
    ],
    "footer": {
      "text": "Sent via Google Apps Script"
    }
  };

  // 3. Prepare the Payload
  var payload = {
    "embeds": [embed]
  };

  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };

  // 4. Execute the Request
  try {
    var response = UrlFetchApp.fetch(discordWebhookUrl, options);
    var responseCode = response.getResponseCode();

    if (responseCode === 204 || responseCode === 200) {
      Logger.log("Message sent successfully!");
    } else {
      Logger.log("Discord API Error: " + responseCode);
      Logger.log("Response Body: " + response.getContentText());
    }
  } catch (error) {
    Logger.log("Execution failed: " + error.toString());
  }
}
