
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
            row += `<tr><td>${i + 1}</td><td>${key[i].task}</td><td>${key[i].status}</td><td>${key[i].priority}</td><td>${key[i].date}</td><td><a href="#" onclick="edit(${index})">Edit</a><br><a href="#" onclick="Delete(${index})">Delete</a></td></tr>`
        }
    }

    document.getElementById("res").innerHTML = row

}

let Events = JSON.parse(localStorage.getItem("task"));
let myEvents = []

myEvents = Events.map((item, index) => {
    console.log(item)
    return {
        id: index,
        name: item.task,
        // badge: "08/03 - 08/05",
        date: item.date,
        description: item.status,
        color: changeColor(item),
        type: "event",
    }
})

// console.log(myEvents[0])
function changeColor(item) {

    if (item.status == "start") {
        return "red"


    }
    else if (item.status == "in-progress") {
        return "orange"
    } else {
        return "green"
    }

}

// Loading all the events in the list to show.
$('#evoCalendar').evoCalendar({

    calendarEvents: myEvents

});


// Custom setting the format of the date
$('#evoCalendar').evoCalendar({
    format: 'mm/dd/yyyy',
    titleFormat: 'MM yyyy',
    eventHeaderFormat: 'MM d, yyyy'
});


$('#evoCalendar').evoCalendar({
    sidebarToggler: false,
    sidebarDisplayDefault: false,
    eventListToggler: false,
    eventDisplayDefault: false,
});

// Highlighting today's date

$('#evoCalendar').evoCalendar({
    todayHighlight: false
});

// Determining the event occuring on the given date


$('#evoCalendar').evoCalendar({

    onSelectDate: function () {

        console.log('onSelectDate!')

    }

});