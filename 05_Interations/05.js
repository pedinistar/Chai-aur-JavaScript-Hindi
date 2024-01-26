// Higher order function

const bts = ["rm","jin","jhope","suga","jimin","v","jk"]

bts.forEach( function(elem) { console.log(elem); })

bts.forEach( elem => { console.log(elem);} )


function printMe(item) {
  console.log(item + " " + "💜");
}

bts.forEach(printMe) 
// yahan pe printme function ka reference dena hai 
// printMe ko execute nhi karna tbhi meine "printMe()" nhi likha sirf printMe likha hai


bts.forEach( (item,index,fullArray) => {console.log(item,index,fullArray);} )



// ["","",""]
// [{},{},{}]


const anime = [
  {
    name:'levi',
    series: 'AOT'
  },
  {
    name:'nobara',
    series:'JK'
  },
]

anime.forEach( (item) => { console.log(item); } )

/*
{ name: 'levi', series: 'AOT' }
{ name: 'nobara', series: 'JK' }
*/


anime.forEach( (item) => { console.log(item.name); } )

/*
levi
nobara
*/


anime.forEach( (item) => { console.log(item.series); } )
/*
AOT
JK
*/