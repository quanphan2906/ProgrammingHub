// CONSTANT
const X = "X";
const O = "O";
const NONE = "";

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

// STATE
var currentPlayer = X;

var map = [
    [NONE, NONE, NONE],
    [NONE, NONE, NONE],
    [NONE, NONE, NONE],
];

// HELPER FUNCTIONS
function checkIfOver(currentPlayer) {
    for (combo of winningCombos) {
        let count = 0;

        for (coor of combo) {
            if (map[coor[0]][coor[1]] === currentPlayer) {
                count += 1;
            }
        }

        if (count === 3) {
            return true;
        }
    }

    // hello world
    return false;
}

// VIEW
const cells = document.getElementsByTagName("td");
for (cell of cells) {
    cell.addEventListener("click", function (e) {
        const cellId = e.target.id;
        const x_coor = cellId[0];
        const y_coor = cellId[2];
        // TODO: notification that you cannot re-click
        if (map[x_coor][y_coor] === NONE) {
            // UPDATE MAP
            map[x_coor][y_coor] = currentPlayer;

            // UPDATE UI
            e.target.innerText = currentPlayer;
            if (currentPlayer === X) {
                currentPlayer = O;
            } else {
                currentPlayer = X;
            }
        } else {
            // bao loi --> khong the re-click
        }

        //const isOver = checkIfOver(currentPlayer)
        // if (isOver) --> notify people -->
        // click cell, khong cho click nua --> Gameover
    });
}
