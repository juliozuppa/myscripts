
// padrão Sandbox. Exemplo 1
var Sandbox = function () {
	// converter os arguments num array
	var args = Array.prototype.slice.call(arguments);
	var callback = args.pop(); // ultimo argumento
	var orderedModules = args.pop();
	if(this instanceof Sandbox) {
		new Sandbox(orderedModules, callback);
	}
	var modules = {};
	for(var index in orderedModules) {
		modules[orderedModules[index]] = Sandbox.modules[orderedModules[index]];
	}
	callback(modules);
};
Sandbox.modules = {};
Sandbox.modules.validator = (function () {
	var isString = function (value) {
		return typeof value === 'string';
	}
	return {
		isString: isString
	}
})();
Sandbox.modules.User = function (name) {
	this.name = name;
}
// passa um array dos modulos que irá utilizar
Sandbox(["validator", "User"], function (modules) {
	var validator = modules.validator;
	var User = modules.User;
	console.log(User);
	console.log(validator);
	var name = "Jose";
	if(validator.isString(name)) {
		var user = new User(name);
	}
	console.log(user);
});



// Padrão Sandbox - Exemplo 2
var Sandbox = function () {
	// converter os arguments num array
	var args = Array.prototype.slice.call(arguments);
	var callback = args.pop(); // ultimo argumento
	var orderedModules = args.pop();
	if(this instanceof Sandbox) {
		new Sandbox(orderedModules, callback);
	}
	var modules = [];
	for(var index in orderedModules) {
		modules.push(Sandbox.modules[orderedModules[index]]);
	}
	callback.apply(undefined, modules);
};
Sandbox.modules = {};
Sandbox.modules.validator = (function () {
	var isString = function (value) {
		return typeof value === 'string';
	}
	return {
		isString: isString
	}
})();
Sandbox.modules.User = function (name) {
	this.name = name;
}
// passa um array dos modulos que irá utilizar
Sandbox(["validator", "User"], function (validator, User) {
	console.log(User);
	console.log(validator);
	var name = "Jose";
	if(validator.isString(name)) {
		var user = new User(name);
	}
	console.log(user);
});


var Sandbox = function () {
	// converter os arguments num array
	var args = Array.prototype.slice.call(arguments);
	var callback = args.pop(); // ultimo argumento
	var orderedModules = args.pop();
	if(this instanceof Sandbox) {
		new Sandbox(orderedModules, callback);
	}
	var modules = [];
	for(var index in orderedModules) {
		modules.push(Sandbox.modules[orderedModules[index]]);
	}
	callback.apply(undefined, modules);
};

Sandbox.modules = {};
Sandbox.modules.colors = ['Blue', 'Brown', 'Yellow', 'White'];
Sandbox(['colors'], function (colors) {
	Sandbox.modules.Father = function () {
		this.eye = colors[Math.floor(Math.random() * colors.length)];
	};
	Sandbox.modules.Mother = function () {
		this.hair = colors[Math.floor(Math.random() * colors.length)];
	};
});

Sandbox(['Mother', 'Father'], function (Mother, Father) {
	Sandbox.modules.Child = function (name) {
		this.name = name;
		Mother.call(this);
		Father.call(this);
	}
});
Sandbox(['Child'], function (Child) {
	console.log(new Child('Maria'));
	console.log(new Child('Jose'));
	console.log(new Child('Fernando'));
});