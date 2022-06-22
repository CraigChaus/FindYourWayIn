_13/05/2022_

**VERSION HISTORY**

| **ID#** | **Prepared****By** | **Revision Date** | **Approved By** | **Approval Date** | **Reason**                                           |
|---------|--------------------|-------------------|-----------------|-------------------|------------------------------------------------------|
| 1.0     | Craig Chauraya     | 16/05/2022        | Minh Pham       | 17/05/2022        | Test rules and descriptions                          |
| 2.0     | Craig Chauraya     | 08/06/2022        | Minh Pham       | 09/06/2022        | Update test plan table structure,update User story 2 |
| 3.0     | Craig Chauraya     | 22/06/2022        | Vedat Daglar    | 22/06/2022        | Delete empty spaces, expound briefly described text  |


# 1. Introduction

## 1.1. Purpose of The Document

This document is supposed to provide insight into what kind of testing is done and when, why it is tested that way and how team members should carry out the testing procedure.
# 2. Test item 

## 2.1 Project description

A large web application called FindYourWayIn is a mobile web tool that, in basic terms, should mimic a tourist leaflet. 
Its main purpose is to efficiently inform travellers and potentials customers about organisations and events that are happening in a specified target area. 

The target area for now is Walstraat in the city of Deventer, Netherlands. 
This web application will market and advertise the latest information about a specific location in Walstraat such as a restaurant but can also provide the location of basic facilities such as a public toilet.

## 2.2 Items to be Tested 

The following backlog items can be tested by using either unit testing, integrated testing or acceptance testing. These may be done either manually (following documented testing steps) or by using automated testing from cypress.Each component to be tested will be stated whether it is tested manually or by cypress.

As a team we agreed that the following type of tests are done when:

**<li>Unit test** - This is done when a component we want to test on does not depend on another component.</li>

**<li>Integrated test** - This is done when a component we want to test on does depend on another component.This means that the component may or may not undergo multiple tests.</li>

**<li>Acceptance test** - This is done by the client, we give them the program in its current state so that they may test and see if they like the way it behaves and its functionality. They may also let other customers test the application to se how they like it.</li>

The test plan is seperated into user stories in the order of their SPRINT priority as mentioned in the **user stoies** document for easy tracking. User stories can be referred in the user stories <>>....... add link here.......>>>>>>

### 2.2.1 User Story 1 

 | **Item to Test**                       | **Test Description** | **Test environment/manner** |
 |----------------------------------------|:--------------------:|-----------------------------|
 | Google map integration                 |   Integration test   | Manually                    |
 | Basic functionalities on map interface |   Integration test   | Manually                    |
 | UI components for navigation screen    |      Unit test       | Manually, Cypress           |    

### 2.2.2 User Story 2

| **Item to Test**                              | **Test Description** | **Test environment/manner** |
|-----------------------------------------------|:--------------------:|-----------------------------|
| API information reflecting on locations popup |   Integration test   | Manually, Cypress           |
| Icon display filtering component              |   Integration test   | Manually, Cypress           |
| Popup dialogue pops up when icon is clicked   |      Unit test       | Manually                    |
| API information reflecting on details page    |      Unit test       | Manually, Cypress           |


### 2.2.3 User Story 4

| **Item to Test**                       | **Test Description** | **Test environment/manner** |
|----------------------------------------|:--------------------:|-----------------------------|
| Search bar functionality in navigation |   Integration test   | Manually, Cypress           |
| Display route on overview map          |   Integration test   | Manually,Cypress            |
| Switching to live navigation mode      |   Integration test   | Never executed              |
| Destination reached message            |   Integration test   | Never executed              |

### 2.2.4 User Story 3

| **Item to Test**                                     | **Test Description** |**Test environment/manner**|
|------------------------------------------------------|:--------------------:|---------------------------|
| API data displayng list of locations with promotions |  Integration  test   | Manually, Cypress         |
| Routing to the location                              |   Integration test   | Never executed            |

### 2.2.5 User Story 5

| **Item to Test**                                          | **Test Description** | **Test environment/manner** |
|-----------------------------------------------------------|:--------------------:|-----------------------------|
| API data displaying shops and restuarants with promotions |   Integration test   | Never executed              |
| Routing to the location                                   |   Integration test   | Never executed              |


### 2.2.6 User Story 6

| **Item to Test**                                           | **Test Description** |**Test environment/manner**|
|------------------------------------------------------------|:--------------------:|---------------------------|
| API data displaying all events( both current and upcoming) |   Integration test   | Manually, Cypress         |
| CLiking on an event to read the details of the event       |      unit test       | Manually, Cypress         |

### 2.2.7 User Story 7

| **Item to Test**                                              | **Test Description** | **Test environment/manner** |
|---------------------------------------------------------------|:--------------------:|-----------------------------|
| API data displaying all events and locations within Walstraat |   Integration test   | Manually                    |
| CLiking on an event or location to read details about it      |      Unit test       | Manually                    |
| Routing to the location                                       |   Integration test   | Never executed              |

### 2.2.8 User Story 9

| **Item to Test**                                | **Test Description** |**Test environment/manner**|
|-------------------------------------------------|:--------------------:|---------------------------|
| Storing user location preference in database    |   Integration test   |Never executed             |
| Routing to the locations as per user preference |   Integration test   |Never executed             |

### 2.2.9 User Story 13

| **Item to Test**                      | **Test Description** |**Test environment/manner**|
|---------------------------------------|:--------------------:|---------------------------|
| Signing up                            |      Unit test       | Manually, Cypress         |
| Login in                              |      Unit test       | Manually, Cypress         |
| Storing user account data in database |      Unit test       | Manually, Cypress         |

### 2.2.10 User Story 8

| **Item to Test**            | **Test Description** | **Test environment/manner** |
|-----------------------------|:--------------------:|-----------------------------|
| Language switcher component |      Unit test       | Manually, Cypress           |

### 2.2.11 User Story 10

| **Item to Test**    |                                 **Test Description**                                  |**Test environment/manner**|
|---------------------|:-------------------------------------------------------------------------------------:|---------------------------|
| Spotlight component | Merged with User Story 3 test plan because they are on the same page( Discovery page) | Manually, Cypress         |

### 2.2.12 User Story 11

| **Item to Test**                                      | **Test Description** | **Test environment/manner** |
|-------------------------------------------------------|:--------------------:|-----------------------------|
| Route categories creation page                        |      Unit test       | Never executed              |
| Routing to the multiple locations based on preference |   Integration test   | Never executed              |

### 2.2.13 User Story 12

| **Item to Test**          | **Test Description** | **Test environment/manner** |
|---------------------------|:--------------------:|-----------------------------|
| Contact details component |      Unit test       | Manually, Cypress           |

## 2.3. Items not to be tested

Some items are not worth testing because they are simply static HTML pages that have no additional functionality besides routing to another page.

| **Item Not to Test** | **User story ID#** | **Comment**                                                                             |
|----------------------|:------------------:|-----------------------------------------------------------------------------------------|
| Landing page         |         1          | Its just an HTML page that is shown upon opening the web application as an introduction |
 
## 2.4. Test Approach(s)

At the end of a completed user story (when all the components worth testing as mentioned above are done ) the tests will be performed by the developer who created it. The test will be documented and when approved by the product owner will be put aside as 100% complete.

For components that require unit testing, they can be tested immediately even when the user story components are not all complete.
For components that require integration testing, they can only be tested once all the user story components are also complete as it may rely on another component of the same user story.

## 2.5. Test Pass / Fail Criteria

A **test pass** is given when the expected results and the actual results match or are similar to each other with the clients approval. The clients approval can be seen in the notes section of the test case in the test report. 
A **test fail**  is given when the actual results do not match the expected results or are similar but are not approved by the client.  

## 2.6. Test Entry / Exit Criteria

The tester begins testing the component immediately after it has been implemented. 
They may stop testing when the test passes at least 3 times for different scenarios depending on the parameters the test can take.
For example, an edge case can be done for components that expect the user to input the distance to travel.

## 2.7. Test Deliverables

At the end of the project, this test plan, test report containing the detailed test cases and test matrix will be delivered as separate documents.

## 2.8. Test Suspension / Resumption Criteria

In the event that a component depends on another one that is currently being implemented by another developer, the tester may have to put that component aside for testing until the other component is done.
upon receiving the other component the testing may begin or resume.

# 3. Risk and mitigation

## 3.1. Test Risks / Issues

<li>Some documented test cases cannot be automated hence may not be counted by a code coverage tool and may result in an inadequate code coverage percentage, this will result in poor testing</li>
<li>Tight timelines</li>
<li>Undefined project scope</li>
<li>Insufficient resources</li>
<li>Continuously changing requirements</li>
<li>Natural disasters</li>

# 4. Test Environment and infrastructure

The automated tests are done using Cypress test environment. These tests focus on the technical aspects of the product. They can be found in the  [cypress](../../../src/frontend/cypress/integration) folder under integration.

# 5. Test Schedule

## 5.1. Milestones and schedule

During each sprint, new test designs are created in the test report as per refinement session conducted by the team. These tests are done after they have been implemented. For example this may mean that if the component to be tested had its test designed in sprint 1 but implemented in sprint 3 then it will be tested in sprint 3. 

This will result in the testplan also being updated subsequently as per sprint.

# Appendix

 ## Requirements

 The following system requirements are provided to refer to which requirements are going to be tested.

### Functional requirements

   | Reference ID | Description                                                                              |  Source  |
   |:------------:|------------------------------------------------------------------------------------------|:--------:|
   |     SF01     | System can fetch data from API in realtime                                               | Analysis |
   |     SF02     | System can display map of Walstraat                                                      |   Cu01   |
   |     SF03     | System can display information about a selected location                                 |   Cu02   |
   |     SF04     | System can display a list of organisations in Walstraat with promotions and discounts    |   Cu03   |
   |     SF05     | System can create a direct route to the selected destination                             |   Cu04   |
   |     SF06     | System can display promotions offered by organisations in Walstraat                      |   Cu05   |
   |     SF07     | System can display an agenda of events in Walstraat to the user as well as their own     |   Cu06   |
   |     SF08     | System can display a "discover Walstraat" page and give the user recommended locations   |   Cu07   |
   |     SF09     | System can display a specific location based on the users search and preferences         |   Cu09   |
   |     SF10     | System can generate a route based on the users preferences as to what they want to visit |   Cu11   |
   |     SF11     | System can integrate call functionality with the users mobile device to make calls       |   Cu12   |
   |     SF12     | System can store user data in a database                                                 | Analysis |
   |     SF13     | System can display map icons according to the filters placed from category               |   Cu13   |