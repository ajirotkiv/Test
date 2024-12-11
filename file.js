const userInput = document.querySelector("#userInput");
const addButton = document.querySelector("addUser");
const userList = document.querySelector("userList");

const url = "https://testapi.io/api/Natalija/resource/UsersList";

function addUser() {
    const user = userInput.value.trim();
if (user) {
    createUserElement(user);
    userInput.value = "";
    saveUsers();
} else {
    alert('Please enter a user');
}
}
addButton.addEventListener('click', addUser);

function createUserElement(user) {
    const listItem = document.createElement('li');
    listItem.textContent = user;
    userList.appendChild(listItem);
}
]