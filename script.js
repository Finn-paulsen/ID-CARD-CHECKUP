const employees = {
  MZ204: {
    name: "Matthias Zimmermann",
    role: "Autorisierter Kundenberater",
    badgeId: "MZ204",
    validUntil: "09/2026",
    region: "NRW / Raum Dortmund",
    partner: "Ranger Marketing & Vertriebs GmbH",
    auftrag: "Im Auftrag der Telekom (Demo)"
  },
  MZ205: {
    name: "Matthias Zimmermann",
    role: "Autorisierter Kundenberater",
    badgeId: "MZ205",
    validUntil: "12/2026",
    region: "NRW / Raum Essen",
    partner: "Ranger Marketing & Vertriebs GmbH",
    auftrag: "Im Auftrag der Telekom (Demo)"
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
  document.getElementById("auftrag").textContent = data.auftrag;
}

const id = (getParam("id") || "MZ204").toUpperCase();
applyData(employees[id] || employees.MZ204);

document.getElementById("copyLinkBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    alert("Link wurde kopiert.");
  } catch {
    alert("Kopieren nicht möglich. Bitte manuell kopieren.");
  }
});
