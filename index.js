var submitButton = document.querySelector("#submit");
var rate = document.querySelector(".rate_point");
var numberOfButtons = document.querySelectorAll(".button").length;
var rateNumber = null;
var thankYouCard = document.querySelector(".thankyou-card")
var ratingsCard = document.querySelector(".rating-card")

//  Detecting when the buttons are clicked
for (var i = 0; i<numberOfButtons; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function () {
        var active = document.querySelector(".pressed")
        if (active) {
            active.classList.remove("pressed")
        }
        rateNumber = this.innerHTML;
        console.log(rateNumber);
        buttonAnimation(rateNumber);
    })
}
//  detecting when the submit button is clicked
submitButton.addEventListener("click", function () {
    if (rateNumber === 0) {
        alert("We are expecting a rating!");
        console.log(rateNumber);
    }
    rate.innerText = rateNumber;
    ratingsCard.classList.add("hidden");
    thankYouCard.classList.remove("hidden");
})
// animating the buttons
function buttonAnimation(currentButton) {
    var activeButton = document.querySelector("._"+currentButton)
    activeButton.classList.add("pressed");
}