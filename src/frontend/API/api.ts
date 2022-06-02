function createNewLocation(res:any,i:any,label1:string, label2:any){
                     const newLocation = {
                    "category":[label1,label2],
                    "country": res.results[i].location.address.country,
                    "city": res.results[i].location.address.city,
                    "street": res.results[i].location.address.street,
                    "houseNumber": res.results[i].location.address.housenr,
                    "zipcode":res.results[i].location.address.zipcode,
                    "xcoordinate":res.results[i].location.address.gisCoordinates[0].xcoordinate,
                    "ycoordinate":res.results[i].location.address.gisCoordinates[0].ycoordinate
                }
                return newLocation
       }



async function getAllLocations(filteredList:any[]) {
        let res = new Object();
         await fetch("https://app.thefeedfactory.nl/api/locations", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer 0eebe5c7-cf95-4519-899b-59e1a78768c1`
                },
            }
        )
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    res=response.clone(); // made it to avoid problems with dowble consuming object
                    return response.json();
                }
            })
            .then(res => {

                for (let i = 0; i < res.size; i++) {
              
                    let location;

                    switch(res.results[i].trcItemCategories.types[0].categoryTranslations[0].label){
                     case "Shop":
                     location = createNewLocation(res,i,"shop",null)
                     break;

                     case "Eat/Drink":
                     location = createNewLocation(res,i,"cafe",null)    
                     break;

                     case "Culture":
                     location =  createNewLocation(res,i,"cafe",null)    
                     break;

                     case "Shop Eat/Drink":
                     location = createNewLocation(res,i,"shop","cafe")    
                     break;

                     case "Sport":
                     location =  createNewLocation(res,i,"sport",null)    
                     break;
                    }
                    
                    filteredList.push(location);
                }
                console.log(filteredList[0].category[0])
            })
            .catch(e => {
                console.log('There has been a problem with your fetch operation: ' + e.message);
            });

    }

     const allLocations:any[] = []

     getAllLocations(allLocations).then(data =>{
            return data;
    });

    function filterByCategory(allLocations:any[],searchedCategory:string){
        return allLocations.filter(function (currentElement){
            return currentElement.category.category1 === searchedCategory || currentElement.category.category2 === searchedCategory
        })
        
    }

    export { allLocations, filterByCategory }

  