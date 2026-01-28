const button = document.querySelector(".submit");
const result = document.querySelector(".result");
const input = document.querySelector(".input")

button.addEventListener("click", () => {
  const values = input.value; 
  if (!values) {
    result.innerHTML = "Please enter some numbers!";
    return;
  }

  const ropes = values.split(",").map(num => parseInt(num.trim()));

  if (ropes.some(isNaN)) {
    result.innerHTML = "Invalid input! Please enter numbers only.";
    return;
  }
  const cost = minCost(ropes);
  result.innerHTML = `Minimum cost to connect ropes: ${cost}`;
});
function minCost(arr) {
  arr.sort((a, b) => a - b);

  let cost = 0;

  while (arr.length > 1) {
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;
    arr.push(sum);
    arr.sort((a, b) => a - b); 
  }

  return cost;
}

console.log(minCost([4, 3, 2, 6])); 
console.log(minCost([1, 2, 3, 4, 5]));




module.exports=mincost;
