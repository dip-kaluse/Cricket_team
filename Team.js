let arr = [];
let dis = document.getElementById("disp");
let Nop = document.getElementById("nop");
let PName = document.getElementById("pName");
let Page = document.getElementById("Age");
let Pbat = document.getElementById("Batsman");
let Pbowl = document.getElementById("Bowler");
let Pwk = document.getElementById("Wicket Keeper");
let Pall = document.getElementById("All Rounder");
const Note = localStorage.getItem("note");
display(arr);
if (Note) {
  console.log(JSON.parse(Note));
  arr = JSON.parse(Note);
  display(arr);
}
const checkDuplicate = () => {
  let checkup = [];

  let result = PName.value.toLowerCase();
  checkup = arr.filter((obj) => obj.pName.toLowerCase() === result);
  if (checkup.length > 0) {
    alert("already added");
  } else {
    let ptype = arr2.toString();
    ptype = ptype.replaceAll(",", " ");
    arr2 = [];
    if (Page.value > 0) {
      let player = { pName: PName.value, type: ptype, age: Page.value };
      arr.push(player);
      localStorage.setItem("note", JSON.stringify(arr));
      alert("Player added");
    } else {
      alert("Age can not be below than 0");
    }
  }
};
let counter = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

let arr2 = [];
function batsman() {
  counter++;
  if (counter == 1) {
    arr2[0] = "batsman";
  } else {
    arr2.splice(0, 1);
    counter = 0;
  }
}
function bowler() {
  counter1++;
  if (counter1 == 1) {
    arr2[1] = "bowler";
  } else {
    arr2.splice(1, 1);
    counter1 = 0;
  }
}
function wk() {
  counter2++;
  if (counter2 == 1) {
    arr2[2] = "wicket keeper";
    console.log(arr[2]);
  } else {
    arr2.splice(2, 1);
    counter2 = 0;
  }
}
function alround() {
  counter3++;
  if (counter3 == 1) {
    arr2[3] = "all rounder";
    console.log(arr[3]);
  } else {
    arr2.splice(3, 1);
    counter3 = 0;
  }
}

function add() {
  Page.innerHTML = Page.value++;
}
function sub() {
  if (Page.value > 0) {
    Page.innerHTML = Page.value--;
  }
}
function checknull(params) {
  if (PName.value == []) {
    alert("Name is empty");
    return;
  }
  if (Page.value == []) {
    alert("age is empty");
    return;
  }
  if (counter == 0 || counter1 == 0 || counter2 == 0 || counter3 == 0) {
    alert("Please Select player type");
    return;
  }
  checkDuplicate();
}
function submit() {
  if (arr.length < 11) {
    checknull();
    display(arr);
  } else {
    alert("Player can not be added more than 11");
  }

  PName.value = "";
  Page.value = "";
  Pbowl.checked = false;
  Pbat.checked = false;
  Pwk.checked = false;
  Pall.checked = false;
}

function display(r) {
  if (arr.length === 0) {
    Nop.innerHTML = "No Player is added";
  } else {
    Nop.innerHTML = "";
    var a = `<table class="data">
    <tr>
      <table class="output">
        <tr>    
                <th>Sr.no</th>
                <th>Player Name</th>
                <th>Player Age</th>
                <th>Player Type</th>
        </tr>
        `;
    for (let i = 0; i < r.length; i++) {
      a += `   
        <tr>    <td>${i + 1}</td>
                <td>${r[i].pName}</td>
                <td>${r[i].age}</td>
                <td>${r[i].type}</td>
        </tr>        
        `;
    }
    a += `</table></tr></table>`;
    dis.innerHTML = a;
  }
}
