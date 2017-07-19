$(document).ready(function(){

  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var type = '';

  //Adjust CSS to dynamically adjust satellite label visibility
  var sheets = document.styleSheets;
  var style = sheets[0];
  style.insertRule("p {visibility: hidden;}", 0);
  style.deleteRule(0);

  $(function() {
    $('#toggle-event').change(function() {
      if(!$(this).prop('checked')){
        style.insertRule("p {visibility: hidden;}", 0);
      }else{
        style.deleteRule(0);
      }
    })
  })

  $("#satelliteTypeDropDown li a").click(function(){
    type = $(this).text();
  });

  function Satellite(name, avgAlt, type){
    this.name = name;
    this.avgAlt = avgAlt;
    this.type = type;
  }

  var satelliteArray = [new Satellite("moon", 3844000, "moon"), new Satellite("ISS", 400, "ISS")];

// Dynamically Create satellite's As Animated Images
  // var master = document.getElementById("masterDiv");
  //
  // function animatedsatellite(char, num){
  //   var newDiv = document.createElement("div");
  //   newDiv.innerHTML = '<div id="Character-' + char + '" class=""><p>There are ' + num + ' instances of the character ' +  char.toUpperCase() + '</div>'
  //   master.prepend(newDiv);
  // }

  function addSatelliteToList(name){
    var newSatellite = document.createElement("li");
    newSatellite.id = name;
    newSatellite.innerHTML = "<a href='#'>"+name+"</a>";
    $("#satelliteListDropDown").append(newSatellite);
  }

  function createSatellite(name, avgAlt, type){
    satelliteArray.push(new Satellite(name, avgAlt, type));
  }

  function clearDiv()
  {
    $('#masterDiv').empty();
    $("#name").value = "";
    $("#avgAlt").value = "";
  }

  function animateSatellite(satellite, num){
    var animatedSat = document.createElement("div");
    animatedSat.id = satellite.name;
    animatedSat.innerHTML = "<img src=" + satellite.type + ".png class='satelliteSize'><p>" + satellite.name + "</p>";
    var test = satellite.type;
// Ternary Operater Applying Correct CSS Class to Div
    test === "Planet" || test === "Moon" || test === "Star" || test === "Satellite" ? animatedSat.setAttribute("class", "satellite" + num.toString()) :
                                                                                      animatedSat.setAttribute("class", "ship" + num.toString());
    $("#animationDiv").append(animatedSat);
  }
  function placeSatellite(satellite) {
    var num = 0;
    var orbitalPeriod = satellite.avgAlt;
    console.log(orbitalPeriod);
// Assign oribiting distance
    if(orbitalPeriod < 300){
      num = 1;
    }else if(orbitalPeriod <= 1000){
      num = 2;
    }else if(orbitalPeriod <= 2500){
      num =3;
    }else if(orbitalPeriod <= 7000){
      num = 4;
    }else if(orbitalPeriod <= 20000){
      num = 5;
    }else if(orbitalPeriod > 20000){
      num = 6;
    }else{
      num = 1;
    }
    animateSatellite(satellite, num);
   }


  $("#calculateBtn").on("click", function(){
    var name = document.getElementById("name").value;
    var avgAlt = document.getElementById("avgAlt").value;

    if(type === ''){
      alert("Please select the type of satellite you would like to add");
      return;
    }
    else if(name === ''){
      alert("Please name the satellite");
      return;
    }
    if(avgAlt === ''){
      alert("Please enter a number over 160")
      return;
    }else if(isNaN(avgAlt)){
      alert('"' + avgAlt + '"' + " is not a number. Please enter a number above 160")
    }else if(avgAlt < 160){
      alert("An altitude below 160km will result in sever orbital decay. Try a higher number.");
      return;
    }else{
      createSatellite(name, avgAlt, type);
      addSatelliteToList(name);
      var currentSatellite = satelliteArray[satelliteArray.length-1];
      placeSatellite(currentSatellite);
      clearDiv();
    }
   });

  //  Cause "satellite's Type" dropdown menu to display selected value
  $("#satelliteTypeDropDown li a").click(function(){
    $("#satelliteTypeBtn:first-child").html($(this).text()+' <span class="caret"></span>');
  });

});

//   orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
