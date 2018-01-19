var Bgpio = Bgpio || {};

var FirmataAPI = function() {
};

FirmataAPI.prototype.connect = function() {
    firmata.connect(function () {
        alert('Connected!');
    }, Bgpio.appendTextJsConsole);
};

FirmataAPI.prototype.disconnect = function() {
    firmata.close();
};

FirmataAPI.prototype.gpioWrite = function(pinNumber, value) {
    console.log("FirmataAPI.gpioWrite(" + pinNumber + ", " + value + ")");
    firmata.analogWrite(pinNumber, value);
};

FirmataAPI.prototype.gpioRead = function(pinNumber, callback) {
    console.log("FirmataAPI.gpioRead(" + pinNumber + ")");
    firmata.analogRead(pinNumber, callback);
};

FirmataAPI.prototype.gpioOn = function(pinNumber, callback) {
    console.log("FirmataAPI.gpioOn(" + pinNumber + ")");
    firmata.onPinChanged(pinNumber, callback, Bgpio.appendTextJsConsole);
};

FirmataAPI.prototype.reset = function() {
    console.log("FirmataAPI.reset()");
    firmata.reset();
}

Bgpio.BoardAPI = new FirmataAPI();