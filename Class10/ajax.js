let json = {
    "trainer": "Trajan Stevkovksi",
    "course": "Javascript basic",
    "students": [
        "Bob Bobski",
        "Pero Perovski"
    ]
}
// console.log(json);
// let jsonString = JSON.stringify(json);
// console.log(jsonString);

// let parsedJson = JSON.parse(jsonString);
// console.log(parsedJson);

$.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    success: function (data) {
        console.log(data);
    },
    error: function (error) {
        console.log(error);
    }
});

$("#get-data").on("click", function () {
    let id = $("#user-id").val();
    console.log(id);
    getUserById(id);
});

let users = [];

function User(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;

    this.getInfo = function () {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}

function getUserById(id) {
    let url = `https://jsonplaceholder.typicode.com/users/${id}`;
    $.ajax({
        url: url,
        //synchonous: true,
        success: function (data) {
            let user = new User(data.id, data.name, data.email, data.phone);
            printInfo(user);
        },
        error: function (error) {
            if (error.status === 404) {
                alert("User not found");
            }
        }
    });
}

function printInfo(info) {
    $("#show-data").text(info.getInfo());
}

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err));

fetch(`https://jsonplaceholder.typicode.com/users/3`)
    .then(response => response.json())
    .then(data => {
        let user = new User(data.id, data.name, data.email, data.phone);
        printInfo(user);
    })
    .catch(err => console.log(err));