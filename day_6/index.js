const ele = document.getElementById("companies");
const hello = document.getElementById("hello");

const button = document.getElementById("press-btn");
const youtube = document.getElementById("youtube");

function changeColor() {
    youtube.style.backgroundColor = "green";
}

function delColor(e) {
    youtube.style.backgroundColor = "white";
}

const color = "red";

// anonymous function
button.addEventListener("click", function (event) {
    event.target.innerHTML = "Yolo";
    hello.innerText = "Microsoft";
    hello.style.color = color;
    console.log("AAAAAAAAAAAAAA");
});

youtube.addEventListener("mouseover", changeColor);
youtube.addEventListener("mouseleave", delColor);

const form = document.getElementById("my-name");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log();
});

/* 
element = {
    addEventListener: function(event, function_user) {
        khi ma event happen:
            event = {
                target: ...
                vi tri click chuot:...
                timeline: ...
            }
            function_user(event)
    }
}

element.addEventListener("click", )

// click on button
event = { 
    target: ...,
    preventDefault: function() {

    }
}
event.preventDefault()
(event)

*/
