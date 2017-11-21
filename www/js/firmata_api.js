var Bgpio = Bgpio || {};

var FirmataAPI = function() {
};

FirmataAPI.prototype.connect = function() {
    firmata.connect(function () {
        alert('Connected!');
    }, Bgpio.appendTextJsConsole);
};

FirmataAPI.prototype.disconnect = function() {
};

FirmataAPI.prototype.gpioWrite = function(pinNumber, value) {
    console.log("FirmataAPI.gpioWrite(" + pinNumber + ", " + value + ")");
    firmata.digitalWrite(pinNumber, value ? firmata.HIGH : firmata.LOW);
};

FirmataAPI.prototype.gpioRead = function(pinNumber) {
    console.log("FirmataAPI.gpioRead(" + pinNumber + ")");
    return firmata.digitalRead(pinNumber);
};

FirmataAPI.prototype.gpioOn = function() {
};

Bgpio.BoardAPI = new FirmataAPI();