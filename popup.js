document.addEventListener("DOMContentLoaded", function () {
  const formatButton = document.getElementById("formatButton");
  formatButton.addEventListener("click", () => {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");

    try {
      const json = JSON.parse(input);
      output.textContent = JSON.stringify(json, null, 2);
    } catch (e) {
      output.textContent = "Invalid JSON";
    }
  });
});
