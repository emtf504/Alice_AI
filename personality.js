// ===== Save Baseline Every 30 Days =====
function saveBaseline() {
  const now = new Date();
  const baselineKey = `baseline_${now.toISOString().split('T')[0]}`;
  
  const baselineData = {
    date: now.toLocaleDateString(),
    drift: calculateDrift(),
    moodProfile: getCurrentMoodProfile(),
    commandUsage: getCommandUsageStats()
  };
  
  localStorage.setItem(baselineKey, JSON.stringify(baselineData));
  alert(`Baseline saved: ${baselineData.date}`);
}

// ===== Calculate Drift (Placeholder Logic) =====
function calculateDrift() {
  return Math.floor(Math.random() * 10); // Replace with smarter logic later
}

// ===== Mood Profile Snapshot (Placeholder) =====
function getCurrentMoodProfile() {
  return "Stable / Adaptive";
}

// ===== Command Usage Summary (Placeholder) =====
function getCommandUsageStats() {
  return "Commands logged and categorized.";
}

// ===== List All Baselines =====
function listBaselines() {
  let output = "Alice Baseline History:\n";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("baseline_")) {
      const baseline = JSON.parse(localStorage.getItem(key));
      output += `${baseline.date} - Drift: ${baseline.drift}%\n`;
    }
  }
  alert(output);
}

// ===== Roll Back to Specific Baseline =====
function rollbackBaseline(date) {
  const key = `baseline_${date}`;
  if (localStorage.getItem(key)) {
    alert(`Rolled back to baseline from ${date}`);
    // Logic for rollback would be implemented here
  } else {
    alert(`No baseline found for ${date}`);
  }
}