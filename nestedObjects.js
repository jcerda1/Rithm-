var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};


// // Now let's try to write some functions that operate on this nested data structure. 
// // The answers are below - but try to do these on your own first!

// // Exercises
// // Write a function called displayCities that console.logs all the values in the citiesLivedIn array:
var cities = instructorData.additionalData.moreDetails.citiesLivedIn;

function displayCities() {
  for(var i = 0; i < cities.length; i++) {
    console.log(cities[i]);
  }
}

displayCities();

// // "Seattle"
// // "Providence"
// // "New York"


// // Write a function called displayHometownData 
// // that console.logs all the values inside of the hometown object
var homeTown = instructorData.additionalData.moreDetails.hometown;

function displayHometownData() {
  for(var key in homeTown) {
    console.log(homeTown[key])
  }
}

displayHometownData();

// // "West Orange"
// // "NJ"


// Let's write a function called addDetail that accepts two parameters, 
// a key and a value and adds the key and value to the moreDetails 
//object and returns the moreDetails object

var more = instructorData.additionalData.moreDetails;


function addDetail(key,value) {
  more[key] = value;
    return more;
}

addDetail("isHilarious", true);
// /*
// {
//     favoriteBasketballTeam: "New York Knicks",
//     numberOfSiblings: 3,
//     isYoungest: true,
//     hometown: {
//         city: "West Orange",
//         state: "NJ",
//     },
//     citiesLivedIn: ["Seattle", "Providence", "New York"],
//     isHilarious: true
// }
// */
console.log(addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]));
// /*
// {
//     favoriteBasketballTeam: "New York Knicks",
//     numberOfSiblings: 3,
//     isYoungest: true,
//     hometown: {
//         city: "West Orange",
//         state: "NJ",
//     },
//     citiesLivedIn: ["Seattle", "Providence", "New York"],
//     isHilarious: true
//     previousApartments: ["Mission", "North Beach", "Nob Hill"]
// }
// */

// Finally, let's write a function called removeDetail that removes 
// a key in the moreDetails object and returns the moreDetails object 
//(the new keys added above are not included in these examples).

function removeDetail(key){
  var valueToBeRemoved = more[key];
    delete more[key];
    return more;
}
console.log(removeDetail('citiesLivedIn'));
// /*
// {
//     favoriteBasketballTeam: "New York Knicks",
//     numberOfSiblings: 3,
//     isYoungest: true,
//     hometown: {
//         city: "West Orange",
//         state: "NJ",
//     }
// }
// */
console.log(removeDetail('hometown'));
// /*
// {
//     favoriteBasketballTeam: "New York Knicks",
//     numberOfSiblings: 3,
//     isYoungest: true
// }
// */
console.log(removeDetail('favoriteBasketballTeam'));
// /*
// {
//     numberOfSiblings: 3,
//     isYoungest: true
// }
// */
