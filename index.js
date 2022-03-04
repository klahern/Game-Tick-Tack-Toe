// An array of the length 9
// The indexes of the cells are as follows
/*
    [ 0 ][ 1 ][ 2 ]
    [ 3 ][ 4 ][ 5 ]
    [ 6 ][ 7 ][ 8 ]
*/

let array = [...document.querySelectorAll(".col")]; // An array of HTMLElements

// An HTMLElement has properties on it that you've seen before
// e.g. element.innerHTML, element.setAttribute(), etc



let alternateClick = 0;
for (let i = 0; i < array.length; i++) {
    // let array = [HTMLElement,HTMLElement,HTMLElement,HTMLElement,HTMLElement,HTMLElement,HTMLElement,HTMLElement,HTMLElement]
    // indexes   =      0           1           2           3           4           5           6           7           8         
    // Create a variable that is equal to the element at the current index of the array
    let colElement = array[i];
    colElement.addEventListener("click", function () { // Requires 2 arguments... first is the "event", second is the function to call when the event is triggered

        // One thing that needs to happen, is alternateClick needs to be incremented

        if (colElement.innerHTML == "") {

            // alternateClick++;
            // is equivalent to
            alternateClick++;

            if (isEven(alternateClick)) {
                colElement.innerHTML = "X";
            }
            else {
                colElement.innerHTML = "O";
            }
            checkGameState();
        }


        // Next, innerHTML needs to be set based on the value of alternateClick
    });


    // 'grape' is an HTMLElement. The same thing as document.querySelector('blank') would give you.
    // This means it has an innerHTML property and others you're familiar with.

    // {EXERCISE 1}
    // Make the current element HTML have the index inside of it.
    // grape.innerHTML = "o";

    // {EXERCISE 2}
    // Within the context of the loop, make even indexed cells "X", and odd indexed cells "O"

    // if (isEven(i)) {
    //     colElement.innerHTML = "X";
    // }
    // else {
    //     colElement.innerHTML = "O";
    // }
}

let turnsLeft = 9;
function checkGameState() {
    turnsLeft--;


    let someoneWon = false;

    function checkWhoWon(arr1, arr2, arr3) {
        if (array[arr1].innerHTML == "X" && array[arr2].innerHTML == "X" && array[arr3].innerHTML == "X") {
            someoneWon = true;
            document.querySelector(".modal-body").innerHTML = "X wins!";

        }
        if (array[arr1].innerHTML == "O" && array[arr2].innerHTML == "O" && array[arr3].innerHTML == "O") {
            someoneWon = true;
            document.querySelector(".modal-body").innerHTML = "O wins!";

        }

    }
    checkWhoWon(0, 1, 2);
    checkWhoWon(3, 4, 5);
    checkWhoWon(6, 7, 8);
    checkWhoWon(0, 3, 6);
    checkWhoWon(1, 4, 7);
    checkWhoWon(2, 5, 8);
    checkWhoWon(0, 4, 8);
    checkWhoWon(6, 4, 2);


    if (turnsLeft == 0 && someoneWon == false) {
        document.querySelector(".modal-body").innerHTML = "It's a Tie!";
    }

    if (turnsLeft == 0 || someoneWon == true) {
        // Game is over, make the button go from display:none to display:block
        document.querySelector("#play-again-button").style.display = "block";
        document.querySelector(".game").style.pointerEvents = "none";
        $('#exampleModal').modal('show');

    };



}



// alert ("you win") or change innerHTML (add blank element to HTML)

// let array = [...document.querySelectorAll(".col")]; // An array of colElements

// if (array.every((item) => item.innerHTML != '')) {
//     document.querySelector("#play-again-button").style.display = "block";
// }


function resetGame() {
    // Everything clears

    for (let i = 0; i < array.length; i++) {
        let colElement = array[i];
        colElement.innerHTML = '';

    }

    // turnLeft and alternateClick need to be reset to their initial value

    //Make the reset button disappear again

    turnsLeft = 9;
    alternateClick = 0;
    document.querySelector("#play-again-button").style.display = "none";
    document.querySelector(".game").style.pointerEvents = "auto";

}
document.querySelector("#play-again-button").addEventListener("click", resetGame);

// document.querySelector("#play-again-button").addEventListener('click', () => {
//     turnsLeft = 9;
//     alternateClick = 0;
//     document.querySelectorAll(".col").forEach(col => col.innerHTML = "")
//     document.querySelector("#play-again-button").style.display = "none";
// });
/*
*   This function does exactly what is says. It really helps other people use your code.
*/
function isEven(num) {

    // num = 0  rem of num / 2 = 0
    // num = 1  rem of num / 2 = 1
    // num = 2  rem of num / 2 = 0
    // num = 3  rem of num / 2 = 1

    if (num % 2 == 0)
        return true;
    else
        return false;
}

/* 02/07/2022 Objective!!!!

    Create a click event for each .col element that sets it's innerHTML to an 'A'

*/


/* 02/10/2022 Objective!!!!

    Make it to where when you click on a cell that already has a letter, nothing happens
    Add a reset button

*/




























// document.querySelector("#play-again-button").addEventListener('click', () => {
//     turnsLeft = 9;
//     alternateClick = 0;
//     document.querySelectorAll(".col").forEach(col => col.innerHTML = "")
// })