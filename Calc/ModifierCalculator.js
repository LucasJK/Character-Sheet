var calcAbilityMod = function(abilityScore){
    mod = Math.trunc(((abilityScore - 10) / 2));
    if (abilityScore < 10) {
        mod = mod - isOdd(abilityScore);
    }
    return mod;
  };

  function isOdd(num) { return num % 2;}