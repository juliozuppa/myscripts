function ajax(method, url, callback) {
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        try { xmlhttp = new XMLHttpRequest(); } catch (e) { xmlhttp = false; }
    } else { // code for IE6, IE5
        try { xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {
            try { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) { xmlhttp = false; }
        }
    }
    if (!xmlhttp) { alert("Erro ao criar o objeto XMLHttpRequest"); return; }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {
            if (xmlhttp.status === 200) {
                callback(xmlhttp.responseText);
            } else {
                alert("Error" + xmlhttp.statusText);
            }
        }
    }
    xmlhttp.open(method, url, true);
    xmlhttp.onerror = function () {
        alert("Ocorreu algum erro durante a transação ajax!");
    };
    xmlhttp.send();
}