# System Design 

## Table of content
  - [1. Goal](#1-goal)
  - [2. Product](#2-product)
  - [3. Technical Design](#3-technical-design)
    - [3.1. Technology stack](#31-technology-stack)
      - [Programming Languages](#programming-languages)
      - [Frontend frameworks](#frontend-frameworks)
      - [Backend Technologies](#backend-technologies)
      - [Database](#database)
      - [Hosting](#hosting)
      - [Linter](#linter)
    - [3.2. Development Tools](#32-development-tools)
      - [Version Control](#version-control)
      - [Online code repositories](#online-code-repositories)
  - [4. Diagrams](#4-diagrams)



## 1. Goal
Tourist leaflets help people with guidance in new environment. They display a map, give some information of the surronding and shows near businesses.

 The aim of this product is to replace a paper tourist leaflet in a digital environment to help both the Walstraat entrepeneurs with their business and tourists/locals with getting around.
## 2. Product
The product is mainly a personal navigation app. The app takes in consideration of the users preferances for creating custom routes and also aims to give the user an insight of the businesses/events in the Walstraat. The details of the business (such as opening hours,description of the business etc.) is displayed upon users wish.

Users can create their own accounts and their credentials are stored encrypted and saved in a database. Users can also add favorite locations to their accounts to be saved.


## 3. Technical Design

### 3.1. Technology stack

#### Programming Languages

- For this web project the used language is Typescript, which is a superset of Javascript. It is used for both frontend and backend to keep the language consistent. 
#### Frontend frameworks
- React.js: React is a Javascript framework that provides the oppurtunity to create powerful single page applications with reusable components throughout the application. 

- Next.js: Next is a React framework which is used for server-side rendering and routing. It is used in this application to provide a better performance with rendering the map and the data which will be displayed.

- Although it is not a framework it is important to mention that for the map display on the frontend, Google Maps API is used.

#### Backend Technologies
- Google Maps API's are used for routing, geocoding, map display, and calculating distance matrix.

- TheFeedFactory API: the company that we have partnered with has collected data from the Walstraat business.The data consists of addresses, phone numbers, opening hours, keywords about the business etc. This data is stored in a database which can be accessed by REST API calls.
#### Database
 -  _as of Sprint-1 we havent implemented the database yet._
#### Hosting
- For development Vercel Deployment (which is also the development team behind Next.js) is used. However, the client has bought a domain (findyourwayin.com) which will host the application in the future.
#### Linter
- For linting ESLint with Typescript configuration is used.
### 3.2. Development Tools
#### Version Control
- The used version control system is Git.
#### Online code repositories
- The online Git collaboration platform is GitLab.
## 4. Diagrams

