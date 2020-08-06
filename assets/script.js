$(currentDay).text(moment().format("MMMM Do, YYYY"));

let planner = [
  {
    id: "0",
    hour: "9",
    time: "09",
    meridiem: "am",
    reminder: "",
  },
  {
    id: "1",
    hour: "10",
    time: "10",
    meridiem: "am",
    reminder: "",
  },
  {
    id: "2",
    hour: "11",
    time: "11",
    meridiem: "am",
    reminder: "",
  },
  {
    id: "3",
    hour: "12",
    time: "12",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "4",
    hour: "1",
    time: "13",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "5",
    hour: "2",
    time: "14",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "6",
    hour: "3",
    time: "15",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "7",
    hour: "4",
    time: "16",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "8",
    hour: "5",
    time: "17",
    meridiem: "pm",
    reminder: "",
  },
];

function saveR() {
  localStorage.setItem("planner", JSON.stringify(planner));
}

function displayR() {
  planner.forEach(function (_thisHour) {
    $(`#${_thisHour.id}`).val(_thisHour.reminder);
  });
}

function startPlanner() {
  let storedDay = JSON.parse(localStorage.getItem("planner"));

  if (storedDay) {
    planner = storedDay;
  }
  saveR();
  displayR();
}

planner.forEach(function (thisHour) {
  let hourRow = $("<form>").attr({
    class: "row",
  });
  $(".container").append(hourRow);

  let hourField = $("<div>").text(`${thisHour.hour}${thisHour.meridiem}`).attr({
    class: "col-md-2 hour",
  });

  let hourPlan = $("<div>").attr({
    class: "col-md-9 description p-0",
  });

  let planData = $("<textarea>");
  hourPlan.append(planData);
  planData.attr("id", thisHour.id);
  if (thisHour.time < moment().format("HH")) {
    planData.attr({
      class: "past",
    });
  } else if (thisHour.time === moment().format("HH")) {
    planData.attr({
      class: "present",
    });
  } else if (thisHour.time > moment().format("HH")) {
    planData.attr({
      class: "future",
    });
  }

  let saveButton = $("<i class='far fa-save fa-lg'></i>");
  let savePlan = $("<button>").attr({
    class: "col-md-1 saveBtn",
  });
  savePlan.append(saveButton);
  hourRow.append(hourField, hourPlan, savePlan);
});

startPlanner();

$(".saveBtn").on("click", function () {
  event.preventDefault();
  console.log("saved");
  console.log(localStorage);
});
