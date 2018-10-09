$('.counter').counterUp({
    delay: 10,
    time: 3000
});



//circle progress
    
   $('.circle-1').circleProgress({
    value: 0.90,
    size: 140,
    startAngle:4.6,
    thickness:10,
    lineCap:"round",
    fill: {
      color: "#f9461d"
    },
     emptyFill:"#fff",
  });

 $('.circle-2').circleProgress({
    value: 0.75,
    size: 140,
    startAngle:4.6,
    thickness:10,
    lineCap:"round",
    fill: {
      color: "#1f8cd0"
    },
     emptyFill:"#fff"
  });



// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);