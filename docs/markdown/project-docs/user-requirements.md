# User requirements for FindYourWayIn

## Introduction

The following requirements are for the FindYourWayIn web application.
All the requirements stated here were acquired through analysing the problem (Source = Analysis) and having an interview with the client (Source = Client meeting) for confirmation and adjustments.

The abbreviation MSCW means (MUST(M),SHOULD(S), COULD(C) and WOULD(W) ). 
These emphasise the priority of the user requirement: MUST being the greatest followed by SHOULD, COULD and WOULD are of the same priority.

## Requirements 

### Business requirements

| No  | Description                                                                                  | MSCW | Source         | Reference ID |
|-----|----------------------------------------------------------------------------------------------|:----:|----------------|:------------:|
| 1.  | Business wants the web application to provide the same information a tourist leaflet would   |  M   | Client meeting |     Bu01     |
| 2.  | Business wants the web application to be easily usable in other cities                       |  M   | Client meeting |     Bu02     |
| 3.  | Business wants the web application to be used by consumers of any age                        |  M   | Client meeting |     Bu03     |
| 4.  | Business wants the web application to help reduce the use of paper travel documents          |  M   | Client meeting |     Bu04     |
| 5.  | Business wants the web application to mainly help tourists and local entrepreneurs           |  M   | Client meeting |     Bu05     |

### User (Consumer) requirements

| No  | Description                                                                                                   | MSCW | Source         | Reference ID |
|-----|---------------------------------------------------------------------------------------------------------------|:----:|----------------|:------------:|
| 1.  | User wants to be able to view the navigation map                                                              |  M   | Client meeting |     Cu01     |
| 2.  | User wants to be able to read a description about the destination                                             |  M   | Client meeting |     Cu02     |
| 3.  | User wants to be able to see a list of destinations with promotions and discounts they can visit in Walstraat?|  M   | Client meeting |     Cu03     |
| 4.  | User wants to be able to get a route to the selected destination                                              |  M   | Client meeting |     Cu04     |
| 5.  | User wants to be able to see promotions offered by the shop or restaurant                                     |  M   | Client meeting |     Cu05     |
| 6.  | User wants to be able to view the overall agenda of Walstraat with all upcoming events                        |  M   | Client meeting |     Cu06     |
| 7.  | User wants the web application to let them discover events and locations within Walstraat                     |  M   | Client meeting |     Cu07     |
| 8.  | User wants to be able change the language to their preferences                                                |  M   | Client meeting |     Cu08     |
| 9.  | User wants to be able to search for a specific place according to their preferences                           |  M   | Client meeting |     Cu09     |
| 10. | User wants to be able to see an organisation in the spotlight                                                 |  S   | Analysis       |     Cu10     |
| 11. | User wants to be able to get a personalised route based on their preferences                                  |  S   | Analysis       |     Cu11     |
| 12. | User wants to be able to contact the organisation using their contact details                                 |  C   | Client meeting |     Cu12     |

## System requirements

### Functional requirements

| No  | Description                                                                              |  Source  | Reference ID |
|-----|------------------------------------------------------------------------------------------|:--------:|:------------:|
| 1.  | System can fetch data from API in realtime                                               | Analysis |     SF01     |
| 2.  | System can display map of Walstraat                                                      |   Cu01   |     SF02     |
| 3.  | System can display information about a selected location                                 |   Cu02   |     SF03     |
| 4.  | System can display a list of organisations in Walstraat with promotions and discounts    |   Cu03   |     SF04     |
| 5.  | System can create a direct route to the selected destination                             |   Cu04   |     SF05     |
| 6.  | System can display promotions offered by organisations in Walstraat                      |   Cu05   |     SF06     |
| 7.  | System can display an agenda of events in Walstraat to the user as well as their own     |   Cu06   |     SF07     |
| 8.  | System can display a "discover Walstraat" page and give the user recommended locations   |   Cu07   |     SF08     |
| 9.  | System can display a specific location based on the users search and preferences         |   Cu09   |     SF09     |
| 10. | System can generate a route based on the users preferences as to what they want to visit |   Cu11   |     SF10     |
| 11. | System can integrate call functionality with the users mobile device to make calls       |   Cu12   |     SF10     |

### Non-Functional requirements

| No  | Description                                                                            |     Source     | Reference ID |
|-----|----------------------------------------------------------------------------------------|:--------------:|:------------:|
| 1.  | System can work on mobile devices                                                      | Client meeting |    SNF01     |
| 2.  | System can support at least 3 languages                                                |      Cu08      |    SNF02     |
| 3.  | System can support multiple users connected at once                                    |    Analysis    |    SNF03     |
| 4.  | System can securely log in a customer using SSO                                        |    Analysis    |    SNF04     |
| 5.  | System can run 24/7                                                                    |    Analysis    |    SNF05     |
| 6.  | System can have a user friendly interface (UI/UX)                                      |    Analysis    |    SNF06     |
| 7.  | System can be maintained by third parties                                              |    Analysis    |    SNF07     |
