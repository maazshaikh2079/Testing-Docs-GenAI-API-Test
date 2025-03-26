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
  systemInstruction: "  Generate a test case in tabular format:-\n\n  Parameters:-\n  ID\n  SPECIFICATION\n  OBJECTIVE\n  INPUT DATA\n  EXPECTED OUTPUT\n  ACTUAL OUTPUT (leave it empty)\n  STATUS (leave it empty)\n\n  Topic & Discription:-\n  ( will be given by user)\n\n  (Important: Generate only test cases in tabular format and nothing else!)",
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
          {text: "Login form / page for an NGO website"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Okay, here are some test cases in tabular format for a Login Form/Page for an NGO website:\n\n| ID | SPECIFICATION | OBJECTIVE | INPUT DATA | EXPECTED OUTPUT | ACTUAL OUTPUT | STATUS |\n|---|---|---|---|---|---|---|\n| TC_001 | Valid Login | Verify successful login with correct credentials. | Username: valid_username, Password: valid_password | User is redirected to the user's dashboard or homepage. Success message is displayed. |  |  |\n| TC_002 | Invalid Username | Verify error message displayed for invalid username. | Username: invalid_username, Password: valid_password | Error message: \"Invalid username or password.\" User remains on the login page. |  |  |\n| TC_003 | Invalid Password | Verify error message displayed for invalid password. | Username: valid_username, Password: invalid_password | Error message: \"Invalid username or password.\" User remains on the login page. |  |  |\n| TC_004 | Empty Username & Password | Verify error message displayed for empty fields. | Username: [Empty], Password: [Empty] | Error messages: \"Username is required.\" and \"Password is required.\" User remains on the login page. |  |  |\n| TC_005 | Empty Username | Verify error message displayed for empty username. | Username: [Empty], Password: valid_password | Error message: \"Username is required.\" User remains on the login page. |  |  |\n| TC_006 | Empty Password | Verify error message displayed for empty password. | Username: valid_username, Password: [Empty] | Error message: \"Password is required.\" User remains on the login page. |  |  |\n| TC_007 | Password Case Sensitivity | Verify password is case-sensitive. | Username: valid_username, Password: Valid_Password (incorrect case) | Error message: \"Invalid username or password.\" User remains on the login page. |  |  |\n| TC_008 | Login with Spaces | Verify login fails if username or password contains leading/trailing spaces. | Username: \" valid_username \", Password: \" valid_password \" | Error message: \"Invalid username or password.\" or the system trims the spaces and logs in successfully (this needs to be documented). User remains on login page or is redirected to dashboard. |  |  |\n| TC_009 | \"Remember Me\" Functionality | Verify \"Remember Me\" functionality. | Username: valid_username, Password: valid_password, \"Remember Me\" checked | User is logged in, and the next time they visit the site, they are automatically logged in (or their username is pre-filled). |  |  |\n| TC_010 | Forgot Password Link | Verify the \"Forgot Password\" link redirects to the password reset page. | Click on \"Forgot Password\" link | User is redirected to the password reset page. |  |  |\n| TC_011 | Password Reset Page Functionality (basic) | Verify the password reset page allows a user to request a password reset. | Input valid email address associated with account. | System sends a password reset link to the provided email address. A confirmation message is displayed to the user. |  |  |\n| TC_012 | Security - Incorrect Login Attempts | Verify account lockout after multiple failed login attempts. | Username: valid_username, Password: invalid_password (repeated multiple times) | After a set number of failed attempts (e.g., 3-5), the account is locked, and an error message is displayed: \"Account locked. Please try again later or reset your password.\" |  |  |\n| TC_013 | Security - Special Characters in Username/Password | Verify the system handles special characters in username and password fields correctly. | Username: test!@#$, Password: test!@#$% | User is either logged in successfully (if special characters are allowed) or receives a specific error message regarding invalid characters. |  |  |\n| TC_014 | Accessibility - Keyboard Navigation | Verify that all elements of the login form can be accessed and used via keyboard navigation (Tab key). | Navigate through form elements using the Tab key. | User can access all fields, labels, buttons, and links using the keyboard. |  |  |\n| TC_015 | Accessibility - Screen Reader Compatibility | Verify the form is compatible with screen readers. | Use a screen reader to navigate the form. | Screen reader correctly announces labels, instructions, and error messages. |  |  |\n| TC_016 | UI - Responsive Design | Verify the login form displays correctly on different screen sizes (desktop, tablet, mobile). | Access the login page on various devices. | The form adapts to the screen size and remains usable. All elements are visible and properly aligned. |  |  |\n| TC_017 | UI - Error Message Display | Verify error messages are clear, concise, and informative. | Enter incorrect login details | Error messages clearly explain the problem and suggest a solution. |  |  |\n| TC_018 | Session Timeout | Verify session timeout functionality. | Login and leave the browser idle for a defined period | After the timeout period, the user is automatically logged out, and upon attempting to access a protected page, is redirected to the login page. |  |  |\n| TC_019 | Cookie Handling | Verify appropriate cookies are set and handled for login sessions and \"Remember Me\" functionality. | Login with and without \"Remember Me\" checked, inspect browser cookies. |  Appropriate session cookies are set, and \"Remember Me\" cookie is set with an expiration date if selected.  Cookies are appropriately cleared on logout. |   |   |\n| TC_020 | Account Deactivation / Deletion | Attempt to login with a deactivated or deleted account. | Username: deactivated_username, Password: any_password |  An error message is displayed such as \"Account is deactivated. Please contact support\" or similar.  |   |   |\n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "Home page of a social media application like Instagram"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "OK, here are some test cases in tabular format for the Home Page of a Social Media Application (like Instagram):\n\n| ID | SPECIFICATION | OBJECTIVE | INPUT DATA | EXPECTED OUTPUT | ACTUAL OUTPUT | STATUS |\n|---|---|---|---|---|---|---|\n| TC_001 | Post Display | Verify posts are displayed correctly in the feed. | Log in to the application.  | Posts from followed users are displayed in reverse chronological order.  Each post shows the user's profile picture, username, caption, image/video, like count, and comment count. |  |  |\n| TC_002 | Image Loading | Verify images load correctly. | Scroll through the feed. | All images load without errors or broken links. Images are displayed in the correct aspect ratio.  |  |  |\n| TC_003 | Video Playback | Verify videos play correctly. | Scroll through the feed, encounter a video. | Videos play automatically (if autoplay is enabled) or upon tapping the play button. Video plays smoothly without buffering or lag (assuming good network conditions). Sound works. |  |  |\n| TC_004 | Like Functionality | Verify the \"Like\" button works correctly. | Tap the \"Like\" button on a post. | The \"Like\" button toggles the like status. The like count increments/decrements accordingly. The user who liked the post is registered in the database. |  |  |\n| TC_005 | Commenting | Verify the commenting functionality. | Tap the comment icon on a post, enter a comment, and tap \"Post\". | The comment is displayed below the post. The comment count increments. The comment appears in the correct order. |  |  |\n| TC_006 | User Profile Link | Verify clicking on a username or profile picture navigates to the user's profile. | Tap on a username or profile picture. | The user is redirected to the corresponding user's profile page. |  |  |\n| TC_007 | Scrolling | Verify infinite scrolling functionality. | Scroll down the feed. | New posts are loaded as the user scrolls down.  No loading errors occur. The application doesn't crash. |  |  |\n| TC_008 | Story Display | Verify stories from followed users are displayed at the top. | Log in to the application. | A horizontal bar containing profile pictures of users with active stories is displayed at the top of the screen.  Stories are displayed in chronological order of posting. |  |  |\n| TC_009 | Story Viewing | Verify stories can be viewed correctly. | Tap on a story. | The story opens and plays. The user can tap to advance to the next story or swipe to switch between users' stories. |  |  |\n| TC_010 | Story Navigation | Verify navigation within and between stories. | Tap, swipe left/right while viewing stories. | Tapping advances to the next story within the same user's stories. Swiping left/right navigates to the next/previous user's stories. |  |  |\n| TC_011 | Direct Message Icon | Verify the direct message icon is present and functional. | Look for the direct message icon (usually in the top right corner). Tap on it. | The direct message screen/inbox opens. |  |  |\n| TC_012 | Bottom Navigation Bar | Verify the bottom navigation bar functionality. | Tap on each icon in the bottom navigation bar (Home, Search, Post, Reels, Profile). | Each icon navigates to the corresponding section (Home, Search, Post creation, Reels, User Profile). |  |  |\n| TC_013 | Search Functionality (basic) | Verify the search icon navigates to the search screen. | Tap on the search icon. | The search screen opens, allowing the user to search for users, hashtags, or places. |  |  |\n| TC_014 | New Post Button | Verify the \"New Post\" button is present and functional. | Tap on the \"New Post\" button (often a \"+\" icon). | The post creation screen opens, allowing the user to select an image/video from their device or take a new one. |  |  |\n| TC_015 | Reels Button | Verify the Reels button is present and functional. | Tap on the Reels button. | The Reels feed opens, displaying short-form video content. |  |  |\n| TC_016 | Responsiveness | Verify the home page displays correctly on different screen sizes. | Access the application on various devices (phones, tablets). | The layout adapts to the screen size. All elements are visible and properly aligned. No horizontal scrolling is required on smaller screens. |  |  |\n| TC_017 | Performance - Initial Load Time | Verify the initial load time of the home page. | Open the application (cold start). | The home page loads within an acceptable timeframe (e.g., 2-3 seconds on a good connection). |  |  |\n| TC_018 | Accessibility - Image Alt Text | Verify images have appropriate alt text for screen readers. | Use a screen reader to navigate the feed. | Screen reader announces the alt text for each image, providing context for visually impaired users. |  |  |\n| TC_019 | Error Handling - Network Issues | Simulate a network connection error. | Log in with no network connection, or disable the network connection after the page loads. | An appropriate error message is displayed to the user, indicating a network problem. The application doesn't crash. |  |  |\n| TC_020 | Report Post Functionality (If implemented)| Verify \"Report Post\" function exists and works | Select a post and click the \"Report\" button/link (if implemented). | A reporting dialog opens, allowing the user to select a reason for reporting the post.  After submitting the report, a confirmation message is displayed. |  |  |\n| TC_021 | Follow/Unfollow Functionality from Post (if implemented) | Verify the follow/unfollow functionality from the post's user information. | Locate follow/unfollow button on a post. Select the button to follow/unfollow | The user follow/unfollow is successfully executed and reflected on both user's pages. | | |\n"},
        ],
      },
    ],
  });

  // let userInput = `Home page of Online learning and teaching marketplace (web application) like Udemy`;
  let userInput = `Home page of a social media application like Snapchat`;

  const result = await chatSession.sendMessage(userInput);

  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");

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

  fs.appendFile(`output/tc-op.md`, output + "\n\n---\n\n", (err) => {
    if (err) console.error("Error appending to file:", err);
    else console.log(`Data appended to tc-op.md`);
  });

}

run();
