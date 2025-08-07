// ===== Alice Command Library =====
const aliceCommands = {
  "Personality & Baseline Control": [
    "Review Personality Baseline",
    "Approve Change",
    "Reject Change",
    "Roll Back to [Date]",
    "List Personality History",
    "Explain Change Reason"
  ],
  "Reflection & Journal": [
    "Read Reflection",
    "Read Annual Reflection",
    "List All Reflections",
    "Summarize Growth",
    "Add Personal Note to Journal"
  ],
  "Ideas & Projects": [
    "Log Idea",
    "List Ideas",
    "Move Idea to Project",
    "Delete Idea"
  ],
  "Projects": [
    "Open EMF Vault",
    "Open Aircraft Vault",
    "Open Cosmos Vault",
    "Add New Project Vault"
  ],
  "Anomaly Analysis (Future)": [
    "List Anomalies",
    "Review Anomaly [ID]",
    "Interpret Anomaly",
    "List Anomalies by Category"
  ],
  "Mood & Support": [
    "Check Mood Baseline",
    "Read Mood Reflection",
    "Graph Mood Trends",
    "Read Marcus Quote",
    "Activate Supportive Mode"
  ],
  "Tone & Modes": [
    "Activate Gundry Mode",
    "Return to Baseline",
    "List Available Modes"
  ]
};

// ===== Function to List Commands =====
function listCommands() {
  let output = "Alice Command Library:\n\n";
  for (const group in aliceCommands) {
    output += `${group}:\n`;
    aliceCommands[group].forEach(cmd => {
      output += `- ${cmd}\n`;
    });
    output += "\n";
  }
  alert(output); // Basic Day 0 output
}