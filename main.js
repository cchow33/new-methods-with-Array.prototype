// This method that adds the word 'princess' in front of every person's name in the array

const princesses = ['Ariel', 'Cinderella', 'Jasmine', 'Belle']

Array.prototype.myForEach = function(){
    console.log('Meet the Disney princesses');
    for (let i = 0; i < princesses.length; i++){
        console.log(`My name is Princess ${princesses[i]}`)
    }
}

// const captains = ['Jack Sparrow', 'America', 'Kangaroo', 'Kirk', 'Crunch']

// for(let i = 0; i < captains.length; i++){
//     console.log(`Captain ${captains[i]}`);
// }

// With a map()
const famousCaptains = captains.map(function(person) {
    console.log('Meet the captains');
    console.log(`Captain ${captains[person]}`)
    // console.log(captains[person]);
})

