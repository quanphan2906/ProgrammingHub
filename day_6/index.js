const ele = document.getElementById("companies");
const hello = document.getElementById("hello");

const button = document.getElementById("press-btn");
const youtube = document.getElementById("youtube");

function changeColor() {
    youtube.style.backgroundColor = "green";
}

function delColor() {
    youtube.style.backgroundColor = "white";
}

const color = "red";

// anonymous function
button.addEventListener("click", function () {
    hello.innerText = "Microsoft";
    hello.style.color = color;
    console.log("AAAAAAAAAAAAAA");
});

youtube.addEventListener("mouseover", changeColor);
youtube.addEventListener("mouseleave", delColor);

/* 
element = {
    addEventListener: function(event, function_user) {
        khi ma event happen:
            function_user()
    }
}

element.addEventListener("click", )

*/
