const fruits = ["🍒", "🍓", "🍇", "🍎", "🍉", "🥥", "🫐"];
const fruitListElement = document.getElementById("fruitList");
const shoppingCartElement = document.getElementById("shoppingCart");
const amountElement = document.getElementById("amount");

let shoppingList = [];

for (let fruit of fruits) {
  const fruitElement = document.createElement("div");
  fruitElement.innerText = fruit;
  //access the style in css
  fruitElement.classList.add("fruit");
  fruitElement.onclick = addToShoppingList;
  fruitListElement.appendChild(fruitElement);
}

function addToShoppingList() {
  shoppingList.push(this.innerText);

  const cartElement = document.createElement("div");

  const spanElement = document.createElement("span");
  spanElement.innerText = this.innerText;
  cartElement.appendChild(spanElement);

  const button = document.createElement("button");
  button.innerText = "Remove";
  button.onclick = removeElement;
  cartElement.appendChild(button);

  shoppingCartElement.appendChild(cartElement);

  updateAmount();
}

function removeElement() {
  const element = this.parentNode;

  const fruitElement = element.querySelector("span");
  const emoji = fruitElement.innerText;
  const emojiIndex = shoppingList.indexOf(emoji);
  shoppingList.splice(emojiIndex, 1);

  //   element.parentNode.removeChild(element);
  // remove the child of the parent which is the element

  //this code is easier and could be done in this way. It will work the same.
  element.remove();

  updateAmount();
}

function updateAmount() {
  amountElement.innerText = "Items:" + shoppingList.length;
}
