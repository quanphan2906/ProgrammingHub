// const
const X = "X";
const O = "O";
const NONE = "";
const GAME_OVER = "GAME OVER. The winner is ";
const CHOOSE_OTHER_CELL =
    "Please choose another cell. This cell has been ticked";

const winningCombos = [
    [
        [0, 0],
        [0, 1],
        [0, 2],
    ],
    [
        [1, 0],
        [1, 1],
        [1, 2],
    ],
    [
        [2, 0],
        [2, 1],
        [2, 2],
    ],
    [
        [0, 0],
        [1, 0],
        [2, 0],
    ],
    [
        [0, 1],
        [1, 1],
        [2, 1],
    ],
    [
        [0, 2],
        [1, 2],
        [2, 2],
    ],
    [
        [0, 0],
        [1, 1],
        [2, 2],
    ],
    [
        [0, 2],
        [1, 1],
        [2, 0],
    ],
];

// state
var map = [
    [NONE, NONE, NONE],
    [NONE, NONE, NONE],
    [NONE, NONE, NONE],
];
var currentPlayer = X;

// helper function
const checkIfOver = (map, currentPlayer) => {
    console.log(map);
    for (let combo of winningCombos) {
        let tickNum = 0;

        for (let cell of combo) {
            if (map[cell[0]][cell[1]] === currentPlayer) {
                tickNum += 1;
            }
        }

        if (tickNum === 3) {
            return true;
        }
    }

    return false;
};

const gameOver = (notiEle, winner) => {
    const notiLine = document.createElement("span");
    notiLine.innerText = GAME_OVER;
    // console.log(notiEle);

    const winnerEle = document.createElement("span");
    winnerEle.innerText = winner;
    winnerEle.style.color = winner === X ? "blue" : "red";

    notiEle.innerText = "";
    notiEle.appendChild(notiLine);
    notiEle.appendChild(winnerEle);
    console.log(notiEle.childNodes[0]);
};

// query
const cells = document.querySelectorAll("td");
const noti = document.getElementsByClassName("noti")[0];

// main
cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
        const location = cell.id.split("-");

        if (map[location[0]][location[1]] === NONE) {
            // state change
            map[location[0]][location[1]] = currentPlayer;

            // view change
            e.target.innerText = currentPlayer;

            // check if game over
            var isOver = checkIfOver(map, currentPlayer);

            if (isOver) {
                console.log("Yolo");
                console.log(noti);
                //BUG HERE: dont know why cannot change innerHTML or innerText at all
                noti.innerHTML = "Hello";
                noti.innerText = "Heloo";
            }

            // state change
            if (currentPlayer === X) {
                e.target.style.color = "blue";
                currentPlayer = O;
            } else {
                e.target.style.color = "red";
                currentPlayer = X;
            }

            noti.innerText = `It is player ${currentPlayer} turn`;
        } else {
            noti.innerText = CHOOSE_OTHER_CELL;
        }
    });
});
