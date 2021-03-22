export var setUnit = function(type){
    var unit ;
    switch(type){
      case 'heat':{
        unit = ' \u2103';
        break;
      }
      case 'wind':{
        unit = ' km/h';
        break;
      }
      case 'humidity':{
        unit = ' %';
        break;
      }
      default: {
        unit = '';
        break;
      }
    }
    return unit;
  }