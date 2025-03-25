## Login Form Test Cases

| ID | SPECIFICATION | OBJECTIVE | INPUT DATA | EXPECTED OUTPUT | ACTUAL OUTPUT | STATUS |
|---|---|---|---|---|---|---|
| TC_LF_001 | Successful Login | Verify user login with valid credentials. | Username: valid_username, Password: valid_password | User is redirected to the homepage/dashboard.  Success message is displayed (optional). |  |  |
| TC_LF_002 | Unsuccessful Login (Invalid Username) | Verify system handles invalid username. | Username: invalid_username, Password: valid_password | Error message: "Invalid username or password."  User remains on the login page. |  |  |
| TC_LF_003 | Unsuccessful Login (Invalid Password) | Verify system handles invalid password. | Username: valid_username, Password: invalid_password | Error message: "Invalid username or password." User remains on the login page. |  |  |
| TC_LF_004 | Unsuccessful Login (Empty Username) | Verify system handles empty username field. | Username: , Password: valid_password | Error message: "Username is required." User remains on the login page. |  |  |
| TC_LF_005 | Unsuccessful Login (Empty Password) | Verify system handles empty password field. | Username: valid_username, Password:  | Error message: "Password is required." User remains on the login page. |  |  |
| TC_LF_006 | Unsuccessful Login (Empty Username & Password) | Verify system handles empty username and password fields. | Username: , Password:  | Error messages: "Username is required." and "Password is required." User remains on the login page. |  |  |
| TC_LF_007 | Password Reset Link | Verify "Forgot Password" link functionality. | Click on "Forgot Password" link. | User is redirected to the password reset page. |  |  |
| TC_LF_008 | Username - Case Sensitivity | Verify username is case-sensitive. | Username: Valid_Username (different casing), Password: valid_password | Error message: "Invalid username or password." User remains on the login page. |  |  |
| TC_LF_009 | Password - Case Sensitivity | Verify password is case-sensitive. | Username: valid_username, Password: Valid_Password (different casing) | Error message: "Invalid username or password." User remains on the login page. |  |  |
| TC_LF_010 | Username - Special Characters | Verify username handling with special characters. | Username: user@name!, Password: valid_password | Depends on system requirements: Either successful login (if allowed) or appropriate error message if not allowed. |  |  |
| TC_LF_011 | Password - Special Characters | Verify password handling with special characters. | Username: valid_username, Password: pass#word! | Successful login (if allowed). |  |  |
| TC_LF_012 | Username - Length Limit | Verify username length limit. | Username: A string exceeding the maximum allowed length, Password: valid_password | Error message: "Username exceeds the maximum allowed length." (or similar). User remains on the login page. |  |  |
| TC_LF_013 | Password - Length Limit | Verify password length limit. | Username: valid_username, Password: A string exceeding the maximum allowed length | Error message: "Password exceeds the maximum allowed length." (or similar). User remains on the login page. |  |  |
| TC_LF_014 | SQL Injection Attempt (Username) | Attempt SQL injection through username field. | Username: ' OR '1'='1, Password: valid_password | System prevents SQL injection and displays an appropriate error message (e.g., "Invalid username or password"). |  |  |
| TC_LF_015 | SQL Injection Attempt (Password) | Attempt SQL injection through password field. | Username: valid_username, Password: ' OR '1'='1 | System prevents SQL injection and displays an appropriate error message (e.g., "Invalid username or password"). |  |  |
| TC_LF_016 | Brute Force Protection | Verify protection against brute-force attacks (e.g., account lockout after multiple failed attempts). |  Enter incorrect credentials multiple times. | After a certain number of failed attempts (e.g., 5), the account is temporarily locked and a message is displayed (e.g., "Account locked. Please try again later."). |  |  |
| TC_LF_017 | Remember Me Functionality (If Available) | Verify "Remember Me" checkbox functionality. | Username: valid_username, Password: valid_password, Check "Remember Me" | Upon closing and reopening the browser, the user remains logged in. |  |  |
| TC_LF_018 | Logout Functionality | Verify that logout functionality is working. | Log in with valid credentials, then click logout button. | User is logged out and redirected to the login page. |  |  |
| TC_LF_019 | Login after Logout | Verify user is required to re-enter credentials after logging out. | Log in with valid credentials, log out. Attempt to access a restricted page directly through URL. | User is redirected to the login page. |  |  |

## Home Page Test Cases - NGO Website for Animals

| ID | SPECIFICATION | OBJECTIVE | INPUT DATA | EXPECTED OUTPUT | ACTUAL OUTPUT | STATUS |
|---|---|---|---|---|---|---|
| HP-001 | Verify page title | Ensure the correct page title is displayed. | N/A | Page title should be " [NGO Name] - Helping Animals in Need" (Replace [NGO Name] with actual NGO Name)|  |  |
| HP-002 | Verify logo presence | Ensure the NGO logo is displayed correctly. | N/A | NGO logo is visible and displays correctly in the header. |  |  |
| HP-003 | Verify navigation menu | Ensure the navigation menu is present and contains the correct links. | N/A | Navigation menu contains links to "About Us," "Adopt," "Donate," "Volunteer," "News/Events," and "Contact Us." (Exact names may vary) |  |  |
| HP-004 | Verify navigation menu link functionality | Ensure all links in the navigation menu are functional. | Click each link in the navigation menu. | Each link directs the user to the corresponding page. |  |  |
| HP-005 | Verify hero image/slider | Ensure the hero image or slider is displayed correctly. | N/A | A relevant image/slider showcasing animals or NGO activities is visible. |  |  |
| HP-006 | Verify hero image/slider content | Ensure the hero image/slider content is relevant and engaging. | Review the text and images in the hero section. | Content should be related to the NGO's mission and encourage user engagement. |  |  |
| HP-007 | Verify donation button | Ensure the donation button is present and clearly visible. | N/A | A prominent "Donate" button is displayed in a visually appealing location. |  |  |
| HP-008 | Verify donation button functionality | Ensure the donation button directs to the donation page. | Click the "Donate" button. | User is redirected to the secure donation page. |  |  |
| HP-009 | Verify "Featured Animals" section | Ensure the "Featured Animals" section is displayed correctly. | N/A | A section showcasing adoptable animals is visible, including images and brief descriptions. |  |  |
| HP-010 | Verify "Featured Animals" link functionality | Ensure the "Learn More" or equivalent link for each featured animal redirects to the animal's profile page. | Click the "Learn More" button for each featured animal. | User is redirected to the animal's individual profile page. |  |  |
| HP-011 | Verify "About Us" section summary | Ensure a brief "About Us" section is displayed. | N/A | A short paragraph summarizing the NGO's mission and goals is visible. |  |  |
| HP-012 | Verify "About Us" link functionality | Ensure the "Read More" or equivalent link in the "About Us" section redirects to the full "About Us" page. | Click the "Read More" button in the "About Us" section. | User is redirected to the "About Us" page. |  |  |
| HP-013 | Verify "Recent News/Events" section | Ensure the "Recent News/Events" section is displayed correctly. | N/A | A section displaying the latest news or upcoming events related to the NGO is visible. |  |  |
| HP-014 | Verify "Recent News/Events" link functionality | Ensure the links to the full articles or event details work correctly. | Click the links within the "Recent News/Events" section. | User is redirected to the full article or event details page. |  |  |
| HP-015 | Verify Footer | Ensure the footer is present and contains the necessary information. | N/A | Footer contains copyright information, contact information (email, phone), and links to social media pages. |  |  |
| HP-016 | Verify Social Media Links | Ensure the social media links are functional and redirect to the correct pages. | Click each social media icon/link in the footer. | Each link redirects to the NGO's corresponding social media page. |  |  |
| HP-017 | Responsive Design - Desktop | Verify the homepage displays correctly on desktop browsers. | View the homepage on a desktop browser (Chrome, Firefox, Safari, Edge). | The layout is visually appealing, elements are properly aligned, and content is easily readable. |  |  |
| HP-018 | Responsive Design - Mobile | Verify the homepage displays correctly on mobile devices. | View the homepage on a mobile device (iOS or Android). | The layout is responsive, elements are properly sized for the screen, and content is easily readable without horizontal scrolling. |  |  |
| HP-019 | Responsive Design - Tablet | Verify the homepage displays correctly on tablet devices. | View the homepage on a tablet device (iPad or Android tablet). | The layout is responsive, elements are properly sized for the screen, and content is easily readable. |  |  |
| HP-020 | Accessibility - Image Alt Text | Verify all images have descriptive alt text. | Inspect the source code of the homepage. | All images have appropriate alt text that describes the image content. |  |  |
| HP-021 | Accessibility - Keyboard Navigation | Verify the homepage is navigable using only the keyboard. | Use the "Tab" key to navigate through the homepage. | All interactive elements (links, buttons, forms) are accessible and focusable using the keyboard. |  |  |
| HP-022 | Broken Links | Check for any broken links on the homepage. | N/A | All links on the homepage are functional and redirect to valid pages. |  |  |

## About Page Test Cases - NGO Website for Animals

| ID | SPECIFICATION | OBJECTIVE | INPUT DATA | EXPECTED OUTPUT | ACTUAL OUTPUT | STATUS |
|---|---|---|---|---|---|---|
| TC_About_001 | Page title should be "About Us" | Verify the page title is accurate. |  N/A - Page load | Page title is "About Us" |  |  |
| TC_About_002 | Verify the NGO name is displayed correctly in the heading. | Ensure the organization's name is prominently displayed. | N/A - Page load | NGO name is correctly displayed in a prominent heading (e.g., H1 or H2) |  |  |
| TC_About_003 |  Verify the mission statement is present and clearly stated. | Ensure the NGO's mission is easily understood. | N/A - Page load | Mission statement is present and easily understandable |  |  |
| TC_About_004 | Verify the "Our Story" section is present. | Ensure the page explains the NGO's origins and history. | N/A - Page load | An "Our Story" section exists, detailing the NGO's founding and purpose. |  |  |
| TC_About_005 | Verify the "Our Team" section is present and lists key personnel. |  Display information about the people running the organization. | N/A - Page load | An "Our Team" section exists, listing key personnel (e.g., names, roles). |  |  |
| TC_About_006 | Verify at least three team member profiles are included, each containing a name and a brief description of their role. | Ensure sufficient team information is provided. | N/A - Page load | At least 3 team member profiles with names and descriptions are displayed. |  |  |
| TC_About_007 | Verify the "Our Achievements" or "Impact" section is present. | Highlight the NGO's accomplishments and impact. | N/A - Page load |  A section detailing achievements, impact, or statistics related to animal welfare is present. |  |  |
| TC_About_008 |  Verify the "Impact" section contains quantifiable data (e.g., "Rescued X animals," "Found homes for Y animals"). | Ensure the impact section is supported by data | N/A - Page load | The "Impact" section includes specific, quantifiable data showcasing the NGO's achievements. |  |  |
| TC_About_009 | Verify that contact information (email address and/or phone number) is readily available. | Provide users with a way to contact the NGO. | N/A - Page load |  Contact information (email and/or phone number) is clearly displayed. |  |  |
| TC_About_010 | Verify that social media links (if applicable) are functional and lead to the NGO's official pages. |  Direct users to the NGO's social media presence. | Click on each social media icon/link. |  Each social media link opens the correct NGO's official social media page in a new tab or window. |  |  |
| TC_About_011 | Verify that the page is free of grammatical errors and typos. | Ensure professional presentation. | N/A - Manual review of the page content |  The page content is free of grammatical errors and typos. |  |  |
| TC_About_012 | Verify the page is mobile-responsive and displays correctly on different screen sizes. | Ensure accessibility on various devices. |  Load the page on different devices (desktop, tablet, mobile). | The page adapts to different screen sizes and remains readable and functional on all devices. |  |  |
| TC_About_013 | Verify the "Donate" button or link is present and redirects to the donation page. | Guide users to donate. | Click on the "Donate" button/link. | The "Donate" button/link redirects to the correct donation page. |  |  |
| TC_About_014 |  Verify the page loading time is acceptable (under 3 seconds). | Ensure good user experience. | N/A - Measure page loading time using browser developer tools. | The page loads within 3 seconds. |  |  |
| TC_About_015 | Check the alt text for all images on the page for accessibility. | Ensure images are accessible to screen readers. | N/A - Inspect image elements in browser developer tools. | All images have descriptive alt text. |  |  |
