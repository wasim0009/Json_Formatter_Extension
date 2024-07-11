chrome.action.onClicked.addListener((tab) => {
  console.log("Extension icon clicked");
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      files: ["content.js"],
    },
    () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log("Script injected");
      }
    }
  );
});
