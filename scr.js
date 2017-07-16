$(document).ready(function(){

  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  function Satelite(name, avgAlt, type){
    this.name = name;
    this.avgAlt = avgAlt;
  }

  var sateliteArray = [new Satelite("moon", 3844000), new Satelite("ISS", 400)];

  var master = document.getElementById("masterDiv");

  function createDiv(char, num){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = '<div id="Character-' + char + '" class=""><p>There are ' + num + ' instances of the character ' +  char.toUpperCase() + '</div>'
    master.prepend(newDiv);
  }

  function addSatelite(name, avgAlt){
    var newSatelite = document.createElement("li");
    newSatelite.innerHTML = "<a href='#'>"+name+"</a>";
    dropdown.append(newSatelite);
  }

  function createSatelite(name, avgAlt){
    sateliteArray.push(new Satelite(name, avgAlt));
  }

  function clearDiv()
  {
    $('#masterDiv').empty();
  }

  $("#calculateBtn").on("click", function(){
    if(masterDiv.innerHTML !== null){
      clearDiv();
    }
    var name = document.getElementById("name").value;
    var avgAlt = document.getElementById("avgAlt").value;

    if(name === ''){
      alert("Please name the satelite");
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
      createSatelite(name, avgAlt);
      addSatelite(name, avgAlt);
      console.log(sateliteArray);
    }
   });

});

//   orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
