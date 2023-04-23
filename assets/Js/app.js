// Get the form and countdown timer elements
var form = document.querySelector('form');
var timer = document.getElementById('timer');

// Add event listener to the form submit button
form.addEventListener('submit',function(event){
 // Prevent the form from submitting
 event.preventDefault();
  // Get the user-input countdown date
  var countdownDateInput = document.getElementById('countdown-date');
  var countdownDate = new Date(countdownDateInput.value).getTime();
  // Get the current date and time
  var now = new Date().getTime();
    // Find the distance between now and the countdown date
    var distance = countdownDate - now;
    // If the countdown date is invalid, show an error message
  if (isNaN(countdownDate) || distance < 0) {
    alert('Please enter a valid future date and time.');
    return;

  }

     // Show the countdown timer and hide the form
     form.style.display = 'none';
     timer.style.display = 'block';

    // Update the count down every 1 second
    var x = setInterval(function() {

     // Get the current date and time
    var now = new Date().getTime();

     // Find the distance between now and the countdown date
     var distance = countdownDate - now;

    // Calculate the hours, minutes, and seconds remaining
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30 ))/ (1000 * 60 * 60 * 24 ));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the hours, minutes, and seconds remaining on the page
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  
    // If the count down is finished, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }, 1000);

})


