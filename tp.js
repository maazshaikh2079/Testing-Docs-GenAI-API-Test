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

  // let userInput = `Give test plan in tabular form for a login form. Give only test plan nothing else`;
  // let userInput = `Give test plan for a login form.`;

  let userInput = `
  Generate a test plan in tabular format:-

  Parameters:-
  | IDENTIFIER | TEST PLAN |
  |---|---|
  | INTRODUCTION |  |
  | TEST ITEMS |  |
  | FEATURES TO BE TESTED |  |
  | FEATURES NOT TO BE TESTED |  |
  | APPROACH |  |
  | ITEM PASS/FAIL CRITERIA |  |
  | SUSPENSION AND RESUMPTION CRITERIA |  |
  | REQUIREMENTS AND TEST DELIVERABLES |  |
  | TESTING TASK |  |
  | ENVIRONMENTAL NEEDS |  |
  | RESPONSIBILITIES |  |
  | STAFFING AND TRAINING NEEDS |  |
  | SCHEDULE |  |
  | RISKS AND CONTINGENCIES |  |
  | APPROVALS |  | (leave it empty)

  Topic & Discription:-
  NGO website for animals

  (Important: Generate only test plan in tabular format and nothing else!)
  `;


  const result = await chatSession.sendMessage(userInput + "\n");
//   console.log(result.response.text());

  output = result.response.text()

  // fs.writeFile(`output.md`, output, (err) => {
  //   if (err) console.error('Error writing file:', err);
  //   else console.log(`Data saved to output.md`);
  // });

  fs.appendFile(`output3.md`, output + "\n", (err) => {
    if (err) console.error("Error appending to file:", err);
    else console.log(`Data appended to output3.md`);
  });
}

run();
