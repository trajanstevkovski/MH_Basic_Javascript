function Contact(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let myContacts = [];

let saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", function (event) {
    event.preventDefault(); 
    
    let firstNameInput = document.getElementById("fName").value;
    let lastNameInput = document.getElementById("lName").value;
    let ageInput = document.getElementById("age").value;

    let newContact = new Contact(firstNameInput, lastNameInput, ageInput);
    myContacts.push(newContact);
    console.log(myContacts);
});