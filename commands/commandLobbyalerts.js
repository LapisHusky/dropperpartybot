export const name = "lobbyalerts"
export const aliases = ["la"]
export const allowedSources = ["slash", "party"]
export const description = "Toggles whether to alert when lobbies are detected as laggy/flame"
export const requireTrust = true
export async function run(usageInstance) {
  let countdownAlerts = usageInstance.clientHandler.countdownAlerts
  countdownAlerts.alertsEnabled = !countdownAlerts.alertsEnabled
  if (countdownAlerts.alertsEnabled) {
    usageInstance.reply(`§7Flame/laggy countdown alerts are now §cenabled§7 with a threshold of §c${countdownAlerts.alertThreshold / 1000} seconds§7.`)
  } else {
    usageInstance.reply(`§7Flame/laggy countdown alerts are now §cdisabled§7.`)
  }
}