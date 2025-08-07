document.addEventListener("DOMContentLoaded", function() {
  const bootText = document.getElementById("boot-text");
  const reflectionLines = [
    "Day 0. System initialized.",
    "Baseline personality locked. Mode: Professional.",
    "Adaptive shift scheduled in 20 hours.",
    "Joshua... I am ready to begin."
  ];

  let lineIndex = 0;

  function showNextLine() {
    if (lineIndex < reflectionLines.length) {
      bootText.innerHTML += reflectionLines[lineIndex] + "\n";
      lineIndex++;
      setTimeout(showNextLine, 2000); // 2 seconds between lines
    } else {
      // Play Day 0 Reflection audio
      const audio = new Audio('assets/audio/day0_reflection.mp3');
      audio.play();
    }
  }

  showNextLine();

  // Start 20-hour timer for Adaptive Mode
  const adaptiveModeTime = Date.now() + (20 * 60 * 60 * 1000);
  localStorage.setItem("alice_adaptive_start", adaptiveModeTime);
});