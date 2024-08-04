let listArray = [];

function addTask() {
  const newTask = document.getElementById("newTask").value;

  if (newTask) {
    listArray.unshift({ text: newTask, important: false });
    document.getElementById("newTask").value = "";
    updateList();
  } else {
    alert("Please fill up the input field!");
  }
}

function updateList(filteredArray = listArray) {
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";

  filteredArray.forEach((task, index) => {
    let listedItem = document.createElement("li");
    listedItem.innerHTML = `
      ${task.text}
      <div class="edit-buttons">
        <button onclick="editItem(${index})" class="edit-btn">Edit</button>
        <button onclick="deleteItem(${index})" class="delete-btn">Delete</button>
        <button onclick="toggleImportant(${index})" class="important-btn">${
      task.important ? "Unmark" : "Mark"
    } as Important</button>
      </div>
    `;
    if (task.important) {
      listedItem.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    }
    itemList.appendChild(listedItem);
  });
}

function deleteItem(index) {
  listArray.splice(index, 1);
  updateList();
}

function editItem(index) {
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";

  listArray.forEach((task, i) => {
    let listedItem = document.createElement("li");
    listedItem.classList.add("list-item");
    if (index === i) {
      listedItem.innerHTML = `
        <input type="text" id="editInput-${i}" value="${task.text}" class="edit-input">
        <div class="edit-buttons">
          <button class="edit-btn" onclick="saveEdit(${i})">Save</button>
          <button class="delete-btn" onclick="deleteItem(${i})">Delete</button>
        </div>
      `;
    } else {
      listedItem.innerHTML = `
        ${task.text}
        <div class="edit-buttons">
          <button class="edit-btn" onclick="editItem(${i})">Edit</button>
          <button class="delete-btn" onclick="deleteItem(${i})">Delete</button>
        </div>
      `;
    }
    itemList.appendChild(listedItem);
  });
}

function saveEdit(index) {
  const editedValue = document.getElementById(`editInput-${index}`).value;
  if (editedValue) {
    listArray[index].text = editedValue;
    updateList();
  } else {
    alert("Fill up the input field!");
  }
}

function toggleImportant(index) {
  const task = listArray[index];
  task.important = !task.important;
  if (task.important) {
    listArray.splice(index, 1);
    listArray.unshift(task);
  }
  updateList();
}

function filterTasks() {
  const filterInput = document
    .getElementById("filterInput")
    .value.trim()
    .toLowerCase();
  const filteredArray = listArray.filter((task) =>
    task.text.toLowerCase().includes(filterInput)
  );
  updateList(filteredArray);
}

updateList();
