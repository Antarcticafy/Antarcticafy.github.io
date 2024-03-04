const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

square = document.getElementById("square");
display = document.getElementById("display");

setInterval(() => {
  pos = square.getBoundingClientRect();
  month = Math.floor((pos.x / (document.body.clientWidth - 100)) * 12 + 1);
  day = Math.floor(
    (pos.y / (document.body.clientHeight - 100)) * daysInMonth[month - 1] + 1
  );
  display.innerHTML = `${month}/${day}`;
}, 4);
