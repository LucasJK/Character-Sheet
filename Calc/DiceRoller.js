var getRandomInt = function(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var parseValue = function(val) {
  return parseInt(val || "1");
}

var parseRoll = function(roll) {
  
  // // only here for the snippet
  // debug("Parsing " + roll);
  
  var parts = roll.split(/d/);
  var sum = 0;
  var limit = parseValue(parts[1]);
  for (var i = parseValue(parts[0]) - 1; i >= 0; i--) {
    var got = getRandomInt(1, limit);
    sum += got;
    
    // // only here for the snippet
    // debug("  From roll " + roll + " part " + i + " got " + got + " sum " + sum);
    
  }
  return sum;
};

var rollDie = function(spec) {

  return spec.replace(/[^+0-9d]+/g, "")
      .split(/\+/)
      .map(parseRoll)
      .reduce(function(a,b){return a + b;});
};

// Credit:
// rolfl @
// https://codereview.stackexchange.com/questions/86548/dd-dice-rolling-app