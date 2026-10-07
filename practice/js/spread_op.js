let arr = [1, 2, 3];
console.log(arr, typeof arr);

console.log(...arr);

let b = [...arr];
console.log(b, typeof b);

display(1,2,3,4,5);
function display(first, second, ...remaining){
	console.log(first);
	console.log(second);
  console.log(remaining);
}


// node practice/js/spread_op.js