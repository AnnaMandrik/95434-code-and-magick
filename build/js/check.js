function getMessage(a,b) {
    if (typeof(a) === 'boolean') {
      if (a) {
        return  'Я попал в ' + b;
      } else {
        return 'Я никуда не попал';
      }
    }
    if (typeof(a) === 'number') {
       return 'Я прыгнул на ' + a * 100 + ' сантиметров';
    }
    var numberOfSteps = 0;
    var distancePath = 0;
    if (Array.isArray(a)) {
        for (var i = 0; i < a.length; i++) {
          numberOfSteps += a[i];
        }  
        if (Array.isArray(b)) {
             for (var i = 0; i < b.length; i++) {
             distancePath += a[i] * b[i];
             }
           return 'Я прошёл ' + distancePath + ' метров';
          } 
     return ' Я прошёл ' + numberOfSteps + ' шагов';
     }
}

