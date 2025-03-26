## Test Cases:-

  | ID | SPECIFICATION | OBJECTIVE | INPUT DATA | EXPECTED OUTPUT | ACTUAL OUTPUT | STATUS |
  |---|---|---|---|---|---|---|
  |  |  |  |  |  | (leave it empty) | (leave it empty) |

  ID
  SPECIFICATION
  OBJECTIVE
  INPUT DATA
  EXPECTED OUTPUT
  ACTUAL OUTPUT (leave it empty)
  STATUS (leave it empty)

User Inputs:-
  Login form / page for an NGO website
  Home page of a social media application like Instagram

## Test Plan:-

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

## Defect report:-

  Parameters / format for Defect Report:-
  | FIELD | DETAILS |
  |---|---|
  | ID |  |
  | PROJECT |  |
  | PRODUCT |  |
  | RELEASE VERSION |  | (leave it empty)
  | MODULE |  |
  | DETECTED BUILD VERSION |  | (leave it empty)
  | SUMMARY |  |
  | DESCRIPTION |  |
  | STEPS TO REPLICATE |  |
  | ACTUAL RESULTS |  |
  | EXPECTED RESULTS |  |
  | ATTACHMENTS | NA |
  | REMARKS |  |
  | DEFECT SEVERITY |  |
  | DEFECT PRIORITY |  |
  | REPORTED BY |  | (leave it empty)
  | ASSIGNED TO |  | (leave it empty)
  | STATUS |  | (leave it empty)
  | FIXED BUILD VERSION |  | (leave it empty)

---

## Defect Report Generator I/O:-

## 1st test case:-

| Test Case ID | Specification                 | Objective                                                    | Input Data                                              | Expected Output                                                                 | Actual Output                                                                  | Status |
|-------------|-----------------------------|------------------------------------------------|-------------------------------------------------|---------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------|
| TC_01       | Entry Sensor                  | Test sensor1 (entry sensor); detect car's presence          | Push entry sensor                                    | Sensor should detect car's presence                                            | Sensor detects car's presence                                                 | Pass   |
| TC_02       | Camera Module                 | Test camera; start capturing frame on sensor's detection   | NA                                                 | Camera should start capturing frame                                           | Camera starts capturing frame                                                 | Pass   |
| TC_03       | ML Model                      | Test haarcascade_russian_plate_number.xml ML Model; perform LPR | NA                                                 | ML Model should perform License Plate Recognition                             | ML Model performs License Plate Recognition                                   | Pass   |
| TC_04       | ROI (Region of Interest)      | Check if ROI is marked when License Plate is recognized     | NA                                                 | ROI should be marked when License Plate is recognized                         | ROI is marked when License Plate is recognized                               | Pass   |
| TC_05       | Scanned Image                 | Check scanned images of license plates                      | Scanned image of license plate                      | Scanned image should be captured and stored in images directory               | Scanned image is captured and stored in images directory                      | Pass   |
| TC_06       | OCR (Optical Character Reading) | Check OCR implementation                                    | Scanned license plate image with text value        | OCR should extract text and store in `license_plate_no` variable              | OCR extracts text and stores in `license_plate_no` variable                   | Pass   |
| TC_07       | Database Connectivity         | Test Firestore database connectivity                        | Configure and connect Firestore database with prepark.py script using key | Firestore should be configured and connected with prepark.py script            | Firestore is configured and connected with prepark.py script                  | Pass   |
| TC_08       | License_Plates Collection     | Check documents storage in License_Plates collection       | Documents in License_Plates collection           | Documents should be present in License_Plates collection of Firestore project  | Documents are present in License_Plates collection of Firestore project        | Pass   |
| TC_09       | Plates in Documents           | Check plate numbers present in documents                    | Plate numbers of registered vehicles             | Plate numbers should be in 'Plate' fields of License_Plates collection        | Plate numbers are in 'Plate' fields of License_Plates collection              | Pass   |
| TC_10       | License Plate Registration    | Check License Plate's registration in Database             | `license_plate_no` value matching                | `license_plate_no` should match with a Plate in License_Plates collection     | `license_plate_no` matches with a Plate in License_Plates collection         | Pass   |
| TC_11       | Entry Servo Motor             | Test servo movement on vehicle detection                   | Vehicle detection                                 | Servo should change its angle to 90°                                         | Servo changes its angle to 90°                                                | Pass   |
| TC_12       | Exit Sensor 1                 | Test sensor2 (exit sensor 1); detect car's presence        | Push exit sensor1                                 | Sensor should detect car's presence                                          | Sensor detects car's presence                                                 | Pass   |
| TC_13       | Exit Sensor 2                 | Test sensor3 (exit sensor 2); detect car's presence        | Push exit sensor2                                 | Sensor should detect car's presence                                          | Sensor detects car's presence                                                 | Pass   |
| TC_14       | Exit Servo Motor              | Test servo motor2 (Exit servo motor) movement             | Vehicle detection                                 | Servo should change its angle to 90° when a vehicle is detected               | Servo does not change its angle to 90° when a vehicle is detected             | Fail   |
| TC_15       | Street Lights                 | Test street lights operation with switch                   | Operate street light switch                      | Street lights should work                                                   | Street lights work                                                            | Pass   |

## Result:-

| FIELD                  | DETAILS                                                                                                |
|------------------------|--------------------------------------------------------------------------------------------------------|
| ID                     |                                                                                                                 |
| PROJECT                | PrePark                                                                                                |
| PRODUCT                | Smart Parking System                                                                                    |
| RELEASE VERSION        |                                                                                                        |
| MODULE                 | Exit Servo Motor                                                                                         |
| DETECTED BUILD VERSION |                                                                                                        |
| SUMMARY                | Exit Servo Motor (servo motor2) does not respond to vehicle detection                                                |
| DESCRIPTION            | When a vehicle is detected, the servo motor2 (Exit servo motor) does not change its angle to 90° as expected. This results in a failure to open the exit barrier. |
| STEPS TO REPLICATE     | 1. Ensure the system is running and connected to all sensors and motors. |
|                        | 2. Place a vehicle in the exit sensor detection zone.                    |
|                        | 3. Observe the exit servo motor.                                         |
| ACTUAL RESULTS         | The exit servo motor remains in its default position and does not change its angle to 90° to allow exit. |
| EXPECTED RESULTS       | The exit servo motor should change its angle to 90° when a vehicle is detected at the exit sensor.       |
| ATTACHMENTS            | NA                                                                                                     |
| REMARKS                | The issue is critical as it prevents vehicles from exiting the premises. Immediate attention and fix are required. |
| DEFECT SEVERITY        | Major                                                                                                   |
| DEFECT PRIORITY        | High                                                                                                    |
| REPORTED BY            |                                                                                                        |
| ASSIGNED TO            |                                                                                                        |
| STATUS                 |                                                                                                        |
| FIXED BUILD VERSION    |                                                                                                        |


## 2nd test case:-

| ID    | Specification                               | Objective                                                             | Input Data          | Expected Output                                                      | Actual Output                                                       | Status |
|-------|--------------------------------------------|-----------------------------------------------------------------------|---------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|--------|
| TC_01 | Public Parking Link                       | Test link to login page of public parking                            | Click on link      | Should redirect to login page of public parking                     | Redirects to login page of public parking                           | Pass   |
| TC_02 | Email Field                               | Test email field of login page of public parking                     | Enter email        | Email field should allow entry of valid email address               | Email field allows entry of valid email address                     | Pass   |
| TC_03 | Password Field                            | Test password field of login page of public parking                  | Enter password     | Password field should allow entry of valid password                 | Password field allows entry of valid password                       | Pass   |
| TC_04 | Sign in Button (Public Parking)           | Test navigation to public parking home page (on click) if successful login | Click sign in button | If login is successful, navigate to public parking home page        | Unable to login, redirected to login page                           | Fail   |
| TC_05 | Create an account Sign Up Link           | Test navigation to Sign up Page of Public Parking                    | Click sign up link | Should navigate to Sign up Page of Public Parking                   | Navigates to Sign up Page of Public Parking                         | Pass   |
| TC_06 | Sign Up Button (Public Parking)          | Test email verification link and navigation to PrePark Home Page / Main Page / Index (on click) | Click sign up button | If verification is successful, should navigate to PrePark Home Page | Navigates to PrePark Home Page / Main Page / Index                 | Pass   |
| TC_07 | Public Parking Home Page                 | Test home page; it should display every registered individual        | Navigate to home page | Home page should display list of every registered individual       | Home page displays list of every registered individual              | Pass   |
| TC_08 | Society Automation Parking Link          | Test link to login page of society automation parking                | Click on link      | Should redirect to login page of society automation parking         | Redirects to login page of society automation parking               | Pass   |
| TC_09 | Email Field (Society Automation Parking) | Test email field of login page of society automation parking         | Enter email        | Email field should allow entry of valid email address               | Email field allows entry of valid email address                     | Pass   |
| TC_10 | Password Field (Society Automation Parking) | Test password field of login page of society automation parking      | Enter password     | Password field should allow entry of valid password                 | Password field allows entry of valid password                       | Pass   |
| TC_11 | Sign in Button (Society Automation Parking) | Test navigation to society automation parking home page (on click) if successful login | Click sign in button | If login is successful, should navigate to society automation parking home page | Navigates to society automation parking home page | Pass   |
| TC_12 | Create an account Sign Up Link (Society Automation Parking) | Test navigation to Sign up Page of society automation parking | Click sign up link | Should navigate to Sign up Page of society automation parking | Navigates to Sign up Page of society automation parking | Pass   |
| TC_13 | Sign Up Button (Society Automation Parking) | Test email verification link and navigation to PrePark Home Page / Main Page / Index (on click) | Click sign up button | If verification is successful, should navigate to PrePark Home Page | Navigates to PrePark Home Page / Main Page / Index                 | Pass   |
| TC_14 | Society Automation Parking Home Page     | Test home page; it should display every registered individual        | Navigate to home page | Home page should display list of every registered individual       | Home page displays list of every registered individual              | Pass   |
| TC_15 | Collaborator Link                        | Test collaborator's page; it should display details of specific collaborator | Click collaborator link | Collaborator's page should display details of specific collaborator | Collaborator's page displays details of specific collaborator       | Pass   |

## result:-

| FIELD                  | DETAILS                                                                                                |
|------------------------|--------------------------------------------------------------------------------------------------------|
| ID                     |                                                                                                        |
| PROJECT                | PrePark                                                                                                |
| PRODUCT                | Web Application                                                                                           |
| RELEASE VERSION        |                                                                                                        |
| MODULE                 | Public Parking Login                                                                                      |
| DETECTED BUILD VERSION |                                                                                                        |
| SUMMARY                | Unable to login to public parking, redirected to login page.                                                                        |
| DESCRIPTION            | When attempting to log in as a public parking user, the application redirects back to the login page instead of navigating to the public parking home page, despite entering valid credentials. |
| STEPS TO REPLICATE     | 1. Navigate to the public parking login page.                                                          |
|                        | 2. Enter valid email and password.                                                                      |
|                        | 3. Click the "Sign in" button.                                                                          |
| ACTUAL RESULTS         | The application redirects back to the public parking login page.                                      |
| EXPECTED RESULTS       | Upon successful login, the application should navigate to the public parking home page.                 |
| ATTACHMENTS            | NA                                                                                                     |
| REMARKS                | Users are unable to access the public parking features.  This is a critical issue.                     |
| DEFECT SEVERITY        | Critical                                                                                               |
| DEFECT PRIORITY        | High                                                                                                    |
| REPORTED BY            |                                                                                                        |
| ASSIGNED TO            |                                                                                                        |
| STATUS                 |                                                                                                        |
| FIXED BUILD VERSION    |                                                                                                        |


## 3rd test case:-

| Test Case ID | Specification                         | Objective                                                      | Input Data                                             | Expected Output                                                                            | Actual Output                                                                              | Status |
|-------------|-------------------------------------|----------------------------------------------------------------|------------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------|
| TC_01       | Hardware components interfacing     | Verify that the connection of the TDS sensor, turbidity sensor, and TFT screen to the Arduino MEGA board is correct | Hardware components connected to Arduino MEGA board | Connection of hardware components to Arduino MEGA board is correct | Connection of hardware components to Arduino MEGA board is correct | Pass   |
| TC_02       | TDS Measurement Accuracy           | Verify the accuracy of TDS measurements.                       | Compare calculated TDS values with known standard solutions | TDS values should be converted to parts per million (PPM) accurately | TDS values are converted to parts per million (PPM) accurately | Pass   |
| TC_03       | EC Calculation Accuracy            | Verify the accuracy of electrical conductivity (EC) calculation. | Test conductivity measurement accuracy using standard conductivity solutions | EC calculation for TDS sensors should be accurate | EC calculation for TDS sensors is accurate | Pass   |
| TC_04       | PPM Calculation                    | Verify the calculation of parts per million (PPM) of dissolved solids in water. | Check the PPM calculation for dissolved solids in water samples | PPM calculation should be accurate | PPM calculation is accurate | Pass   |
| TC_05       | Chart Calibration Validation       | Validate the correctness of EC and PPM charts.                 | Compare EC and PPM charts with known standard solutions | EC and PPM charts should match expected values | EC and PPM charts match expected values | Pass   |
| TC_06       | Turbidity Measurement Accuracy     | Test the accuracy of turbidity measurement.                     | Use standard turbidity solutions for measurement | Turbidity measurement should be accurate | Turbidity measurement is accurate | Pass   |
| TC_07       | NTU Calculation and Chart Calibration | Verify the calculation of Nephelometric Turbidity Units (NTU) based on turbidity sensor readings. | Compare NTU calculations with known standards | NTU calculation based on turbidity sensor readings should be accurate | NTU calculation based on turbidity sensor readings is accurate | Pass   |
| TC_08       | Dynamic Range Testing              | Test the system's ability to measure a wide range of TDS and turbidity levels. | Measure TDS and turbidity at low and high concentrations | System should accurately measure a wide range of TDS and turbidity levels | System accurately measures a wide range of TDS and turbidity levels | Pass   |
| TC_09       | Display Boot-up and Resolution     | Ensure the TFT screen initializes properly and maintains correct resolution. | Power on the system | TFT screen should initialize without distortion and maintain a resolution of 480x320 pixels | TFT screen initializes without distortion and maintains a resolution of 480x320 pixels | Pass   |
| TC_10       | Sensor Readings Stability          | Verify that sensor readings remain stable over time.            | Monitor sensor readings over time | Sensor readings should remain stable under normal operating conditions | Sensor readings remain stable under normal operating conditions | Pass   |
| TC_11       | Display Refresh Rate               | Ensure the display refresh rate is appropriate for real-time monitoring. | Monitor display refresh rate | Display refresh rate should be appropriate for real-time monitoring | Display refresh rate is not appropriate for real-time monitoring | Fail   |
| TC_12       | Sensor Fault Handling              | Verify the system's response to sensor malfunctions.            | Introduce sensor malfunctions | System should respond appropriately to sensor malfunctions | System responds appropriately to sensor malfunctions | Pass   |
| TC_13       | Power Interruption Handling        | Ensure the system retains calibration data after power interruption. | Interrupt power supply and restore power | System should retain calibration data and resume operation correctly after power interruption | System retains calibration data and resumes operation correctly after power interruption | Pass   |

## result:-

| FIELD                  | DETAILS                                                                                                       |
|------------------------|---------------------------------------------------------------------------------------------------------------|
| ID                     |                                                                                                               |
| PROJECT                | Water Quality Monitoring System                                                                              |
| PRODUCT                | Embedded System                                                                                              |
| RELEASE VERSION        |                                                                                                               |
| MODULE                 | TFT Screen Display                                                                                             |
| DETECTED BUILD VERSION |                                                                                                               |
| SUMMARY                | Display refresh rate is not appropriate for real-time monitoring                                                                                                  |
| DESCRIPTION            | The display refresh rate on the TFT screen is inadequate, resulting in a slow update of sensor readings. This makes real-time monitoring difficult and affects the user experience.                                   |
| STEPS TO REPLICATE     | 1. Power on the Water Quality Monitoring System.                                                              |
|                        | 2. Monitor the sensor readings displayed on the TFT screen while values change (simulate by changing the water sample).                                                          |
|                        | 3. Observe the refresh rate of the displayed readings.                                                           |
| ACTUAL RESULTS         | The display refresh rate is slow, and updates to the sensor readings are not displayed in real-time.                                        |
| EXPECTED RESULTS       | The display should refresh at an appropriate rate to provide real-time monitoring of sensor readings.                                              |
| ATTACHMENTS            | NA                                                                                                            |
| REMARKS                | The slow refresh rate impacts the usability of the system and needs to be addressed to provide a better user experience.                                                         |
| DEFECT SEVERITY        | Minor                                                                                                       |
| DEFECT PRIORITY        | Medium                                                                                                       |
| REPORTED BY            |                                                                                                               |
| ASSIGNED TO            |                                                                                                               |
| STATUS                 |                                                                                                               |
| FIXED BUILD VERSION    |                                                                                                               |


---
