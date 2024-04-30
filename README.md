# Event_app
 A web application that allows users to see the events in a city and book their spot. 

# Description 
On the initial page, users can browse a list of events happening in their city. If a user chooses to explore a specific event, they can view detailed information about it, such as the date, time, price, address, and a description of the event, directly on that page. Also, there is a "Book" button that allows users to proceed to a form where they can enter their personal and contact information for booking. This information is then automatically sent to the administrator's email, who will secure the spot for the user and provide details for users regarding payment.

# Technologies Used
- Node.js
- Express
- HTML/CSS
- JavaScript
- Nodemailer 

# Setup Instructions

1. Install dependencies (through the VS Code Terminal or Desktop Command Line):
npm install
2. Configure email settings in a .env file in the root directory. Replace the placeholders with your actual email credentials 
EMAIL_USERNAME=your_email_username
EMAIL_PASSWORD=your_email_password
3. Start the server:
npm start
4. Open a browser and visit http://localhost:3000/ to view the app and test its functionality.

# Architecture and Design Process
1. Front-End Design and Structure:
Each event is presented in a card-like format (item-container), which makes the UI adaptable for different amounts of content; responsive web design is applied  across various devices.

2. Back-End Structure:
Used Node.js and Express Framework for a server setup; integrated Nodemailer email functionality for the administators that will instantly receive all filled out registration details by the user. 

3. User Interaction:
The form submission does not reload the page (uses preventDefault), it uses fetch API to send data to the server. After submitting the booking form, users receive immediate response through alerts that indicate the status of their submission. 

# Compromises
Because of the time constraints: 
- I didn't develop an authentication for users and automatic booking process and used a more traditional method I listed above. 
- I didn't develop a separate page for every event where users could get more information; instead, put this information through hover effects on CSS on that main page.

# Issues 
- I made booking submission form the same for all events (and information about which specific event a user wants to book is not passed)
- Client-side and server-side validation are minimal
- CSS lacks media queries for handling different screen sizes





