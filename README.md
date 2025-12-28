# Calculator Web Application

## Project Description

This is a calculator web application that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator displays the typed numbers and operators on the screen and shows a live preview of the calculated result under the input while typing. Once the equal sign is pressed, only the final answer is displayed on the calculator screen. The application supports continuous calculation, allowing users to continue computing using the previous result. The interface is fully responsive and designed to look like a mobile calculator application that works smoothly on desktop and mobile devices.

## API Details Used

### Base URL

Not applicable

This project does not use any external API. All calculations are handled locally using JavaScript.

### Endpoints

1. Local Calculation Handler  
   Endpoint: N/A  
   Method: N/A  
   Description: Performs arithmetic calculations directly in the browser using JavaScript logic.

2. User Input Handler  
   Endpoint: N/A  
   Method: N/A  
   Description: Handles number and operator inputs from the calculator buttons.

3. Display Update Handler  
   Endpoint: N/A  
   Method: N/A  
   Description: Updates the calculator screen with the typed expression, preview result, and final answer.

### Required Parameters

No parameters are required.

All values are entered directly by the user through the calculator buttons.

### Authentication

None  

This calculator application does not require authentication or an API key since it does not use any external API.

### Sample JSON Response

Not applicable

This project does not retrieve data from an API or process JSON responses.

### Fetch the Data (JavaScript)

Not applicable

The application does not use the fetch() API. All logic and calculations are performed locally using JavaScript functions and DOM manipulation.

## Instructions to Run the Project

### Step 1: Open the Project
Open the `index.html` file in a web browser. You can either:
- Double-click the `index.html` file to open it directly
- Use a local server such as the Live Server extension in VS Code
- Use a local server like XAMPP or WAMP (optional)

### Step 2: Use the Application
Click the calculator buttons to input numbers and operators.  
The typed expression will appear on the screen with a live preview of the result displayed below it.

### Step 3: View the Final Answer
Press the equal (`=`) button to display the final answer.  
The preview result will disappear, and only the final answer will remain on the screen.

### Step 4: Continue Calculation
After pressing `=`, you may:
- Press an operator to continue calculating using the previous result
- Press a number to start a new calculation

### Step 5: Troubleshooting
If you encounter issues:
- Ensure all project files are in the same folder
- Refresh the browser
- Check the browser console for JavaScript errors
