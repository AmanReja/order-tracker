const tBody = document.querySelector("#tbody");
const name = document.querySelector("#name");
const contact = document.querySelector("#contact");
const address = document.querySelector("#address");
const add = document.querySelector("#add");
const order = document.querySelector("#order");

function addData() {
  var row = tBody.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  //   cell5.appendChild(row.index);

  cell1.innerHTML = name.value;
  cell2.innerHTML = order.value;
  cell3.innerHTML = contact.value;
  cell4.innerHTML = address.value;

  var button = document.createElement("button");
  var button2 = document.createElement("button");
  var button3 = document.createElement("button");

  button3.innerHTML = "Update Tracker";
  button3.className = "gBtn";

  button2.className = "gBtn";
  button2.id = "edit";
  button2.innerHTML = "Edit";

  button2.onclick = () => {
    name.value = cell1.innerHTML;
    contact.value = cell2.innerHTML;
    address.value = cell3.innerHTML;
    order.value = cell4.innerHTML;

    add.replaceWith(button3);
  };

  button3.addEventListener("click", () => {
    // name.value = cell1.innerHTML;
    // contact.value = cell2.innerHTML;
    // address.value = cell3.innerHTML;
    // order.value = cell4.innerHTML;

    if (name.value == "") {
      alert("Enter name");
    } else if (contact.value == "") {
      alert("Enter contact");
    } else if (address.value == "") {
      alert("Enter address");
    } else if (address.value == "") {
      alert("Enter address");
    } else if (order.value == "") {
      alert("Enter order");
    } else {
      button3.replaceWith(add);
      cell1.innerHTML = name.value;
      cell2.innerHTML = order.value;
      cell3.innerHTML = contact.value;
      cell4.innerHTML = address.value;

      name.value = "";
      contact.value = "";
      address.value = "";
      order.value = "";
    }
  });

  button.className = "gBtn";
  button.innerHTML = "Remove";

  cell5.appendChild(button);
  cell5.appendChild(button2);

  button.addEventListener("click", () => {
    // cell1.remove(cell1);
    // cell2.remove(cell2);
    // cell3.remove(cell3);
    row.remove();
  });
  name.value = "";
  contact.value = "";
  address.value = "";
  order.value = "";
}

// function saveData() {
//   localStorage.setItem("data", tBody.innerHTML);
// }

// function shoTask() {
//   tBody.innerHTML = localStorage.getItem("data");
// }

// shoTask();
