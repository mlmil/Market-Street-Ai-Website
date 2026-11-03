const panels = Array.from(document.querySelectorAll("[data-board-panel]"));
const profileFields = Array.from(document.querySelectorAll("[data-profile-field]"));
const summary = document.getElementById("board-summary");
const statusLine = document.getElementById("board-status");
const copyButton = document.getElementById("copy-board");
const clearButton = document.getElementById("clear-board");
const storageKey = "market-street-ai-phase-1-board";

const labels = {
  pain: "Where the pressure is showing up",
  ideas: "AI ideas you are curious about",
  concerns: "Concerns or red lines",
  success: "Success would look like",
  phase1: "Discovery: safe, internal, useful in 30 days",
  phase2: "Phase 2: good idea, needs more maturity",
  later: "Later: interesting, not urgent",
  notNow: "Not now: too risky, automated, or sensitive",
};

const profileLabels = {
  businessName: "Business name",
  position: "Your position",
  staffSize: "Staff size",
  website: "Website",
  currentAiTools: "Current AI tools in use",
  businessDescription: "What the business does",
};

function getPanelParts(panel) {
  return {
    checkboxes: Array.from(panel.querySelectorAll('input[type="checkbox"]')),
    comment: panel.querySelector("textarea"),
  };
}

function readBoard() {
  const profile = profileFields.reduce((data, field) => {
    data[field.dataset.profileField] = field.value.trim();
    return data;
  }, {});

  const panelsData = panels.reduce((data, panel) => {
    const key = panel.dataset.boardPanel;
    const { checkboxes, comment } = getPanelParts(panel);
    data[key] = {
      selected: checkboxes.filter((box) => box.checked).map((box) => box.value),
      comment: comment.value.trim(),
    };
    return data;
  }, {});

  return { profile, panels: panelsData };
}

function writeBoard(data) {
  const profile = data.profile || {};
  profileFields.forEach((field) => {
    field.value = profile[field.dataset.profileField] || "";
  });

  const panelsData = data.panels || data;
  panels.forEach((panel) => {
    const key = panel.dataset.boardPanel;
    const saved = panelsData[key] || { selected: [], comment: "" };
    const { checkboxes, comment } = getPanelParts(panel);
    checkboxes.forEach((box) => {
      box.checked = saved.selected.includes(box.value);
    });
    comment.value = saved.comment || "";
  });
}

function formatProfile(profile) {
  return Object.entries(profileLabels)
    .map(([key, label]) => `${label}: ${profile?.[key] || "-"}`)
    .join("\n");
}

function formatPanel(value) {
  const selected = value?.selected?.length ? value.selected.map((item) => `- ${item}`).join("\n") : "-";
  const comment = value?.comment ? `\nComment: ${value.comment}` : "";
  return `${selected}${comment}`;
}

function buildSummary(data) {
  const profileBlock = `Business snapshot\n${formatProfile(data.profile)}\n`;
  const panelBlock = Object.entries(labels)
    .map(([key, label]) => `${label}\n${formatPanel(data.panels?.[key])}\n`)
    .join("\n");
  return `${profileBlock}\n${panelBlock}`;
}

function updateSummary() {
  const data = readBoard();
  localStorage.setItem(storageKey, JSON.stringify(data));
  summary.value = buildSummary(data);
}

function setStatus(message) {
  statusLine.textContent = message;
}

function loadSavedBoard() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) {
    updateSummary();
    return;
  }

  try {
    writeBoard(JSON.parse(saved));
  } catch {
    localStorage.removeItem(storageKey);
  }
  updateSummary();
}

panels.forEach((panel) => {
  panel.addEventListener("input", () => {
    updateSummary();
    setStatus("Saved in this browser while you work.");
  });
});

profileFields.forEach((field) => {
  field.addEventListener("input", () => {
    updateSummary();
    setStatus("Saved in this browser while you work.");
  });
});

copyButton.addEventListener("click", async () => {
  updateSummary();
  try {
    await navigator.clipboard.writeText(summary.value);
    setStatus("Summary copied.");
  } catch {
    summary.select();
    setStatus("Copy failed. The summary text is selected.");
  }
});

clearButton.addEventListener("click", () => {
  profileFields.forEach((field) => {
    field.value = "";
  });
  panels.forEach((panel) => {
    const { checkboxes, comment } = getPanelParts(panel);
    checkboxes.forEach((box) => {
      box.checked = false;
    });
    comment.value = "";
  });
  localStorage.removeItem(storageKey);
  updateSummary();
  setStatus("Board cleared.");
});

loadSavedBoard();
