document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("selectedText", (data) => {
    console.log(data)
    const text = data.selectedText?.trim();
    console.log(text)

    const display = document.getElementById("selectedText");

    if (!text) {
      display.textContent = "No word selected.";
      return;
    }

    // console.log(text)


  });
});
