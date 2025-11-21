// alerts.js
// Handles whale alert logic

function sendWhaleAlert(type, asset, amount) {
  console.log(`🚨 WHALE ALERT: ${type.toUpperCase()} detected on ${asset} for ${amount}!`);
}

module.exports = {
  sendWhaleAlert,
};
