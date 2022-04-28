# User requirements for FindYourWayIn

## Introduction

The following requirements are for the FindYourWayIn web application.
All the requirements stated here were acquired through analysing the problem (Source = Analysis) and having an interview with the client (Source = Client meeting) for confirmation and adjustments.

The abbreviation MSCW means (MUST(M),SHOULD(S), COULD(C) and WOULD(W) ). 
These emphasise the priority of the user requirement: MUST being the greatest followed by SHOULD, COULD and WOULD are of the same priority.

## Requirements 

### Business requirements

| No  | Description                                                                         | MSCW | Source         | Reference ID |
|-----|-------------------------------------------------------------------------------------|:----:|----------------|:------------:|
| 1.  | Business wants the web application to be very informative                           |  M   | Client meeting |     Bu01     |
| 2.  | Business wants the web application to be easily expandable to larger maps           |  M   | Client meeting |     Bu02     |
| 3.  | Business wants the web application to be widely used by younger consumers           |  M   | Client meeting |     Bu03     |
| 4.  | Business wants the web application to help reduce the use of paper travel documents |  M   | Client meeting |     Bu04     |
| 5.  | Business wants the web application to mainly help tourists                          |  M   | Client meeting |     Bu05     |

### User (Consumer) requirements

| No  | Description                                                                         | MSCW | Source         | Reference ID |
|-----|-------------------------------------------------------------------------------------|:----:|----------------|:------------:|
| 1.  | User wants to be able to view the navigation map                                    |  M   | Client meeting |     Cu01     |
| 2.  | User wants to be able to read a description about the destination                   |  M   | Client meeting |     Cu02     |
| 3.  | User wants to be able to see a list of destinations they can visit in Walstraat     |  M   | Client meeting |     Cu03     |
| 4.  | User wants to be able to get a route to the selected destination                    |  M   | Client meeting |     Cu04     |
| 5.  | User wants to be able to see promotions offered by the shop or restaurant           |  M   | Client meeting |     Cu05     |
| 6.  | User wants to be able to view their agenda                                          |  M   | Client meeting |     Cu06     |
| 7.  | User wants the web application to let them discover all about Walstraat             |  M   | Client meeting |     Cu07     |
| 8.  | User wants to be able change the language to their preferences                      |  M   | Client meeting |     Cu08     |
| 9.  | User wants to be able to search for a specific place according to their preferences |  M   | Client meeting |     Cu09     |
| 10. | User wants to be able to call the restaurant                                        |  M   | Client meeting |     Cu10     |
| 11. | User wants to be able to give a review of the restaurant                            |  C   | Analysis       |     Cu11     |


## System requirements

### Functional requirements

| No  | Description                                                                            |  Source  | Reference ID |
|-----|----------------------------------------------------------------------------------------|:--------:|:------------:|
| 1.  | System can fetch data from mongo database in realtime                                  | Analysis |     SF01     |
| 2.  | System can display map of Walstraat                                                    |   Cu01   |     SF02     |
| 3.  | System can display information about a selected location                               |   Cu02   |     SF03     |
| 4.  | System can display a list of destinations in Walstraat                                 |   Cu03   |     SF04     |
| 5.  | System can create a direct route to the selected destination                           |   Cu04   |     SF05     |
| 6.  | System can display promotions offered by stores and restaurants in Walstraat           |   Cu05   |     SF06     |
| 7.  | System can display an agenda to the user                                               |   Cu06   |     SF07     |
| 7.  | System can display a "discover Walstraat" page and give the user recommended locations |   Cu07   |     SF08     |
| 8.  | System can display a specific location based on the users search and preferences       |   Cu09   |     SF09     |
| 9.  | System can integrate call functionality with the users mobile device to make calls     |   Cu10   |     SF10     |
| 10. | System can store and post a review made by the user who visited the location           |   Cu11   |     SF11     |

### Non-Functional requirements

| No  | Description                                                                            |     Source     | Reference ID |
|-----|----------------------------------------------------------------------------------------|:--------------:|:------------:|
| 1.  | System can work on mobile devices                                                      | Client meeting |    SNF01     |
| 2.  | System can support at least 8 languages                                                |      Cu08      |    SNF02     |
| 3.  | System can support multiple users connected at once                                    |    Analysis    |    SNF03     |
| 4.  | System can securely log in a customer using SSO                                        |    Analysis    |    SNF04     |
| 5.  | System can run 24/7                                                                    |    Analysis    |    SNF05     |
| 6.  | System can be very easy to use for a wide range of age groups                          |    Analysis    |    SNF06     |
| 7.  | System can easily be maintained by third parties                                       |    Analysis    |    SNF07     |
