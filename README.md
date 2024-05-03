# Frontend-Interview-Assessment


Candidate Application Platform
This project is a candidate application platform built using React, Redux, CSS, and Material UI. It allows users to view job listings, filter jobs based on various criteria, and implement infinite scroll for a seamless browsing experience.

Features
View job listings with job title, company name, location, job description, experience required, and apply button/link.
Filter job listings based on minimum experience, company name, location, remote/on-site, tech stack, role, and minimum base pay.
Implement infinite scroll to load additional job listings automatically as the user scrolls down the page.
Responsive design for compatibility with different screen sizes and devices (optional).

Technology Stack
ReactJS
Redux
CSS
Material UI
Getting Started

Clone the repository:
bash
Copy code
git clone https://github.com/Rahul20038/Frontend-Interview-Assessment.git

Install dependencies:
bash
Copy code
cd candidate-application-platform
npm install

Run the development server:
bash
Copy code
npm start
Open http://localhost:3000 to view the app in your browser.

Folder Structure
/public: Contains public assets and the HTML template.
/src: Contains the source code.
/components: Contains React components.
/redux: Contains Redux actions, reducers, and store configuration.
package.json: Defines project dependencies and scripts.
API Integration
The application integrates with the provided API to fetch job listings.
API endpoint: https://api.weekday.technology/adhoc/getSampleJdJSON
The API takes limit and offset as request body parameters.