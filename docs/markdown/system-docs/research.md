# Research document

## Maps API research



### Multi-criteria analysis

#### Problem Analysis
##### Possible solutions

Our possible mapping/ routing API candidates are:
 - Google maps API
 - Mapbox

 The reasoning behind having these two API's as potential candidates is due to them being the leading API's in terms of popularity and community support. 

##### Criteria

 The map API we seek for should do the following:
  - display the maps (roads, buildings, street names, markers, other names)
  - support routing from point a to point b (and more points)
  - allow to create custom onClick events
  - adding new custom markers on the map
  - it should be affordable for the client
  - user friendliness and size of community
  - having additional tools


##### Comparison
 Although both API's have a lot to provide, they differ in performance in specific fields.

  Google Maps API is expensive in comparison to MapBox. However, Google Maps has a lot to offer. The main selling point for Google Maps 

  - how detailed the data is 
  - the additional features. 
  - community support
  
  1. When we created a map with MapBox we realised that not all shops were displayed already which means we would need to input all the data of the business' in the Walstraat ourselves in a dataset.

  2. As of today, the Google Maps platform provides all types of API's. Which include not only APIs specifically for the map itself but also geographical data such as timezones and distance matrix's that could possibly come in handy in the future.

  3. Although the official documentation for both API's are well organized and detailed, due to the popularity of Google Maps it is easier to find the requried help on online tutorials or engineering platforms such as StackOverFlow.
##### Scales
 
 According to the criterias, the following fields will used for the scaling.

 - Price
 - GUI
 - Routing
 - Custom events
 - Custom markers
 - Community support

 | Criterions | Google maps | MapBox |
| ---------- | ----------- | ------ |
| Price | high | low |
|  GUI | + | + |
| routing | + | + |
| custom events | + | + |
| custom markers | + | + |
| community support | + | - |



#### Outcome
