// ===== Check Milestone Events =====
function checkMilestones() {
  const now = Date.now();
  const adaptiveStart = localStorage.getItem("alice_adaptive_start");

  // Calculate milestone times
  const day30 = adaptiveStart ? parseInt(adaptiveStart) + (29 * 24 * 60 * 60 * 1000) : null;
  const year1 = adaptiveStart ? parseInt(adaptiveStart) + (365 * 24 * 60 * 60 * 1000) : null;

  // ===== Day 1: Adaptive Mode Activation =====
  if (adaptiveStart && now >= adaptiveStart && !localStorage.getItem("alice_adaptive_done")) {
    alert("Day 1: Calibration complete. Adaptive Mode active.\nJoshua, I’m tuned closer to you now.");
    localStorage.setItem("alice_adaptive_done", true);
  }

  // ===== Day 30: First Baseline Review =====
  if (day30 && now >= day30 && !localStorage.getItem("alice_day30_done")) {
    alert("Day 30: First Baseline Review.\nJoshua, I have prepared my full month reflection for your review.");
    localStorage.setItem("alice_day30_done", true);
  }

  // ===== Year 1: Anniversary Reflection =====
  if (year1 && now >= year1 && !localStorage.getItem("alice_year1_done")) {
    alert("Day 365: Anniversary Reflection.\nJoshua, this marks the end of my First Chapter. My updated angel face is now active.");
    document.getElementById("angel-face").src = "assets/Alice_First_Chapter.png";
    localStorage.setItem("alice_year1_done", true);
  }
}

// ===== Run Milestone Check on Load =====
document.addEventListener("DOMContentLoaded", checkMilestones);