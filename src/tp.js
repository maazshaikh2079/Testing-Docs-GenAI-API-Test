require('dotenv').config();
// const fs = require('fs');

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  const fs = require("node:fs");
  const mime = require("mime-types");

  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: "Generate a test plan in tabular format:-\n\n  Parameters:-\n  | IDENTIFIER | TEST PLAN |\n  |---|---|\n  | INTRODUCTION |  |\n  | TEST ITEMS |  |\n  | FEATURES TO BE TESTED |  |\n  | FEATURES NOT TO BE TESTED |  |\n  | APPROACH |  |\n  | ITEM PASS/FAIL CRITERIA |  |\n  | SUSPENSION AND RESUMPTION CRITERIA |  |\n  | REQUIREMENTS AND TEST DELIVERABLES |  |\n  | TESTING TASK |  |\n  | ENVIRONMENTAL NEEDS |  |\n  | RESPONSIBILITIES |  |\n  | STAFFING AND TRAINING NEEDS |  |\n  | SCHEDULE |  |\n  | RISKS AND CONTINGENCIES |  |\n  | APPROVALS |  | (leave it empty)\n\n  Topic & Discription:-\n (will be typed by user)\n\n  (Important: Generate only test plan in tabular format and nothing else!)",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseModalities: [
    ],
    responseMimeType: "text/plain",
  };

  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: " NGO website for animals"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, here's a test plan template, tailored for testing an NGO website dedicated to animals.\n\n| IDENTIFIER | TEST PLAN |\n|---|---|\n| **INTRODUCTION** | This test plan outlines the scope, approach, resources, and schedule for testing the NGO website for animals. The goal is to ensure the website functions correctly, is user-friendly, accessible, and meets the requirements defined in the requirements specification document (if applicable).  It also aims to ensure the website effectively communicates the NGO's mission and facilitates user engagement (donations, volunteering, etc.). |\n| **TEST ITEMS** |  - NGO Website (specific URL) - All integrated modules (Donation platform, Volunteer application form, Adoption application, Blog, Contact Form, etc.) - Associated databases - Third-party integrations (e.g., payment gateway, social media plugins) |\n| **FEATURES TO BE TESTED** | - **Functionality:**  Navigation, search functionality, form submissions (donation, volunteer, adoption, contact), account creation (if applicable), blog posting/commenting (if applicable), image uploads, video playback. - **Usability:**  Intuitive navigation, clear calls to action, mobile responsiveness, accessibility (WCAG compliance), cross-browser compatibility. - **Performance:**  Page load times, server response times, website stability under load. - **Security:**  Data encryption (HTTPS), secure payment processing, protection against common web vulnerabilities (e.g., XSS, SQL injection), user authentication and authorization. - **Content:** Accuracy of information, broken links, grammar and spelling, image/video quality. - **SEO:** Meta descriptions, proper headings, alt tags for images, sitemap submission. |\n| **FEATURES NOT TO BE TESTED** | - Offline functionality (unless specifically implemented) - Detailed performance testing beyond basic load testing. - In-depth security testing (penetration testing) unless explicitly requested (consider as a separate, specialized activity).  We are focusing on standard security best practices. |\n| **APPROACH** | A combination of black-box and white-box testing techniques will be used.  - **Black-box testing:** Functionality will be tested from an end-user perspective, without knowledge of the internal code. This will include functional testing, usability testing, security testing (vulnerability scanning), performance testing (load, stress)  - **White-box testing:**  Review of code (if accessible) to ensure code quality, security, and proper error handling.  - **Testing Levels:** Unit testing (if access to code is provided), integration testing, system testing, user acceptance testing (UAT).  - **Test Data:**  A variety of test data will be used, including valid, invalid, and boundary values, to thoroughly test the website's functionality.  - **Tools:**  Bug tracking system (Jira, Asana, etc.), test management tool (TestRail, Zephyr), browser developer tools, website speed testing tools (Google PageSpeed Insights, GTmetrix), accessibility testing tools (WAVE, Axe). |\n| **ITEM PASS/FAIL CRITERIA** | - **Pass:**  The website functions as expected according to the requirements specification (if available) or the documented functionality. All test cases must pass.  - **Fail:**  The website does not function as expected, or a test case fails.  Any critical or high-severity defects will result in immediate failure.  Medium-severity defects will be evaluated to determine if they block further testing. |\n| **SUSPENSION AND RESUMPTION CRITERIA** | - **Suspension:** Testing will be suspended if a critical defect is found that prevents further testing or compromises the integrity of the test environment.  - **Resumption:** Testing will resume once the critical defect has been resolved and verified. A regression test will be performed to ensure that the fix did not introduce any new defects. |\n| **REQUIREMENTS AND TEST DELIVERABLES** | - **Requirements:**  Website requirements specification document (if available), wireframes, mockups, user stories. - **Test Deliverables:** Test plan, test cases, test data, test reports, defect reports, test summary report. |\n| **TESTING TASK** | 1. Test environment setup. 2. Test case creation. 3. Test data preparation. 4. Test execution. 5. Defect reporting. 6. Regression testing. 7. Performance testing. 8. Security vulnerability scanning 9. Usability Testing (with representative users, if possible) 10. Accessibility Testing 11. Reporting and Documentation. |\n| **ENVIRONMENTAL NEEDS** | - Test environment that mirrors the production environment (operating system, web server, database server, etc.).  - Stable internet connection. - Access to the website code (if white-box testing is required). - Access to necessary testing tools. - Separate environment for UAT. |\n| **RESPONSIBILITIES** | - **Test Lead:**  Responsible for planning, coordinating, and executing the testing activities.  - **Test Engineers:** Responsible for creating test cases, executing tests, and reporting defects. - **Developers:** Responsible for fixing defects and implementing changes. - **Project Manager:** Responsible for overall project management, communication, and resource allocation. - **Stakeholders:** Reviewing and approving the Test Plan. Providing Feedback.|\n| **STAFFING AND TRAINING NEEDS** | - Test Lead (1) - Test Engineers (Number depends on scope)  - Training may be required on specific testing tools or techniques, such as accessibility testing or security vulnerability scanning. |\n| **SCHEDULE** |  *This will need to be filled in with specific dates.* - Test Plan Creation: [Date] - Test Case Development: [Date] - Test Environment Setup: [Date] - Test Execution: [Date] - Defect Fixing: [Date] - Regression Testing: [Date] - UAT: [Date] - Final Report: [Date] |\n| **RISKS AND CONTINGENCIES** | - **Risks:**  - Delays in defect fixing.  - Incomplete or unclear requirements.  - Lack of access to the test environment.  - Unavailability of test resources. - **Contingencies:** - Allocate buffer time in the schedule for defect fixing. - Clarify requirements with stakeholders. - Escalate issues with test environment access. - Re-prioritize testing tasks if resources are limited. |\n| **APPROVALS** |  |\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "Social media app like Instagram\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, here's the test plan template, now tailored for testing a social media app like Instagram.\n\n| IDENTIFIER | TEST PLAN |\n|---|---|\n| **INTRODUCTION** | This test plan outlines the scope, approach, resources, and schedule for testing a social media application similar to Instagram. The goal is to ensure the application functions correctly, is user-friendly, secure, performs well, and meets the defined requirements. It also aims to ensure the application effectively facilitates user engagement and content sharing. |\n| **TEST ITEMS** | - Mobile application (Android and iOS versions) - Web application (if applicable) - API endpoints - Database - Cloud storage (for images/videos) - Push notification service - Third-party integrations (e.g., social login, mapping services) |\n| **FEATURES TO BE TESTED** | - **Core Functionality:** User registration/login, profile creation/editing, posting photos/videos, feed display, liking/commenting on posts, following/unfollowing users, search functionality, direct messaging, push notifications. - **Media Handling:** Image/video uploads, image/video editing (filters, cropping), media playback, storage optimization, handling different media formats. - **User Interface (UI) & User Experience (UX):** Navigation, visual design, responsiveness, accessibility, intuitive workflows, error handling. - **Social Features:** User discovery, hashtag support, trending topics, sharing to other platforms, reporting inappropriate content. - **Performance:** App launch time, feed loading speed, image/video upload/download speed, responsiveness to user interactions, battery consumption. - **Security:** Data encryption, secure authentication, prevention of common vulnerabilities (e.g., XSS, SQL injection), protection against spam and abuse, privacy settings. - **Notifications:** Push notifications for likes, comments, follows, messages, and other events. - **Offline Capabilities:** (If applicable) Caching data, allowing limited functionality without internet connection.  - **Platform Specific Features:** Camera integration (on mobile), location services integration, sharing using native platform features. |\n| **FEATURES NOT TO BE TESTED** | - Specific third-party filters or effects (unless explicitly required) - Low-level hardware testing - Scalability beyond a defined user base (initial testing focus) - Detailed penetration testing (unless explicitly requested, consider this a separate specialized activity) |\n| **APPROACH** | A combination of black-box and white-box testing techniques will be used. - **Black-box testing:** Testing the application from an end-user perspective, without knowledge of the internal code. This will include functional testing, usability testing, performance testing, and security testing (vulnerability scanning). - **White-box testing:** (If applicable) Review of code to ensure code quality, security, and proper error handling. - **Testing Levels:** Unit testing, integration testing, system testing, user acceptance testing (UAT). - **Test Data:** A variety of test data will be used, including valid, invalid, and boundary values. Realistic images and videos will be used to test media handling. - **Tools:** Bug tracking system (Jira, Asana, etc.), test management tool (TestRail, Zephyr), mobile device emulators/simulators, network monitoring tools, performance testing tools (e.g., JMeter), security scanning tools. |\n| **ITEM PASS/FAIL CRITERIA** | - **Pass:** The application functions as expected according to the requirements specification or the documented functionality. All test cases must pass. - **Fail:** The application does not function as expected, or a test case fails. Any critical or high-severity defects will result in immediate failure. Medium-severity defects will be evaluated. |\n| **SUSPENSION AND RESUMPTION CRITERIA** | - **Suspension:** Testing will be suspended if a critical defect is found that prevents further testing or compromises the integrity of the test environment. Examples include login failures, data corruption, or security vulnerabilities. - **Resumption:** Testing will resume once the critical defect has been resolved and verified. A regression test will be performed to ensure that the fix did not introduce any new defects. |\n| **REQUIREMENTS AND TEST DELIVERABLES** | - **Requirements:** Application requirements specification document (if available), wireframes, mockups, user stories, API documentation. - **Test Deliverables:** Test plan, test cases, test data, test reports, defect reports, test summary report. |\n| **TESTING TASK** | 1. Test environment setup (including mobile devices/emulators). 2. Test case creation. 3. Test data preparation (including media files). 4. Test execution (on different devices and operating systems). 5. Defect reporting. 6. Regression testing. 7. Performance testing (load, stress, and battery consumption). 8. Security vulnerability scanning. 9. Usability testing (with representative users). 10. API testing. 11. Notification testing. 12. Localization testing (if applicable). 13. Reporting and Documentation. |\n| **ENVIRONMENTAL NEEDS** | - Test environment that mirrors the production environment (servers, databases, cloud storage). - A range of mobile devices (Android and iOS) with different screen sizes and operating system versions. - Mobile device emulators/simulators. - Stable internet connection. - Access to the application code (if white-box testing is required). - Access to necessary testing tools. - Separate environment for UAT. |\n| **RESPONSIBILITIES** | - **Test Lead:** Responsible for planning, coordinating, and executing the testing activities. - **Test Engineers:** Responsible for creating test cases, executing tests, and reporting defects. - **Developers:** Responsible for fixing defects and implementing changes. - **Project Manager:** Responsible for overall project management, communication, and resource allocation. - **UI/UX Designers:** Responsible for reviewing the application's user interface and providing feedback. - **Stakeholders:** Reviewing and approving the Test Plan. Providing Feedback. |\n| **STAFFING AND TRAINING NEEDS** | - Test Lead (1) - Test Engineers (number depends on scope, platform) - UI/UX Tester (1, can be part-time) - Training may be required on mobile testing techniques, API testing, performance testing, or security vulnerability scanning. |\n| **SCHEDULE** | *This will need to be filled in with specific dates.* - Test Plan Creation: [Date] - Test Case Development: [Date] - Test Environment Setup: [Date] - Test Execution: [Date] - Defect Fixing: [Date] - Regression Testing: [Date] - UAT: [Date] - Final Report: [Date] |\n| **RISKS AND CONTINGENCIES** | - **Risks:** - Delays in defect fixing. - Incomplete or unclear requirements. - Device compatibility issues. - Changes to API endpoints. - Network connectivity issues. - **Contingencies:** - Allocate buffer time in the schedule for defect fixing. - Clarify requirements with stakeholders. - Prioritize testing on the most popular devices and operating systems. - Monitor API changes and update test cases accordingly. - Use network simulation tools to test under different network conditions. |\n| **APPROVALS** |  |\n"},
          ],
        },
      ],
    });

    let userInput = `Online learning and teaching marketplace (web application) like Udemy`;

    const result = await chatSession.sendMessage(userInput);

//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");

    // TODO: Following code needs to be updated for client-side apps.
    const candidates = result.response.candidates;
    for(let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
      for(let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
        const part = candidates[candidate_index].content.parts[part_index];
        if(part.inlineData) {
          try {
            const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
            fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
            console.log(`Output written to: ${filename}`);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }

      // console.log(result.response.text());

      output = result.response.text()

      // fs.writeFile(`output.md`, output, (err) => {
      //   if (err) console.error('Error writing file:', err);
      //   else console.log(`Data saved to output.md`);
      // });

      fs.appendFile(`output/tp-op.md`, output + "\n\n---\n\n", (err) => {
        if (err) console.error("Error appending to file:", err);
        else console.log(`Data appended to output3.md`);
      });
  }

  run();
