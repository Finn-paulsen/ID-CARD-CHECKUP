const employee = {
  name: "Finn Paulsen",
  role: "Technischer Mitarbeiter im Aussendienst",
  badgeId: "FP314",
  validUntil: "12/2026",
  region: "Funkstandorte im Raum Quickborn",
  partner: "Stadtwerke Quickborn",
  employment: "Auszubildender im technischen Aussendienst",
  authorization: "Messwertaufnahmen und softwaretechnische Taetigkeiten im Auftrag der Deutsche Telekom Technik GmbH"
};

function applyData(data) {
  document.getElementById("name").textContent = data.name;
  document.getElementById("role").textContent = data.role;
  document.getElementById("badgeId").textContent = data.badgeId;
  document.getElementById("validUntil").textContent = data.validUntil;
  document.getElementById("region").textContent = data.region;
  document.getElementById("partner").textContent = data.partner;
  document.getElementById("employment").textContent = data.employment;
  document.getElementById("authorization").textContent = data.authorization;
}

applyData(employee);

document.getElementById("lastCheck").textContent = new Date().toLocaleString("de-DE", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});

document.getElementById("copyLinkBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    alert("Link wurde kopiert.");
  } catch {
    alert("Kopieren nicht moeglich. Bitte manuell kopieren.");
  }
});
