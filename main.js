// set data type
// properties
// - size

//Methods
// - add
// - delete
// - clear
// - has

let mydata = ['iam', 'mydata', 'mydata'];
for (let i = 0; i < mydata.length; i++) {
  console.log(mydata[i]);
}
console.log(mydata);
// the first char of Set should be capital
let unique = new Set(mydata);
// the set don't allow the repeted elements
console.log(unique);
// you can not access the elements in side the set with index
console.log(unique.size);
// the size is equal to the length in the array

console.log(unique.add('mydata'));

// console.log(unique.delete('iam'));

console.log(unique.has('mydata'));

unique.forEach((x) => console.log(x + 1));

// the Set and the WeakSet

/*
  data type
  - set can contain all data types
  - weakSet just stores the objects
  size
  - set has size
  - weakSet dont has size
  values + keys [alias for the values]
  - set has values and keys and entries 
  - weak set dont has clear , keys , values and entries
  forEach 
  - set can use foreach
  = weak set can not use foreach


  usage: store objects and removes them once they become inaccessible
*/

// type of data

let mySet = new Set([1, 2, 3, 4, 'A', 'samir hani']);
let myws = new WeakSet([{ A: 1, B: 2 }]);
console.log(mySet.entries());
console.log(myws);

console.log(mySet.size);

let iterator = mySet.keys();
console.log(iterator);
console.log(iterator.next());
console.log(iterator);
console.log(iterator.next());
console.log(iterator);
console.log(iterator.next());
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(mySet.keys());

/*
  - map data type
  syntax : new Map(Iterable with key/value)
  -
  -- map vs Object
  -
  ------ Map => don't contain key by default
  ------ object => has default keys
  -
  ------ map => key can be anyting [function , object ,any primitvie data types]
  ------ object => string or symbol
  -
  ------ Map => ordered by insertion
  ------ object => not 100% till now
  - 
  ------ Map => Get items by size
  ------ object => need to do manually 
  -
  ------ Map => can be directly iterated
  ------ object -> Not directly and need to use object.keys() and so on 
  -
  ------ Map => better performance when add or remove data
  ------ object => low performance when coparing to map

*/
let myObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

let emptyObj = Object.create(null); // this object dont have defualt keys exactly like the map

let myMap = new Map();
myMap.set('name', 'samir');
myMap.set('age', 30);
myMap.set('country', 'Eg');

console.log(myMap.get('name'));

console.log('#'.repeat(20));
console.log(Object.keys(myObject));
console.log('#'.repeat(20));
console.log(myMap.keys());
console.log('#'.repeat(20));
console.log(myObject);

let arr = ['samir', 'hani', 'ahmed ', 'ali'];
arr.sort();
console.log('#'.repeat(20));
console.log(arr);
console.log('#'.repeat(20));
