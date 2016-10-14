var word = ["T", "H", "E", "O", "D", "O", "R", "E"];
var dead = ["you are ok", "you are still ok", "you are injured", "you are dead"]
var choose = word;
var rates = new Array(word.length);
var count = 0;

for (var i = 0; i < rates.length; i++) {
  rates[i] = "_ ";
}

function printRate() {
  for (var i = 0; i < rates.length; i++) {
    var ratefield = document.getElementById("ratefield");
    var create = document.createTextNode(rates[i]);
    ratefield.appendChild(create);
  }
}

$('#input').click(function(e) {
  e.preventDefault();
  var form = document.rateform;
  var se = form.elements["search"];
  var search = se.value;
  search = search.toUpperCase();
  for (var i = 0; i < choose.length; i++) {
    if (choose[i] === search + "") {
      rates[i] = search;
      var s = true;
    }
   //   var win = true;
  //   for (var i = 0; i < rates.length; i++) {
  //     if (rates[i] === "_ ") {
  //      win=false;
  //    }
  //   }
  //   if (win) {
  //    window.alert("You win!");
  // }
    var ratefield = document.getElementById("ratefield");
    ratefield.innerHTML = "";
    printRate();
  }

  if (!s) {
    count++
    alert(dead[count])

  }

});