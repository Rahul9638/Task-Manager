document.getElementById('dataa').style.display = "none"
function saveTaskk() {
    var total_task = []
    const key = JSON.parse(localStorage.getItem("task"));
    // console.log(key);
    if (key != null) {
        for (let i = 0; i < key.length; i++) {
            total_task.push(key[i]);
        }
    }
    // console.log("The array is", total_task)
    const task = document.getElementById("task").value;
    const status = document.getElementById("status").value;
    const priority = document.getElementById("priority").value;
    const date = document.getElementById("date").value;

    // document.write("The current month is " + monthNames[d.getMonth()]);
    // console.log(monthNames[d.getMonth()], "/", month, "/", year)
    if (task != "" && status != "" && priority != "" && date != "") {
        total_task.push({ "task": task, "status": status, "priority": priority, "date": date })
    } else {
        window.alert("Please Enter Correct Data")
    }
    localStorage.setItem("task", JSON.stringify(total_task))
    clearAll()
}

function clearAll() {

    document.getElementById("task").value = '';
    document.getElementById("status").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("date").value = "";
}


function toShow() {


    const arr = []
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        // console.log(key)
        const tempData = JSON.parse(localStorage.getItem(key));
        for (let j = 0; j < tempData.length; j++) {
            // console.log(tempData[j])
            arr.push(tempData[j]);
        }
    }
    var tab = document.getElementById("res");
    var row = ``;
    arr.map((i, index) => {
        row += `<tr><td>${index + 1}</td><td>${i.task}</td><td>${i.status}</td><td>${i.priority}</td><td>${i.date}</td><td><a href="#" onclick="edit(${index})">Edit</a><br><a href="#" onclick="Delete(${index})">Delete</a></td></tr>`
    })

    document.getElementById("res").innerHTML = row
    // showUpdateTable();




}

// function showUpdateTable() {
//     document.getElementById("dataa").style.display = "none";
// }


// document.getElementById("dataa").style.display = "contents";
var ids;
function edit(index) {
    document.getElementById('dataa').style.display = "block"
    ids = index
    const key = JSON.parse(localStorage.getItem("task"))
    // console.log(key[index].task)

    document.getElementById('task').value = key[index].task;
    document.getElementById('status').value = key[index].status;
    document.getElementById('priority').value = key[index].priority;
    document.getElementById('date').value = key[index].date;

    document.getElementById('button').innerHTML = `<button id = "save" onclick = "updateTask()" > Update</button>`;




}
function updateTask() {
    const key = JSON.parse(localStorage.getItem("task"))
    var total_task = []

    key[ids].task = document.getElementById("task").value;
    key[ids].status = document.getElementById("status").value;
    key[ids].priority = document.getElementById("priority").value;
    key[ids].date = document.getElementById("date").value;

    localStorage.setItem("task", JSON.stringify(key))
    clearAll()
    location.reload()

}

function Delete(index) {

    alert("Are you sure want to delete")

    const key = JSON.parse(localStorage.getItem("task"))

    key.splice(index, 1)

    localStorage.setItem("task", JSON.stringify(key))
    location.reload()

}



function showDataToday() {
    // console.log("Today's date is")
    const key = JSON.parse(localStorage.getItem("task"))

    var row = ``

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = yyyy + '-' + mm + '-' + dd;

    console.log(today)




    for (let i = 0; i < key.length; i++) {
        if (key[i].date == today) {
            var index = i;
            row += `<tr><td>${i + 1}</td><td>${key[i].task}</td><td>${key[i].status}</td><td>${key[i].priority}</td><td>${key[i].date}</td><td><a href="#" onclick="edit1(${index})">Edit</a><br><a href="#" onclick="Delete(${index})">Delete</a></td></tr>`
        }
    }

    document.getElementById("res").innerHTML = row

}

var ids;
function edit1(index) {
    // document.getElementById('dataa').style.display = "block"
    ids = index
    const key = JSON.parse(localStorage.getItem("task"))
    // console.log(key[index].task)

    document.getElementById('task').value = key[index].task;
    document.getElementById('status').value = key[index].status;
    document.getElementById('priority').value = key[index].priority;
    document.getElementById('date').value = key[index].date;

    document.getElementById('button').innerHTML = `<button id = "save" onclick = "updateTask()" > Update</button>`;




}




