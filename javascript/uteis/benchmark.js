var timer = function(name) {
    var start = new Date();
    return {
        stop: function() {
            var end = new Date();
            var time = end.getTime() - start.getTime();
            console.log('Timer:', name, 'finished in', time, 'ms');
        }
    }
};

var t = timer('Benchmark'); // aqui inicia o contador
// efetuar algum processamento (...)
t.stop(); // aqui finaliza o contador e exibe o tempo