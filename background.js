chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SAVE_TEXT") {
    chrome.storage.local.set({ selectedText: message.text });
  }
});