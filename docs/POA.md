# Plan of Approach
*Version Number: 0.1* 

## Team Members
* Craig Chauraya: 500215
* Vedat Daglar: 495701
* Minh Pham: 491537
* Daria Grigoruk: 486702
* Andrei Lidzhiev: 480211

## Introduction
 With the growth of digitalisation and tourism, convenience is becoming increasingly important. Although there are many mapping applications most of them have the goal to simply get a user from point A to point B, without taking in consideration of the users  experience preferance.
 
The goal of this project is to address these issues by creating a personalized experience for locals and tourists via a mapping application that creates user preference based routes which relies on the products they are searching or local events they might want to attend to. Alongside, the app aims to give the user an insight of the local business/event by providing descriptions of the places which will help them to determine if the business/event is what they are looking for.

# Stakeholders

 - **Client** - Nils, our client, person who has a vision of the project and who makes all decisions regarding product's form and idea. He is the contact point in case we have doubts or question regarding app's core functionality or other important topics.

 - **Technical Partner** - client's partner, Arne, person who made a software for the customer before and who will assist us during the development. We will contact Arne in case of technical issues or questions about architecture or API.

 - **SSS students** - team of Smart Solutions Semester students, they have worked on shaping the original idea into more specific design, with wireframes and documentation, they will assist us in the development and also testing the iterations of the product, providing us with a feedback. We will discuss visual design, functionality and user experience related questions with SSS team, also involving Nils into the discussion, when necessary.

 - **Developers** - us, we are the ones who will work on enhancing existing design, implementing new software, and connecting it to the database provided by Technical partner.

 - **Walstraat shops** - as client said, some organizations and entrepreneurs agreed to be a part of testing environment. We can use the information of their facilities and depict it in our web app.

## Project objectives
(Define what are we going to solve, 2nd bullet point)

* Develop a Webapp for smartphones with GPS that works with data on Walstraat by June 26, 2022
* This App  will help local businesses digitize their current offerings, make them visible to this app by the end of June 2022.
* Until May 29, 2022, the Application should provide the ability to build a route from the user's current location to a selected point on Walstraat.
* Until June 12, 2022, the application user can register an account and log in to his personal account
* Until June 26, 2022,The application should provide an easy way to search for organizations and save a plan to visit places.
* Until June 26, 2022, the application must provide service to more than 100 clients at the same time.
## Technologies Used
(Saying we will perform multi-criteria analysis for the most important technical decision, referencing to research/technical documentation)
### Frontend
* __React__: React is a fast, component based Javascript framework which is used for developing SPAs. This makes it great for creating data visualization tools like GPS systems since it prevents the need to reload the page every time there will be a change in the map, for instance.  

* __Tailwind CSS__: For CSS we are using Tailwind. Tailwind is utility based CSS framework which provides functionality to create highly customizable styling.

### Backend 
* __Node.js__:  By using Node.js, we will be able to use the same programming language, Javascript, across the stack. Also, with Node.js we will also have access to the npm software library which might be useful in the future.

* __Express.js__: Express is a web-app framework which provides various features such as middleware, creating HTTP requests and routing.  

* __Geolocation__: The Geolocation API allows the user to provide their real-time location via the web application they are using. We are using this API to constantly access the users location in order to display it on the map component later on.

## Global Timeline
| Date | Deadlines | Deliverables |
|------|-------|-------|
| **15-05-2022** | **Sprint 0** | **<ul><li>Plan of Approach</li></ul>** |
| **29-05-2022** | **Sprint 1** | **<ul><li>Retrospective report Sprint 1</li><li>All produced material</li><li>Sprint 2 plan</li><li>Timesheet version 1</li><li>Account of individual contribution version 1 </li></ul>** |
| **12-06-2022** | **Sprint 2** | **<ul><li>Retrospective report Sprint 2</li><li>All produced material</li><li>Timesheet version 2</li><li>Account of individual contribution version 2</li><li>Sprint 3 plan</li></ul>** |
| **26-06-2022** | **Sprint 3** | **<ul><li>Retrospective report Sprint 3</li><li>All produced material</li><li>Timesheet version 3</li><li>Account of individual contribution version 3</li></ul>** |

## Sprint objectives 
### Sprint 0
For sprint 0, our team focuses on writing the Plan of Approach and forming requirements for the project. We will define the project's scope, goals, the global timeline and deliverables, as well as the objectives for each sprint of the project.

### Sprint 1
For sprint 1, we will focus on making the core functionalities related to navigation system of the application. 
We plan to finish those user stories in this sprint:
- **Cu01**: As a consumer user, I want to see the map of Walstraat so that I can be able to navigate around the area. 
- **Cu02**: As a consumer user, I want to read a brief description about the selected location so that I know a bit more about the location of interest. 
- **Cu04**: As a consumer user, I want to see a direct route to my location of interest so that I can navigate towards it. 
### Sprint 2
For sprint 2, we finalize the core functionalities of the application, which are the user authentication, personal account management, and information provision on different events and locations.
The user stories we are planning to implement in this sprint are:
- **Cu02**: As a consumer user, I want to read a brief description about the selected location so that I know a bit more about the location of interest. 
- **Cu03**: As a consumer user, I want to view a list of destinations that is have promotions and discounts in Walstraat so that I can easily select the one I wish to visit and use the promotion. 
- **Cu04**: As a consumer user, I want to see a direct route to my location of interest so that I can navigate towards it. 
- **Cu05**: As a consumer user, I want to see all organisations that have a promotion on offer so that I can go to the place to utilise the promotion. 
- **Cu06**: As a consumer user, I want to see all the upcoming events in Walstraat so that I can plan on what to do and when. 
- **Cu07**: As a consumer user, I want to see all the upcoming events in Walstraat so that I can plan on what to do and when. 
- **Cu09**: As a consumer user, I want to be able to search for a specific location based on my preferences so that I can go and visit the place. 
- **Cu11**: As a consumer user, I want the web application to plan a route for me based on my preferences so that I do not have to worry about where to go next from one location. 

### Sprint 3
For sprint 3, we will focus on improving the exist codebase, polishing up the user interface and the user experience of the application and prepare for the final delivery to production stage. We also wrap up the documentation and the deliverables for the project, with a plan for future development of this project.

The user stories we are planning to implement in this sprint are:
- **Cu08**: As a consumer user, I want to use the web application in the language I prefer so that I can understand and use the web application. 
- **Cu10**: As a consumer user, I want to see which organisation is very popular today so that I can go and visit that popular organisation. 
- **Cu11**: As a consumer user, I want the web application to plan a route for me based on my preferences so that I do not have to worry about where to go next from one location. 
- **Cu12**: As a consumer user, I want the web application to give me contact details about a specific organisation/location so that I can call the organisation/location. 


addition: Kickoff meeting section; Research documentation for technologies, wireframes, etc.; 

(React/Vue/Angular, integration with map APIs)

Answer the main questions from the client => put in the research



