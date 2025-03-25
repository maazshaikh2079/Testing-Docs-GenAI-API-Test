require('dotenv').config(); // Add this line at the top
const fs = require('fs');

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  // let userInput = `Give test cases in tabular form for a login form. Give only test cases`;

  let userInput = `
  Generate a test case in tabular format:-

  Parameters:-
  ID
  SPECIFICATION
  OBJECTIVE
  INPUT DATA
  EXPECTED OUTPUT
  ACTUAL OUTPUT (leave it empty)
  STATUS (leave it empty)

  Topic & Discription:-
  Contacts page for an NGO website for animals

  (Important: Generate only test cases in tabular format and nothing else!)
  `;


  const result = await chatSession.sendMessage(userInput + "\n");
//   console.log(result.response.text());

  output = result.response.text()

  // fs.writeFile(`output.md`, output, (err) => {
  //   if (err) console.error('Error writing file:', err);
  //   else console.log(`Data saved to output.md`);
  // });

  fs.appendFile(`output2.md`, output + "\n", (err) => {
    if (err) console.error("Error appending to file:", err);
    else console.log(`Data appended to output2.md`);
  });
}

run();
