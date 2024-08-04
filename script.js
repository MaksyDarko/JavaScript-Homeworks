function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age > 18) {
      resolve("Age is greater than 18.");
    } else {
      reject("You are under age!");
    }
  });
}

checkAge(17)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

const endpoint = `https://66ae3c7eb18f3614e3b72155.mockapi.io/users/users`;

async function fetchUsers() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      alert("Network response was not ok");
    }
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

function displayUsers(users) {
  const usersList = document.getElementById("usersList");
  usersList.innerHTML = "";

  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${user.firstName}, Last Name: ${user.lastName}`;
    usersList.appendChild(listItem);
  });
}

fetchUsers();
