// Shuffle string
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

// Capitalize first letter of string
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// Get random element from array
Array.prototype.getRandomElement = function () {
    return this[Math.floor((Math.random()*this.length))];
}

var getScreenWidth = function() {
    return window.innerWidth * window.devicePixelRatio;
}

var getScreenHeight = function() {
    return window.innerHeight * window.devicePixelRatio;
}

Array.prototype.isItemInArray = function(item) {
    for (var i = 0; i < this.length; i++) {
        // This if statement depends on the format of your array
        if (this[i][0] == item[0] && this[i][1] == item[1]) {
            return true;   // Found it
        }
    }
    return false;   // Not found
}
