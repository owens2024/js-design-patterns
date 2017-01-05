// Poor attempt at abstract factory

var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};

/**
 @constructor
 @abstract
 */
var MobileDeviceAbstract = function() {
  if (this.constructor === MobileDeviceAbstract) {
    throw new Error("Can't instantiate abstract class!");
  }
  // MobileDevice initialization...


  this.getScreenSize = function(){
  	throw new Error("Abstract method!");
  }
};

MobileDeviceAbstract.prototype.getDeviceName = function(){
	throw new Error("Abstract method!");
}

MobileDeviceAbstract.prototype.getScreenSize = function(){
	throw new Error("Abstract method!");
}

var PhoneAbstract = function() {
  var deviceType = 'phone';
  if (this.constructor === PhoneAbstract) {
    throw new Error("Can't instantiate abstract class!");
  }
  MobileDeviceAbstract.apply(this, arguments);
};
PhoneAbstract.prototype = Object.create(MobileDeviceAbstract);
PhoneAbstract.prototype.constructor = PhoneAbstract


var TabletAbstract = function() {
  var deviceType = 'tablet';
  MobileDeviceAbstract.apply(this, arguments);
};

var ApplePhone = function() {
  this.deviceName = 'iPhone';

  PhoneAbstract.apply(this, arguments);
}
ApplePhone.prototype = Object.create(PhoneAbstract);
ApplePhone.prototype.constructor = ApplePhone;
ApplePhone.prototype.getDeviceName = function(){
  	return this.deviceName;
  }
ApplePhone.prototype.getScreenSize = function(){
  	return 'hello';
  }

/**
 @abstract
 */
//var bad = new PhoneAbstract();

  var me = new ApplePhone();
console.log(me);
console.log(me.getDeviceName());
console.log(me.getScreenSize());

/*
 var Cat = function() {
    Animal.apply(this, arguments);
    // Cat initialization...
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = function() {
    console.log('meow');
}*/
