$(document).ready(function(){

  var GM = 398600.4418;
  var earthRadius = 6367.4447;


  var master = document.getElementById("masterDiv");

  function createDiv(char, num){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = '<div id="Character-' + char + '" class=""><p>There are ' + num + ' instances of the character ' +  char.toUpperCase() + '</div>'
    master.prepend(newDiv);
  }


  function clearDiv()
  {
    $('#masterDiv').empty();
  }

  $("#calculateBtn").on("click", function(){
    var conclusion = document.getElementById("conclusion");
    if(masterDiv.innerHTML !== null){
      clearDiv();
    }
    var name = document.getElementById("name").value;
    var altitude = document.getElementById("altitude").value;

    if(name === ''){
      alert("Please input a string");
      return;
    }
    if(altitude === ''){
      alert("Please enter a number over 1999")
      return;
    }else if(isNaN(altitude)){
      alert('"' + altitude + '"' + " is not a number. Please enter a number above 1999")
    }else if(altitude < 1999){
      alert("An altitude below 2000km will result in orbital decay. Try a higher number.");
      return;
    }
  });

});

//   orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
