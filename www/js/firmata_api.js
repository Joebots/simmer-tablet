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

FirmataAPI.prototype.servoWrite = function(pinNumber, angle) {
    console.log("FirmataAPI.servoWrite(" + pinNumber + ", " + angle + ")");
    firmata.servoWrite(pinNumber, angle);
};

FirmataAPI.prototype.gpioRead = function(pinNumber, callback) {
    console.log("FirmataAPI.gpioRead(" + pinNumber + ")");
    firmata.analogRead(pinNumber, callback);
};

FirmataAPI.prototype.gpioOn = function(pinNumber, callback) {
    console.log("FirmataAPI.gpioOn(" + pinNumber + ")");
    firmata.onPinChanged(pinNumber, callback, Bgpio.appendTextJsConsole);
};

FirmataAPI.prototype.onI2CEvent = function(address, register, messageLength, callback) {
    console.log(`FirmataAPI.onI2CEvent(${address}, ${register}, ${messageLength}, ${callback})`);
    firmata.onI2CEvent(address, register, messageLength, callback, Bgpio.appendTextJsConsole);
};

FirmataAPI.prototype.reset = function() {
    console.log("FirmataAPI.reset()");
    firmata.reset();
};

Bgpio.BoardAPI = new FirmataAPI();