// ===== Alice Project Vaults =====
const projectVaults = {
  "EMF Imager": [],
  "Aircraft Project": [],
  "Cosmos AI": [],
  "Future Projects": []
};

// ===== Function to Open a Vault =====
function openVault(vaultName) {
  if (projectVaults[vaultName] !== undefined) {
    alert(`Opening ${vaultName} Vault... (Data Placeholder)`);
  } else {
    alert(`Vault "${vaultName}" does not exist.`);
  }
}