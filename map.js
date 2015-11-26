function Stations() {
  this.mapping = {
    'nicolay' : {
      'name' : "Nicolay",
      'location' : "Port Louis",
      'year' : "1988",
      'installed' : "78.40",
      'effective' : "72.00",
      'fuel' : "Jet A-1 / Kerosene"
    },
    'nicolay' : {
      'name' : "Nicolay",
      'location' : "Port Louis",
      'year' : "1988",
      'installed' : "78.40",
      'effective' : "72.00",
      'fuel' : "Jet A-1 / Kerosene"
    },
  }
}

jQuery(document).ready(function(){
  var elem = document.createElement( "canvas" );
  if (elem.getContext && elem.getContext("2d")) {
      jQuery("#svg-container").slideDown();
  } else {
      jQuery("#svg-fallback").slideDown();
  }
});

var stations = new Stations();
var s = Snap("#svg-main");
var i = Snap("#tyoe-icon");