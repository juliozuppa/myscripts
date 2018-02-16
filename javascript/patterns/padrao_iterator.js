// Padrão iterator - Exemplo 1
var names = (function () {
	var list = ['Matheus', 'Felipe', 'Jose', 'Kennedy', 'Andre', 'Ailton'];
	var index = 0;
	var next = function () {
		if (!this.hasNext()) {
			return null;
		}
		return list[index++];
	};
	var hasNext = function () {
		return index < list.length;
	};
	return {
		next: next,
		hasNext: hasNext
	}
})();

while(names.hasNext()) {
	console.log(names.next());
}

// Padrão iterator - Exemplo 2
var Iterator = function (list) {
	this.index = 0;
	this.list = list;
};
Iterator.prototype = {
	next: function () {
		return this.list[this.index++];
	},
	hasNext: function () {
		return this.index < this.list.length;
	},
	reset: function () {
		this.index = 0;
	},
	first: function () {
		this.reset();
		return this.next();
	},
	last: function () {
		this.index = this.list.length-2;
		return this.next();
	},
	each: function (callback) {
		while (this.hasNext()) {
			callback(this.next());
		}
	}
};

var arr = ['Julio', 'Adriano', 'Maria', 'Joana', 'Sebastião'];
var it = new Iterator(arr);
it.each(function (a) {
	console.log(a);
});


// Iterator - exemplo 3
function ItemMaker() {
}
ItemMaker.prototype.getDescription = function () {
	console.log(this.name);
	console.log(this.price);
	console.log(this.description);
};
ItemMaker.factory = function (type) {
	var item;
	if (typeof ItemMaker[type] !== 'function') {
		throw new Error(type.concat(' não existe'));
	}
	if (typeof ItemMaker[type].prototype.getDescription !== 'function') {
		ItemMaker[type].prototype = new ItemMaker();
	}
	item = new ItemMaker[type]();
	return item;
};
ItemMaker.LongSword = function () {
	this.name = 'LongSword';
	this.price = 1000;
	this.description = 'LongSword description';
};
ItemMaker.Bow = function () {
	this.name = 'Bow';
	this.price = 500;
	this.description = 'Bow description';
};

var Iterator = function (list) {
	this.index = 0;
	this.list = list;
};
Iterator.prototype = {
	next: function () {
		return this.list[this.index++];
	},
	hasNext: function () {
		return this.index < this.list.length;
	},
	reset: function () {
		this.index = 0;
	},
	first: function () {
		this.reset();
		return this.next();
	},
	last: function () {
		this.index = this.list.length-2;
		return this.next();
	},
	each: function (callback) {
		while (this.hasNext()) {
			callback(this.next());
		}
	}
};


var Player = function (name) {
	this.name = name;
	this.level = 0;
	this.items = [ItemMaker.factory('Bow')];
	this.inventory = new Iterator(this.items);
};

var it = new Iterator([new Player('Player1'), new Player('Player2'), new Player('Player3')]);
it.each(function (player) {
	var item = ItemMaker.factory('LongSword');
	player.items.push(item);
});

it.reset();
while (it.hasNext()) {
	console.log(it.next());
}

it.reset();
while (it.hasNext()) {
	var item = it.next();
	var inventory = item.inventory;
	console.log(item.name);
	while (inventory.hasNext()) {
		console.log(inventory.next());
	}
}

var player = it.last();
player.inventory.reset();
player.inventory.each(function (item) {
	console.log(item.name + " valor:" + item.price);
});
