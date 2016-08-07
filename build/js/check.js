function getMessage(a,b) {
    if (typeof(a) === 'boolean') {
    
    if (a) {
       
        return  'Я попал в [b]';
    } else {
        
        return 'Я никуда не попал';
    }
    }
    if (typeof(a) === 'number') {
       return 'Я прыгнул на [a] * 100 сантиметров';
    }
    
    var numberOfSteps = 0;
    var distancePath = 0;
    
    if (a != (typeof(a) === 'boolean') & a != (typeof(a) === 'number'))  {
      for (var i = 0; i < a.length; i++) {
       numberOfSteps += a[i];
   }
        
    if (b != (typeof(a) === 'boolean') & b != (typeof(a) === 'number')) {
      for (var i = 0; i < b.length; i++) {
        distancePath += a[i] * b[i];
      }
    return 'Я прошёл ' + distancePath + ' метров';
   } 
    return ' Я прошёл ' + numberOfSteps + ' шагов';
   }
}

