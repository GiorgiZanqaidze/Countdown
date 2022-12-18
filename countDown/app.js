const months = [
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
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
const textContent = document.querySelector('.text__content')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.time div')
const endTimeContent = document.querySelector('.endingTime')

let futureDate = new Date(2023, 7, 14, 7, 43, 0)

// get access each date arguments
const year = futureDate.getFullYear();
// use 'let' variable to change value later
let month = futureDate.getMonth();
// access month from array
month = months[month];
const day = futureDate.getDay();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const deadlineContent = `giveaway ends on ${day} ${month} ${year} ${hour}:${minute}`

// set time dinamicly on changing date
endTimeContent.innerHTML = deadlineContent

//  milliseconds =>> ms

// turn future date into ms
futureDate = futureDate.getTime()

function getRemainingTime() {
    // declare present date 
    let today = new Date()
    // turn present date into ms
    today = today.getTime();
    const time = futureDate - today
    
    // ms in one day
    const day = 24 * 60 * 60 * 1000
    // ms in one hour
    const hour = 60 * 60 * 1000
    // ms in one minute
    const minute = 60 * 1000
    
    const days = Math.floor(time / day)
    const hours = Math.floor((time % day) / hour)
    const minutes = Math.floor((time % hour) / minute)
    const seconds = Math.floor((time % minute) / 1000)
    
    // set array of date values
    const dateValues = [days, hours, minutes, seconds];
    // set time format to remain 0 under 10 
    function format(item) {
        if (item < 10) {
            return `0${item}`
        }
        return item
    }
    items.forEach((item, index) => {
        item.innerHTML = format(dateValues[index])
    })
    if (time < 0 ) {
        clearInterval(countdown)
        textContent.innerHTML = `<h4 class="expired">oops this is expired</h4>`
    }
}

let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();
