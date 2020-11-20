const { DateTime } = require('luxon');

//var now = DateTime.local(2020, 8, 12, 15, 30)
//var now = DateTime.local().setZone('America/Phoenix');

//Is weekday?
function isWeekday(now) {
  if(now.weekday < 6){
    return true;
  } else {
    return false;
  }
}

//Is summer?
function isSummer(now) {
  if(now.month > 4 && now.month < 9){
    return true;
  } else {
    return false;
  }
}

//Is peak (summer)?
function isPeakTimeSummer(now) {
  if(now.hour >= 15 && now.hour < 19) {
    return true;
  } else {
    return false;
  }
}

//Is peak (winter)?
function isPeakTimeWinter(now) {
  if((now.hour >= 6 && now.hour < 9) || (now.hour >= 18 && now.hour < 21)) {
    return true;
  } else {
    return false;
  }
}

//Weekends are always off peak
//Main Logic Runs Here
function mainLogic() {
  //Define Date to Know
  var now = DateTime.local().setZone('America/Phoenix');
  //Begin Logic
  if (isWeekday(now) == false) {
    return 'Off Peak';
  } else {
    if (isSummer(now) == true) {
      if (isPeakTimeSummer(now) == true) {
        return 'On Peak';
      } else {
        return 'Off Peak';
      }
    } else {
      if (isPeakTimeWinter(now) == true) {
        return 'On Peak';
      } else {
        return 'Off Peak';
      }
    }
  }
}

exports.exportResult = function () {
  console.log(mainLogic());
  return mainLogic();
}; 