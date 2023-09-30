const itemsByClass = document.getElementsByClassName("item");
// console.log(itemsByClass.length); // Output: 2
const itemsByQuery = document.querySelectorAll('.item');
//   console.log(itemsByQuery.length); // Output: 3

const newItem = document.createElement('div');
newItem.className = 'item';
newItem.textContent = 'item-3';
document.body.appendChild(newItem);

// console.log(itemsByClass);//it is live
// console.log(itemsByQuery);//so it is static

// console.log(itemsByClass[0]);
// console.log(itemsByQuery[0]);
// console.log(itemsByClass[0].append(newItem));
console.log(NodeList.length);
// console.log(itemsByQuery[1].i);