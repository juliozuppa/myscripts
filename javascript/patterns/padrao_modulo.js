// padrão módulo
var MYAPP = {
	// definição dos namespaces
	models: {},
	views: {},
	controllers: {},
	utils: {}
}

MYAPP.models.User = function (name, email, gender) {
	this.name = name;
	this.email = email;
	this.gender = gender;
}

MYAPP.controllers.userController = (function (User) {
	var user = new User('Julio', 'juliozuppa@gmail.com', 'M');
	return {
		// coloca aqui as propriedades e métodos que deseja expor(tornar publico)
	}
})(MYAPP.models.User);