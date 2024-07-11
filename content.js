console.log("Content script running");

function formatJSON() {
  let preElements = document.getElementsByTagName("pre");
  for (let pre of preElements) {
    try {
      let json = JSON.parse(pre.innerText);
      pre.innerText = JSON.stringify(json, null, 2);
      pre.style.whiteSpace = "pre-wrap";
      pre.style.wordWrap = "break-word";
    } catch (e) {
      console.log("Element does not contain valid JSON:", e);
    }
  }
}

formatJSON();
