// Selecting form elements
const form = document.getElementById("formGarden");
const nameInput = document.getElementById("nameInp");
const imgSelect = document.getElementById("selImg");
const seasonInput = document.getElementById("sesonInp");
const clearButton = document.getElementById("clerLis");
const tableBody = document.getElementById("bodCon");

let gardenList = JSON.parse(localStorage.getItem("gardenList")) || [];

// Function to render the table
function renderTable() {
  tableBody.innerHTML = "";
  gardenList.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.name}</td>
      <td><img src="./${item.image}.jpg" width="80px"alt=""></td>
      <td>${item.season}</td>
      <td>
        <button class="editBtn" data-index="${index}">Edit</button>
        <button class="deleteBtn" data-index="${index}">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// Function to add or edit item
function addItem(e) {
  e.preventDefault();
  const name = nameInput.value;
  const image = imgSelect.value;
  const season = seasonInput.value;

  const editedIndex = form.getAttribute("data-edit-index");

  if (editedIndex !== null) {
    gardenList[editedIndex] = { name, image, season };
    form.removeAttribute("data-edit-index");
  } else {
    gardenList.push({ name, image, season });
  }

  localStorage.setItem("gardenList", JSON.stringify(gardenList));
  renderTable();
  form.reset();
}

// Function to handle edit
function editItem(index) {
  const item = gardenList[index];
  nameInput.value = item.name;
  imgSelect.value = item.image;
  seasonInput.value = item.season;
  form.setAttribute("data-edit-index", index);
}

// Function to handle delete
function deleteItem(index) {
  gardenList.splice(index, 1);
  localStorage.setItem("gardenList", JSON.stringify(gardenList));
  renderTable();
}

// Event listener for form submission
form.addEventListener("submit", addItem);

// Event listener for clear button
clearButton.addEventListener("click", () => {
  gardenList = [];
  localStorage.removeItem("gardenList");
  renderTable();
});

// Event listener for edit and delete buttons
tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("editBtn")) {
    const index = e.target.getAttribute("data-index");
    editItem(index);
  } else if (e.target.classList.contains("deleteBtn")) {
    const index = e.target.getAttribute("data-index");
    deleteItem(index);
  }
});

// Initial render
renderTable();
