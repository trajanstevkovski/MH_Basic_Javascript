$(document).ready(function () {
    //console.log("Connected with jQuery");

    let container = $("#container");
    let counert = 0;
    // $("input").on("click", function () {
    //     container.html(`<p>Some text part ${counert}</p>`);
    //     counert++;
    // });

    $("input").click(function () {
        container.html(`<p>Some text part ${counert}</p>`);
        counert++;
    });

    // 5 characters
    // min 1 number
    function validateInput(input) {
        if (input.length <= 5) {
            return {
                isValid: false,
                message: "Invalid input"
            }
        }

        let splitInput = input.split("");
        let isValidInput = false;
        for (let element of splitInput) {
            let parsedElement = parseInt(element);
            if (!Number.isNaN(parsedElement)) {
                isValidInput = true;
                break; // break will stop the iterations here.
            }
        }

        if (!isValidInput) {
            return {
                isValid: isValidInput,
                message: "Invalid input"
            };
        }
        return {
            isValid: true,
            message: ""
        }
    }

    $("#inputField").on("keyup", function (event) {
        let input = event.target.value;
        let isValidInput = validateInput(input);

        if (!isValidInput.isValid) {
            $("#msg").text(isValidInput.message);
        }
    });


});




// for (let i = 0; i < 100; i++) {
    //     if (i % 2 === 0) {
    //         continue;
    //     }

    //     console.log(i);
    //     if (i === 51) {
    //         break;
    //     }
    // }
