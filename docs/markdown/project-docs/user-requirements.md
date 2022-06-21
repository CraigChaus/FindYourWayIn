# User requirements for FindYourWayIn

## Introduction

The following requirements are for the FindYourWayIn web application.
All the requirements stated here were acquired through analysing the problem (Source = Analysis) and having an interview with the client (Source = Client meeting) for confirmation and adjustments.

The abbreviation MSCW means (MUST(M),SHOULD(S), COULD(C) and WOULD(W) ). 
These emphasise the priority of the user requirement: MUST being the greatest followed by SHOULD, COULD and WOULD are of the same priority.

## Requirements 
_In this section you can see the requirements. To see when/where or how each requirement was acquired please go to docs/pdf/project-docs/functional design_.
### Business requirements

 | Reference ID | Description                                                                                | MSCW | Source         |
 |:------------:|--------------------------------------------------------------------------------------------|:----:|----------------|
 |     Bu01     | Business wants the web application to provide the same information a tourist leaflet would |  M   | Client meeting |
 |     Bu02     | Business wants the web application to be easily usable in other cities                     |  M   | Client meeting |
 |     Bu03     | Business wants the web application to be used by consumers of any age                      |  M   | Client meeting |
 |     Bu04     | Business wants the web application to help reduce the use of paper travel documents        |  M   | Client meeting |
 |     Bu05     | Business wants the web application to mainly help tourists and local entrepreneurs         |  M   | Client meeting |

### User (Consumer) requirements

  | Reference ID | Description                                                                                                    | MSCW | Source         |
  |:------------:|----------------------------------------------------------------------------------------------------------------|:----:|----------------|
  |     Cu01     | User wants to be able to view the navigation map                                                               |  M   | Client meeting |
  |     Cu02     | User wants to be able to read a description about the destination                                              |  M   | Client meeting |
  |     Cu03     | User wants to be able to see a list of destinations with promotions and discounts they can visit in Walstraat? |  M   | Client meeting |
  |     Cu04     | User wants to be able to get a route to the selected destination                                               |  M   | Client meeting |
  |     Cu05     | User wants to be able to see promotions offered by the shop or restaurant                                      |  M   | Client meeting |
  |     Cu06     | User wants to be able to view the overall agenda of Walstraat with all upcoming events                         |  M   | Client meeting |
  |     Cu07     | User wants the web application to let them discover events and locations within Walstraat                      |  M   | Client meeting |
  |     Cu08     | User wants to be able change the language to their preferences                                                 |  M   | Client meeting |
  |     Cu09     | User wants to be able to search for a specific place according to their preferences                            |  M   | Client meeting |
  |     Cu10     | User wants to be able to see an organisation in the spotlight                                                  |  S   | Analysis       |
  |     Cu11     | User wants to be able to get a personalised route based on their preferences                                   |  S   | Analysis       |
  |     Cu12     | User wants to be able to contact the organisation using their contact details                                  |  C   | Client meeting |
  |     Cu13     | User wants to be able to filter locations based on category                                                    |  S   | Client meeting |

## System requirements

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


### Non-Functional requirements

   | Reference ID | Description                                                                                                   |     Source     |  ISO 25010  Standart   |
   |:------------:|---------------------------------------------------------------------------------------------------------------|:--------------:|:----------------------:|
   |    SNF01     | System can work on mobile devices                                                                             | Client meeting |      Portability       |
   |    SNF02     | System can support Dutch, English and German                                                                  |      Cu08      |       Usability        |
   |    SNF03     | System can support multiple users connected at once                                                           |    Analysis    | Performance Efficiency |
   |    SNF04     | System can securely encrypt user data and log in a user with authentication                                   |    Analysis    |        Security        |
   |    SNF05     | System has a minimum uptime of 99%                                                                            |    Analysis    |      Reliability       |
   |    SNF06     | System is easy to naviagate through and is aesthetic with its consistent color scheme                         |    Analysis    |       Usability        |
   |    SNF07     | System can be handed over to a third party (Such as a new developer team)  with source code and documentation |    Analysis    |    Maintainability     |


## Requirement Source and Details

Most business and user requirements were acquired during the first meeting with the client. In the first meeting, the client explained what they wanted to accomplish with the future product and how they wanted it to be.  

 “*” = 25 April First Client Meeting, TheFeedFactory Company, Walstraat-Deventer 

 ### Business Requirement Source Details
 
| Referance ID | Requirement Description                                                                    | Source Details |      Attendants     |  
|--------------|--------------------------------------------------------------------------------------------|----------------|---------------------|
| Bu01         | Business wants the web application to provide the same information a tourist leaflet would |       *        |  Nils, Arne, Smart Solutions Students, HBO-ICT Group                   |           
| Bu02         | Business wants the web application to be easily usable in other cities.                    |       *        |   Nils, Arne, Smart Solutions Students, HBO-ICT Group                  |
| Bu03         | Business wants web application to be used by consumers of any age.                         |       *        |  Nils, Arne, Smart Solutions Students, HBO-ICT Group                   |
| Bu04         | Business wants web application to help reduce the use of paper travel documents.           |       *        | Nils, Arne, Smart Solutions Students, HBO-ICT Group                    |
| Bu05         | Business wants web application to mainly help tourists and local entrepreneurs.            |       *        |  Nils, Arne, Smart Solutions Students, HBO-ICT Group                   |



### User Requirement Source Details
| Referance ID | Requirement Description                                                                                            | Source Details                                                     | Attendants                                          |
|--------------|--------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|-----------------------------------------------------|
| Cu01         | The user wants to be able to view the navigation map.                                                              |                                     *                              | Nils, Arne, Smart Solutions Students, HBO-ICT Group |
| Cu02         | The user wants to be able to read a description of the destination.                                                |                                     *                              | Nils, Arne, Smart Solutions Students, HBO-ICT Group |
| Cu03         | The user wants to be able to see a list of destinations with promotions and discounts they can visit in Walstraat. |                                     *                              | Nils, Arne, Smart Solutions Students, HBO-ICT Group |
| Cu04         | The user wants to be able to get a route to the selected destination.                                              |                                     *                              | Nils, Arne, Smart Solutions Students, HBO-ICT Group |
| Cu05         | The user wants to be able to see promotions offered by the shop or restaurant.                                     |                                     *                              | Nils, Arne, Smart Solutions Students, HBO-ICT Group |
| Cu06         | The user wants to view the overall agenda of Walstraat with all upcoming events.                                   |                                     *                              | Nils, Arne, Smart Solutions Students, HBO-ICT Group |
| Cu07         | The user wants the web application to let them discover events and locations within Walstraat.                     |                                     *                              | Nils, Arne, Smart Solutions Students, HBO-ICT Group |
| Cu08         | The user wants to be able to change the language to their preferences.                                             |                                     *                              | Nils, Arne, Smart Solutions Students, HBO-ICT Group |
| Cu09         | The user wants to be able to search for a specific place according to their preferences.                           |                                     *                              | Nils, Arne, Smart Solutions Students, HBO-ICT Group |
| Cu10         | The user wants to be able to see an organization in the spotlight                                                  | May 2, Client & Smart Solutions Students Meeting, Saxion, Deventer | Nils, Smart Solutions Students, HBO-ICT Group       |
| Cu11         | The user wants to be able to get a personalized route based on their preferences.                                  | May 2, Client & Smart Solutions Students Meeting, Saxion, Deventer | Nils, Smart Solutions Students, HBO-ICT Group       |
| Cu12         | The user wants to be able to contact the organization using their contact details.                                 |                                     *                              | Nils, Arne, Smart Solutions Students, HBO-ICT Group |
| Cu13         | User wants to be able to filter locations based on category                                                        |                                     *                              | Nils, Arne, Smart Solutions Students, HBO-ICT Group |


### Non Functional Requirement Details

| Referance ID | Requirement Description                                                                                      | Source Details                                                                              |
|--------------|--------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| SNF01        | System can work on mobile devices                                                                            |  *                                                                                          |
| SNF02        | System can support Dutch, English, German                                                                    | 9 May, Client and 3S Students Meeting, Saxion, Deventer                                     |
| SNF03        | System can support multiple users connected at once                                                          | *                                                                                           |
| SNF04        | System can securely encrypt user data and log in a user with authentication                                  | 6 May, Client Meeting, Saxion, Deventer + EU GDPR                                           |
| SNF05        | System has an uptime of 99%                                                                                  | Analysis: Events can occur at any time, which means the system shouldn’t have much downtime |
| SNF06        | System is easy to navigate through and is aesthetic with its consistent colour scheme                        | Analysis: Based on wireframes from the Smart Solution Students                              |
| SNF07        | System can be handed over to a third party (Such as a new developer team) with source code and documentation | Analysis: Client said they want to expand the app in the future in the first meeting        |


