/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap(){
  arr.map(function(arr){
     console.log(arr.profession);
  })
}

function PrintDeveloperbyForEach() {
  arr.forEach(function(arr){
     console.log(arr.profession);
  })
}

function addData() {
 let array = {id:4,name:"susan",age:"20",profession:"intern"}
 console.log(array);
 let arr1 = arr.concat(array)
 console.log(arr1);
}

function removeAdmin() {
  
}

function concatenateArray() {
  
  let arr2 = [
    { id: 4, name: "jo", age: "8", profession: "deve" },
    { id: 5, name: "ja", age: "2", profession: "de" },
    { id: 6, name: "ka", age: "9", profession: "ad" },
  ];
  
  let arr3 = arr.concat(...arr2)
  console.log(arr3);
}
