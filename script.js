// save the selected component
function selectPart(type, value) {
  localStorage.setItem(type, value);
  alert(value + " selected!");
}

// display the final build
function loadBuild() {
  const cpu = localStorage.getItem("cpu") || "Not selected";
  const ram = localStorage.getItem("ram") || "Not selected";
  const storage = localStorage.getItem("storage") || "Not selected";
  const gpu = localStorage.getItem("gpu") || "Not selected";

  document.getElementById("cpu-result").textContent = cpu;
  document.getElementById("ram-result").textContent = ram;
  document.getElementById("storage-result").textContent = storage;
  document.getElementById("gpu-result").textContent = gpu;
}