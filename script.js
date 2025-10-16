/* .js files add interaction to your website */
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML =
    "Hi! " +
    name +
    " from " +
    location +
    " is learning " +
    learning +
    "! Thanks for learning about world sustainability with us!";
}

// ----------------------------
// Fact generator

var factList = [
  "Total waste generation for 2050 is projected to be around 3.78 billion metric tons.",
  "Less than 20% of global waste is recycled each year, and rich countries often export recyclables to poorer nations.",
  "Each year, around 92 million metric tons of textile waste is generated around the world.",
  "A staggering 99% of the products we buy are discarded within six months."
];

var factBtn = document.getElementById("factBtn"); // your button
var factDisplay = document.getElementById("fact"); // the paragraph
var count = 0;

if (factBtn && factDisplay) {
  factBtn.addEventListener("click", function () {
    factDisplay.innerHTML = factList[count];
    count++;
    if (count === factList.length) {
      count = 0;
    }
  });
}