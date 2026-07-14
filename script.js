const employees = {
  MZ204: {
    name: "Matthias Zimmermann",
    role: "Technischer Aussendienst / IT",
    badgeId: "MZ204",
    validUntil: "09/2026",
    region: "Raum Quickborn (Schleswig-Holstein)",
    partner: "Deutsche Telekom Privatkunden-Vertrieb GmbH",
    employment: "Direktanstellung Deutsche Telekom (kein Vertriebspartner)",
    authorization: "Aussendienst, Funkstandorte und IT-Bereich"
  },
  MZ205: {
    name: "Matthias Zimmermann",
    role: "Technischer Aussendienst / IT",
    badgeId: "MZ205",
    validUntil: "12/2026",
    region: "Raum Quickborn (Schleswig-Holstein)",
    partner: "Deutsche Telekom Privatkunden-Vertrieb GmbH",
    employment: "Direktanstellung Deutsche Telekom (kein Vertriebspartner)",
    authorization: "Aussendienst, Funkstandorte und IT-Bereich"
  },
  FP314: {
    name: "Finn Paulsen",
    role: "Technischer Mitarbeiter im Aussendienst",
    badgeId: "FP314",
    validUntil: "12/2026",
    region: "Funkstandorte im Raum Quickborn",
    partner: "Stadtwerke Quickborn",
    employment: "Auszubildender im technischen Aussendienst",
    authorization: "Autorisiert fuer Messwertaufnahmen und softwaretechnische Taetigkeiten im Auftrag der Deutsche Telekom Technik GmbH"
  }
};

function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

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

const defaultId = (document.body.dataset.employeeId || "MZ204").toUpperCase();
const id = (getParam("id") || defaultId).toUpperCase();
applyData(employees[id] || employees[defaultId] || employees.MZ204);

const checkStamp = new Date().toLocaleString("de-DE", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});
document.getElementById("lastCheck").textContent = checkStamp;

document.getElementById("copyLinkBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    alert("Link wurde kopiert.");
  } catch {
    alert("Kopieren nicht möglich. Bitte manuell kopieren.");
  }
});
