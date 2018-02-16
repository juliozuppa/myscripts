/*
<input type="text" id="txtFind" placeholder="Buscar">
<div>
    <p class="name">Bruno</p>
    <p class="name">Sara</p>
    <p class="name">Bernardo</p>
    <p class="name">Kennedy</p>
    <p class="name">Bianca</p>
    <p class="name">Alex</p>
    <p class="name">Jessica</p>
</div>
*/
var txtFind = document.getElementById('txtFind');
var txtNames = document.getElementsByClassName('name');
txtFind.addEventListener('keyup', function() {
    var find = this.value.toLowerCase();
    for(var i in txtNames) {
        i = parseInt(i);
        if(txtNames.hasOwnProperty(i)) {
            var nome = txtNames.item(i).textContent.toLowerCase();
            txtNames.item(i).style.display = 'block'; // show
            if(find && nome.substring(0, find.length) !== find) {
                txtNames.item(i).style.display = 'none'; // hide
            }
        }
    };
});
