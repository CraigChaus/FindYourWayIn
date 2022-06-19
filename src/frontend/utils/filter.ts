
import categories from '../CategorizationOntology-TheFeedFactory.json';


const iconMap = [
    { iconName: 'eat', category: ['Kleine horeca', 'Restaurants'] },
    { iconName: 'shop', category: ['Winkels'] },
    { iconName: 'attraction', category: ['Attracties'] },
    { iconName: 'entertainment', category: ['Uitgaan'] },
    { iconName: 'landscape', category: ['Bezienswaardigheden'] },
    { iconName: 'activity', category: ['Groepsarrangementen en activiteiten', 'Evenementen'] },
]
// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// const apiKey = process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY;
const results = new Set();
const resultsArray = [];
const categoriesRes = new Set();

function createNewLocation(xCoord: any, yCoord: any, category: any) {
    const newLocation = {
        xcoordinate: xCoord,
        ycoordinate: yCoord,
        category: category
    };
    return newLocation;
}
async function getCategories() {
    // fetch(`${apiUrl}/locations?size=34`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${apiKey}`
    //     }
    // })
    //     .then(response => { 
    //         return response.json();
    //     })
    const res1 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/locations`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY}`,
        },
    });
    const data1 = await res1.json();
    const hits = data1.hits;

    const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/locations?size=${hits}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY}`,
        },
    });

    const data = await res2.json()
            .then((locations: any) => {
            locations.results.map((location: any) => {
                location.trcItemCategories.types.map((type: any) => {
                    const result = type?.catid;
                    results.add(result);
                    resultsArray.push(result);
                });
            });
    
            results.forEach((el: any) => {
                for (let i = 0; i < categories.categorizations.length; i++) {
                    const categoryChild = categories.categorizations[i].child;
                    if (categoryChild === undefined) continue;
                    for (let j = 0; j < categoryChild.length; j++) {
                        if (el === categoryChild[j].cnetID) {
                            categoriesRes.add(categories.categorizations[i].cnetID);
                        }
                    }
                }
            });
        
        })
        .catch((err: any) => {    
            console.log(err);
        });
    }

getCategories().then(data => {
    return data;
});

function filterByCategory(filter: any, enhancedCategories: any): any[]  {
    const result: any[] = [];
    iconMap.forEach((icon: any) => {
        if (icon.iconName === filter) {
            for (const el of enhancedCategories) {
                if (icon.category.includes(el.categoryName)) {
                    result.push(el);
                }
            }
        }
    })
    return result;
}

export { iconMap, categoriesRes, filterByCategory, createNewLocation };
