// var myArray = [1, 7, 15, 2]

// myArray.map(function(el){
// 	// console.log(el)
// 	return el * 2 
// })
// console.log(myArray)
// // console.log(result)

// var underscoreResult = _.map(myArray, function(el){
// 	return el * 2
// })

// console.log(underscoreResult)

// _.reduce
// Start: "Read the F'in Documentation"
// // Goal : "R.T.F.D"
// var gString ="Read the F'in Documentation"
// var reduceResults =_.reduce(gString.split (" "), function(acronymSoFar, word){
// console.log(word, acronymSoFar)
// return acronymSoFar += word[0].toUpperCase() + "."
// },
// 	""
// 	)
// console.log(reduceResults)
// _.find
var tubers = [
{
	name: "Sweet Potatoes",
	colors: ["orange", "Navajowhite", "Purple", "Burlywood"]
},
{	name: "Peruvian Blue Potatoes", 
	colors: ["purple", "red", "Peruvian Blue"]
},
{	name: "purple Fingerling Potatoes",
	colors: ["purple", "Navajowhite", "Black", "Goldenrod"]
	},
]

// var colors = _.filter(tubers, function(currentTuber){ return currentTuber.color === "purple"});


// console.log(colors)

_.chain(tubers).pluck("colors")