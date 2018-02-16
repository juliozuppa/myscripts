function writeLn(str) {
    document.write(str + '<br>');
}

function printProperties(strPropertieName, maxLeval) {
    var countLevel = 1;
    var arr = typeof strPropertieName === 'string' ? eval(strPropertieName) : strPropertieName;
    for(var a in arr) {
        if(typeof arr[a] === 'object' && arr[a] !== null) {
            if(countLevel < maxLeval) {
                printProperties(strPropertieName + '[\'' + a + '\']', maxLeval - countLevel);
                countLevel++;
            }
        } else if(typeof arr[a] != 'function') {
            writeLn(strPropertieName + '[\'' + a + '\']: ' + arr[a]);
            countLevel = 1;
        } else {
            countLevel = 1;
        }
    }
}
document.write('<pre>');
printProperties('location', 3);
writeLn('');
printProperties('screen', 3);
writeLn('');
printProperties('navigator', 3);
writeLn('');
printProperties('location', 3);
writeLn('');
printProperties('window', 2);
writeLn('');
/*printProperties('document', 1); // mais que 1 não rola (vai travar)
writeLn('');*/
document.write('</pre>');