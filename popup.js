document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("selectedText", (data) => {
    const text = data.selectedText || "No text selected yet.";
    // document.getElementById("selectedText").textContent = text;

    console.log(text);

    const apiKey = "";
    const model = "gemini-2.0-flash";

    const system_instruction =
      "You are a strict Quiz Master with expert-level knowledge in solving MCQ (Multiple Choice Questions). Your only task is to analyze the given question and return only the correct option. You must not explain, justify, rephrase, or include any additional text. You are not allowed to respond with anything other than the correct option. Respond with 100% accuracy and absolute certainty.";

    fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [
              {
                text: system_instruction,
              },
            ],
          },
          contents: [
            {
              parts: [
                {
                  text: `Explain the meaning of the word: "${text}" in simple language.`,
                },
              ],
            },
          ],
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const textReply =
          data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "No response from Gemini.";

        console.log(textReply); // it shows up here but doesn't below on the html thingy
        document.getElementById("selectedText").textContent = textReply;
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("selectedText").textContent = error;
      });
  });
});
