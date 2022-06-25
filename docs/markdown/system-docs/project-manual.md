# Instruction manual
This document writes the instruction manual of the project. All the steps required to build and run the project are described here.

## Prerequisites
You should have the following prerequisites:
- Node.js version 16.15.1 or higher running on your computer. Go to this link for downloading [Node.js](https://nodejs.org/en/) 

## Setup environment variables
In the src/frontend folder, you should have a file called .env. This file contains the environment variables that are used in the project.
Create a new file called .env.local and copy the content of the env.txt file to it.
## Running the project
Before you can build the project, make sure you are in the src/frontend folder. Then run the following command:
\`\`\`
npm install
\`\`\`

To build the project, run the following command:
\`\`\`
npm run build
\`\`\`

To run the development server, run the following command:
\`\`\`
npm run dev
\`\`\`

## Linting
To lint the code, run the following command:
\`\`\` 
npm run lint (ESLint)
npm run prettier (Prettier)
\`\`\`

To fix the linting errors, run the following command:
\`\`\`
npm run lint:fix (ESLint)
npm run prettier:fix (Prettier)
\`\`\`

## Testing
To test the project, run the following command:
\`\`\`
npm run test:e2e (E2E testing)
npm run test:component (Component testing)
\`\`\`



