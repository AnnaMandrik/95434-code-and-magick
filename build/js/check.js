function getMessage(a, b) {
    if (typeof (a) === 'boolean') {
        if (a) {
            return 'Я попал в ' + b;
        } else {
            return 'Я никуда не попал';
        }
    }
    if (typeof (a) === 'number') {
        return 'Я прыгнул на ' + a * 100 + ' сантиметров';
    }
    var numberOfSteps = 0;
    var distancePath = 0;
    if (Array.isArray(a)) {
        if (Array.isArray(b)) {
            var LengthA = a.length;
            var LengthB = b.length;
            var LengthArray;
            if (LengthA < LengthB) {
                LengthArray = LengthA;
            } else {
                LengthArray = LengthB;
            }
            for (var i = 0; i < LengthArray; i++) {
                distancePath += a[i] * b[i];
            }
            return 'Я прошёл ' + distancePath + ' метров';
        }
        for (var i = 0; i < a.length; i++) {
            numberOfSteps += a[i];
        }
        return 'Я прошёл ' + numberOfSteps + ' шагов';
    }
}

