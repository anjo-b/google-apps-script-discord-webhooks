function sendHelloWorldToDiscord() {
  var discordWebhookUrl = "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE";

  // --- SAFETY CHECK: Validate the URL before proceeding ---
  if (!discordWebhookUrl || discordWebhookUrl === "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE") {
    Logger.log("❌ SAFETY ERROR: Webhook URL is missing or still set to placeholder.");
    return "Error: Missing URL";
  }

  if (!discordWebhookUrl.startsWith("https://discord.com/api/webhooks/")) {
    Logger.log("❌ SAFETY ERROR: The provided URL does not look like a valid Discord Webhook link.");
    return "Error: Invalid URL Format";
  }

  // Use \n for a newline in the message
  var message = "Hello, World! 🚀" + "\n" + 
                "This is line two of the message." + "\n\n" + 
                "There is a double space above this line.";

  var payload = {
    content: message,
    username: "System Monitor",
    avatar_url: "https://i.imgur.com/AfFp7pu.png"
  };

  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true // Allows us to catch the error body instead of just crashing
  };

  try {
    var response = UrlFetchApp.fetch(discordWebhookUrl, options);
    var responseCode = response.getResponseCode();
    var responseText = response.getContentText();

    // --- ERROR HANDLING: Check the response status ---
    if (responseCode === 204 || responseCode === 200) {
      Logger.log("✅ SUCCESS: Message delivered to Discord.");
      return "Success";
    } else {
      // Provide specific feedback based on common Discord error codes
      var errorMsg = "⚠️ DISCORD ERROR (Code " + responseCode + "): " + responseText;
      Logger.log(errorMsg);
      return errorMsg;
    }

  } catch (error) {
    // Catch network-level errors (e.g., DNS issues or Google service downtime)
    var criticalError = "❌ CRITICAL SYSTEM ERROR: " + error.toString();
    Logger.log(criticalError);
    return criticalError;
  }
}

/**
 * TEST FUNCTION: Use this to check the safety and error logic
 */
function testDiscordConnection() {
  Logger.log("--- Starting Connection Test ---");
  
  var status = sendHelloWorldToDiscord();
  
  if (status === "Success") {
    Logger.log("Result: Test Passed!");
  } else {
    Logger.log("Result: Test Failed. " + status);
  }
  
  Logger.log("--- Test Finished ---");
}
