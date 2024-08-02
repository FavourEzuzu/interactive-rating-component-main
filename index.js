var submitButton = document.querySelector("#submit");
var rate = document.querySelector("rate");
var numberOfButtons = document.querySelectorAll(".button").length;
var rateNumber = 0;
var thankYouCard = document.querySelector(".thankyou-card")
var ratingsCard = document.querySelector(".rating-card")

//  Detecting when the buttons are clicked
for (var i = 0; i<numberOfButtons; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function () {
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
    rate.innerHTML = rateNumber;
    ratingsCard.classList.add("main-card ")
    thankYouCard.classList.add("")
})
// animating the buttons
// function buttonAnimation(currentButton) {
//     var activeButton = document.querySelector("."+currentButton)
//     activeButton.classList.add("pressed");
// }