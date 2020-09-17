// functions in JavaScript
// analogy of factory
// What?
// Why?

// declare that function --> define the function
function myDummyFunction(word, arr, person, anotherFunc) {
    // delegate tasks for this function
    console.log(word);
    for (ele of arr) {
        console.log(ele);
    }
    anotherFunc();
}

myDummyFunction(
    [1, 2, 3, 4],
    "Hello world",
    { name: "Quan", age: 17 },
    function () {
        console.log("hello world");
    }
);
// code gi day

myDummyFunction("Goodbye");

// call that function --> use that function
myDummyFunction("abd", 3, 5);
