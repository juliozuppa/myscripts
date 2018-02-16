var obj = {
    id: 11, nome: 'Julio',
    test: {id: 1, nome: 'test'}
};
var arrayFromObject = function (obj) {
    var arr = [];
    for (var i in obj) {
        arr[i] = (typeof obj[i] === 'object') ?
            arrayFromObject(obj[i]) : arr[i] = obj[i];
    }
    return arr;
}
var arr = arrayFromObject(obj);
console.log(arr['id']); // 11
console.log(arr['nome']); // Julio
console.log(arr['test']); // [id: 1, nome: "test"]