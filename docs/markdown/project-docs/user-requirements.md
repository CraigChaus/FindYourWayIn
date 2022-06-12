# User requirements for FindYourWayIn

## Introduction

The following requirements are for the FindYourWayIn web application.
All the requirements stated here were acquired through analysing the problem (Source = Analysis) and having an interview with the client (Source = Client meeting) for confirmation and adjustments.

The abbreviation MSCW means (MUST(M),SHOULD(S), COULD(C) and WOULD(W) ). 
These emphasise the priority of the user requirement: MUST being the greatest followed by SHOULD, COULD and WOULD are of the same priority.

## Requirements 

### Business requirements

| Description                                                                                  | MSCW | Source         | Reference ID |
|----------------------------------------------------------------------------------------------|:----:|----------------|:------------:|
| Business wants the web application to provide the same information a tourist leaflet would   |  M   | Client meeting |     Bu01     |
| Business wants the web application to be easily usable in other cities                       |  M   | Client meeting |     Bu02     |
| Business wants the web application to be used by consumers of any age                        |  M   | Client meeting |     Bu03     |
| Business wants the web application to help reduce the use of paper travel documents          |  M   | Client meeting |     Bu04     |
| Business wants the web application to mainly help tourists and local entrepreneurs           |  M   | Client meeting |     Bu05     |

### User (Consumer) requirements

| Description                                                                                                   | MSCW | Source         | Reference ID |
|---------------------------------------------------------------------------------------------------------------|:----:|----------------|:------------:|
| User wants to be able to view the navigation map                                                              |  M   | Client meeting |     Cu01     |
| User wants to be able to read a description about the destination                                             |  M   | Client meeting |     Cu02     |
| User wants to be able to see a list of destinations with promotions and discounts they can visit in Walstraat?|  M   | Client meeting |     Cu03     |
| User wants to be able to get a route to the selected destination                                              |  M   | Client meeting |     Cu04     |
| User wants to be able to see promotions offered by the shop or restaurant                                     |  M   | Client meeting |     Cu05     |
| User wants to be able to view the overall agenda of Walstraat with all upcoming events                        |  M   | Client meeting |     Cu06     |
| User wants the web application to let them discover events and locations within Walstraat                     |  M   | Client meeting |     Cu07     |
| User wants to be able change the language to their preferences                                                |  M   | Client meeting |     Cu08     |
| User wants to be able to search for a specific place according to their preferences                           |  M   | Client meeting |     Cu09     |
| User wants to be able to see an organisation in the spotlight                                                 |  S   | Analysis       |     Cu10     |
| User wants to be able to get a personalised route based on their preferences                                  |  S   | Analysis       |     Cu11     |
| User wants to be able to contact the organisation using their contact details                                 |  C   | Client meeting |     Cu12     |
## System requirements

### Functional requirements

| Description                                                                              |  Source  | Reference ID |
|------------------------------------------------------------------------------------------|:--------:|:------------:|
| System can fetch data from API in realtime                                               | Analysis |     SF01     |
| System can display map of Walstraat                                                      |   Cu01   |     SF02     |
| System can display information about a selected location                                 |   Cu02   |     SF03     |
| System can display a list of organisations in Walstraat with promotions and discounts    |   Cu03   |     SF04     |
| System can create a direct route to the selected destination                             |   Cu04   |     SF05     |
| System can display promotions offered by organisations in Walstraat                      |   Cu05   |     SF06     |
| System can display an agenda of events in Walstraat to the user as well as their own     |   Cu06   |     SF07     |
| System can display a "discover Walstraat" page and give the user recommended locations   |   Cu07   |     SF08     |
| System can display a specific location based on the users search and preferences         |   Cu09   |     SF09     |
| System can generate a route based on the users preferences as to what they want to visit |   Cu11   |     SF10     |
| System can integrate call functionality with the users mobile device to make calls       |   Cu12   |     SF10     |

### Non-Functional requirements

| Description                                                                            |     Source     | Reference ID |   ISO 25010  Standart |
|----------------------------------------------------------------------------------------|:--------------:|:------------:|:---------------------:|
| System can work on mobile devices                                                      | Client meeting |    SNF01     |  Portability          |
| System can support Dutch, English and German                                           |      Cu08      |    SNF02     |  Usability            |
| System can support multiple users connected at once                                    |    Analysis    |    SNF03     | Performance Efficiency|
| System can securely encrypt user data and log in a user with authentication            |    Analysis    |    SNF04     |    Security           |
| System has an minimum uptime of 99%                                                    |    Analysis    |    SNF05     |    Reliability        |
| System can have a user friendly interface (UI/UX)                                      |    Analysis    |    SNF06     |    Usability          |
| System can be maintained by third parties                                              |    Analysis    |    SNF07     |     Maintainability   |
