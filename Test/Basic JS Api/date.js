const currentDate = new Date();

console.log("Current date & Time zone: ", currentDate); // Gives your current date & time zone

console.log("Date: ", currentDate.getDate()); // Gives you current date
console.log("Month: ", currentDate.getMonth() + 1); // Gives you current month
console.log("Year: ", currentDate.getFullYear()); // Gives you current year

console.log("Hours: ", currentDate.getHours()); // Gives you current hour
console.log("Minutes: ", currentDate.getMinutes()); // Gives you current minute
console.log("Seconds: ", currentDate.getSeconds()); // Gives you current second

console.log("Time in ms since 1970: ", currentDate.getTime());

currentDate.setFullYear(1999); // Setting components of the date
console.log("After setFullYear: ", currentDate);

currentDate.setMonth(7); // Setting month to august (zero-indexed)
console.log("After setMonth: ", currentDate);

currentDate.setDate(7); // Setting date to seven
console.log("After setDate: ", currentDate);

// getTime usecase senario

function calculateSum() {
  let a = 0;
  for (let i = 0; i < 100000; i++) {
    a += i;
  }
  return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

const ans = calculateSum();
console.log(ans);

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);

function currentTimePrint() {
  const timeNow = new Date();
  const hours = String(timeNow.getHours()).padStart(2, "0");
  const minutes = String(timeNow.getMinutes()).padStart(2, "0");
  const seconds = String(timeNow.getSeconds()).padStart(2, "0");
  console.log(`${hours}:${minutes}:${seconds}`);
}
setInterval(currentTimePrint, 1000);
