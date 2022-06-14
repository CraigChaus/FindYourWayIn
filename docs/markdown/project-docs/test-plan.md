

_13/05/2022_

**VERSION HISTORY**


| **ID#** | **Prepared****By** | **Revision Date** | **Approved By** | **Approval Date** | **Reason**                                           |
|---------|--------------------|-------------------|-----------------|-------------------|------------------------------------------------------|
| 1.0     | Craig Chauraya     | 16/05/2022        | Minh Pham       | 13/05/2022        | Test rules and descriptions                          |
| 2.0     | Craig Chauraya     | 08/06/2022        | Minh Pham       | 09/06/2022        | Update test plan table structure,update User story 2 |

 



# 1. Introduction

## 1.1. Purpose of The Document

This document is supposed to provide insight into what kind of testing is done and when, why it is tested that way and how team members should carry out the testing procedure.
# 2. Test item 

## 2.1 Project description

A large web application called FindYourWayIn is a mobile web tool that, in basic terms, should mimic a tourist leaflet. 
Its main purpose is to efficiently inform travellers and potentials customers about organisations and events that are happening ina specified target area.

The target area for now is Walstraat in the city of Deventer, Netherlands. 
This web application will market and advertise the latest information about a specific location in Walstraat such as a restaurant but can also provide the location of basic facilities such as a public toilet.

## 2.2 Items to be Tested 

The following backlog items can be tested by using either unit testing, integrated testing or acceptance testing.
As a team we agreed that the following type of tests are done when:

**<li>Unit test** - This is done when a component we want to test on does not depend on another component.</li>

**<li>Integrated test** - This is done when a component we want to test on does depend on another component.</li>

**<li>Acceptance test** - This is done by the client, we give them the program in its current state so that they may test and see if they like the way it behaves and its functionality. They may also let other customers test the application to se how they like it.</li>

The test plan is seperated into user stories in the order of their SPRINT priority as mentioned in the **user stoies** document for easy tracking. User stories can be referred in the user stories <a href = "https://saxion-my.sharepoint.com/:w:/r/personal/495701_student_saxion_nl/Documents/Project_HBO-ICT/Requirements%20Engineering/User_Stories_FindYourWayIn.docx?d=w6dd2c310149640b4b819f0fd78ea1c3e&csf=1&web=1&e=5ER3vR" > here</a>

### 2.2.1 User Story 1 

 | **Item to Test**                       | **Test Description** |
 |----------------------------------------|:--------------------:|
 | Google map integration                 |   Integration test   |
 | Basic functionalities on map interface |   Integration test   |
 | UI components for navigation screen    |      Unit test       |

### 2.2.2 User Story 2

| **Item to Test**                               | **Test Description** |
|------------------------------------------------|:--------------------:|
| API information reflecting on locations popup  |   Integration test   |  
| Icon display filtering                         |   Integration test   |  
| Popup dialogue pops up when icon is clicked    |      Unit test       |  
| API information reflecting on details page     |      Unit test       |  


### 2.2.3 User Story 4

| **Item to Test**                       | **Test Description** |
|----------------------------------------|:--------------------:|
| Search bar functionality in navigation |   Integration test   |
| Display route on overview map          |   Integration test   |   
| Switching to live navigation mode      |   Integration test   |    
| Destination reached message            |   Integration test   |   

### 2.2.4 User Story 3

| **Item to Test**                                     | **Test Description** |
|------------------------------------------------------|:--------------------:|
| API data displayng list of locations with promotions |  Integration  test   |
| Routing to the location                              |   Integration test   |

### 2.2.5 User Story 5

| **Item to Test**                                          | **Test Description** |
|-----------------------------------------------------------|:--------------------:|
| API data displaying shops and restuarants with promotions |   Integration test   |
| Routing to the location                                   |   Integration test   |


### 2.2.6 User Story 6

| **Item to Test**                                           | **Test Description** |
|------------------------------------------------------------|:--------------------:|
| API data displaying all events( both current and upcoming) |   Integration test   |
| CLiking on an event to read the details of the event       |      unit test       |

### 2.2.7 User Story 7

| **Item to Test**                                              | **Test Description** |
|---------------------------------------------------------------|:--------------------:|
| API data displaying all events and locations within Walstraat |   Integration test   |
| CLiking on an event or location to read details about it      |      Unit test       |
| Routing to the location                                       |   Integration test   |
### 2.2.8 User Story 9

| **Item to Test**                                | **Test Description** |
|-------------------------------------------------|:--------------------:|
| Storing user location preference in database    |   Integration test   |
| Routing to the locations as per user preference |   Integration test   |

### 2.2.9 User Story 13

| **Item to Test**                      | **Test Description** |
|---------------------------------------|:--------------------:|
| Signing up                            |      Unit test       |          
| Login in                              |      Unit test       |          
| Storing user account data in database |      Unit test       |          

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

**A test pass** is when the expected results and the actual results. 
A **test fail**  is when the actual results do not match  the expected results.  

## 2.6. Test Entry / Exit Criteria

The tester begins testing the component immediately after it has been implemented. 
They may stop testing when the test passes at least 3 times for different scenarios depending on the parameters the test can take.
For example, an edge case can be done for components that expect the user to input the distance to travel.

## 2.7. Test Deliverables

At the end of the project, a test report containing the detailed test cases and test matrix will be delivered as separate documents.

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

## 4.1. Required Infrastructure

_[Describe the required infrastructure for test environment]_

## 4.2. Availability Plan

_[Describe the infrastructure availability plan]_

# 5. Test Schedule

## 5.1. Milestones and schedule

_[Describe the describe key milestones, deliverables, efforts, start date and end date]_

| **Milestone** | **Deliverable** | **Effort(Person Hour)** | **Start Date** | **End Date** |
|---------------|-----------------|-------------------------|----------------|--------------|
 |
 


**Appendix A: References**

_[Insert the name, version number, description, and physical location of any documents referenced in this document. Add rows to the table as necessary.]_

The following table summarizes the documents referenced in this document.

| **Document Name and Version** | **Description** | **Location** |
| --- | --- | --- |
| _\&lt;Document Name and Version Number\&gt;_ | _[Provide description of the document]_ | _\&lt;URL or Network path where document is located\&gt;_ |

**Appendix B: Key Terms**

_[Insert terms and definitions used in this document. Add rows to the table as necessary.]_

The following table provides definitions for terms relevant to this document.

| **Term** | **Definition** |
| --- | --- |
| _[Insert Term]_ | _[Provide definition of the term used in this document.]_ |
| _[Insert Term]_ | _[Provide definition of the term used in this document.]_ |
| _[Insert Term]_ | _[Provide definition of the term used in this document.]_ |

_[Insert appropriate Disclaimer(s)__]_