

_13/05/2022_

**VERSION HISTORY**


| **ID#**  | **Prepared****By**  | **Revision Date** | **Approved By** | **Approval Date** | **Reason**                  |
|----------|---------------------|-------------------|-----------------|-------------------|-----------------------------|
 | 1.0      | Craig Chauraya      | 16/05/2022        | Minh Pham       | 13/05/2022        | Test rules and descriptions |
 |



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

**<li>Acceptance test** - This is done by the client, we give them the program in its current state so that they may test and see if they like the way it behaves and its functionality.</li>

The test plan is seperated into user stories for easy tracking. User stories can be referred in the user stories <a href = "https://saxion-my.sharepoint.com/:w:/r/personal/495701_student_saxion_nl/Documents/Project_HBO-ICT/Requirements%20Engineering/User_Stories_FindYourWayIn.docx?d=w6dd2c310149640b4b819f0fd78ea1c3e&csf=1&web=1&e=5ER3vR" > here</a>

### 2.2.1 User Story 1 

| **Item to Test**                       | **Test Description** | **Test Date** | **Responsibility** | **Cu01-Bi##** |
|----------------------------------------|:--------------------:|---------------|--------------------|:-------------:|
 | Google map integration                 |      Unit test       |               |                    |     Bi01      |
 | Basic functionalities on map interface |   Integration test   |               |                    |     Bi02      |
 | UI components for navigation screen    |      Unit test       |               |                    |     Bi03      | 

### 2.2.2 User Story 2

| **Item to Test**                               | **Test Description** | **Test Date** | **Responsibility** | **Cu02-Bi##** |
|------------------------------------------------|:--------------------:|---------------|--------------------|:-------------:|
| Icon bound to a location                       |      Unit test       |               |                    |     Bi01      |
| API information reflecting on locations popup  |   Integration test   |               |                    |     Bi02      |
| Icon display filtering                         |   Integration test   |               |                    |     Bi03      | 
| Popup dialogue pops up when icon is clicked    |      Unit test       |               |                    |     Bi04      |

### 2.2.3 User Story 4

| **Item to Test**                       | **Test Description** | **Test Date** | **Responsibility** | **Cu04-Bi##** |
|----------------------------------------|:--------------------:|---------------|--------------------|:-------------:|
| Search bar functionality in navigation |   Integration test   |               |                    |     Bi01      |
| Display route on overview map          |   Integration test   |               |                    |     Bi02      |
| Switching to live navigation mode      |   Integration test   |               |                    |     Bi03      | 
| Destination reached message            |   Integration test   |               |                    |     Bi04      |


## 2.3. Items to be tested

Some items are not worth testing because they are simply static HTML pages that have no additional functionality besides routing to another page.

| **Item Not to Test**  | **User story ID#** | **Comment**                                                                             |
|-----------------------|:------------------:|-----------------------------------------------------------------------------------------|
 | Landing page          |         1          | Its just an HTML page that is shown upon opening the web application as an introduction |
 |


## 2.4. Test Approach(s)

## 2.5. Test Pass / Fail Criteria

**A test pass** is when the expected results and the actual results. A **test fail**  is when the actual results do not match  the expected results.  

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