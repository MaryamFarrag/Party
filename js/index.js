//charachter count function
$("#text").keyup(function(){
    var textLength=$(this).val().length;
    if(textLength > 100){
        alert("don't type over 100 characters")
    }
    var remainingChar = 100 - textLength;
    $("#char").text(remainingChar)
})
//singers info toggle function
$(".singers h3").click(function(){
    var ps = $(".singers p")
    var hs = $(".singers h3")
    var x = $(hs).index(this)
    $(ps).not(ps[x]).slideUp(1000)
    $(ps[x]).slideToggle(1000)

})
//nav menu toggle function
$("#home .nav").click(function(){
    $("#home i").removeClass("fa-toggle-on").addClass("fa-toggle-off")
    $("#one").removeClass("wid-0").addClass("w-25");
    $("#two").removeClass("w-100").addClass("w-75")
})
$("#tabs i").click(function(){
    $("#home i").removeClass("fa-toggle-off").addClass("fa-toggle-on")
    $("#one").removeClass("w-25").addClass("wid-0");
    $("#two").removeClass("w-75").addClass("w-100")

})
cd()
//countdown function
function cd(){
    var displayDays = document.getElementById("days")
    var displayHours = document.getElementById("hours")
    var displayMins = document.getElementById("mins")
    var displaySec = document.getElementById("secs")
    var countDownDate = new Date("Feb 28, 2019 00:00:00").getTime();
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
      
        // Display the result in the element with id="demo"
        displayDays.innerHTML = days
        displayHours.innerHTML = hours
        displayMins.innerHTML = minutes
        displaySec.innerHTML = seconds
      
        // If the count down is finished, write some text 
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);

}
$("a").click(function(){
    var aHref = $(this).attr("href");
    $("body").animate({scrollTop:$(aHref).offset().top},1000)
    console.log(aHref)
})
