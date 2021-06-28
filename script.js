const date = new Date();

date.setDate(1);
console.log(date.getDate());


const firstDayIndex = date.getDate()


const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthDays = document.querySelector(".days");

const lastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
console.log(lastDay);

document.querySelector(".date h2").innerHTML = month[date.getMonth()];

document.querySelector(".date p").innerHTML = date.toDateString();

var days = "";

for (let x=firstDayIndex; x>0; x--){
    days += `<div class="prev-date">${</div>`
}
for (let i = 1; i <= lastDay; i++) {
  days += `<div>${i}</div>`;
  monthDays.innerHTML = days;
}
