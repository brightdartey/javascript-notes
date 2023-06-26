function testElseIf(val) {
    if(val > 10) {
        return "Greater than 10";
    }else if(val < 5) {
        return "Smaller than 5";
    }else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(2));


// order of Else If 
function orderOf(val) {
    if(val > 10) {
        return "Greater than 10";
    }else if(val < 5) {
        return "Smaller than 5";
    }else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(2));

/*
Write chained if/else if statement to fulfill the following conditions:
num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"

*/

function testSize(num) {
    if(num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge"
    }
}

console.log(testSize(15));

// Golf game 

let names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if(strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if(strokes >= par + 3) {
        return names[6];
    }

    //return "Change Me";
}

console.log(golfScore(5, 4));
