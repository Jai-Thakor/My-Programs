// var show
show = 1;
console.log(show);
function show() {
  console.log("🤡");
}
show()
console.log(show);
//Without Declaring show the output will be 1 1
//Because of hoisting the value of show is 1