document.getElementById('promo').onclick = function() {
    window.location.href = 'Promo/index.html';
};
document.getElementById('fav').onclick = function() {
     document.getElementsByClassName('content')[0].innerHTML =
        '<div class="productos"><h2>Favoritos</h2><p>Aquí van los productos.</p></div>'; 

};
document.getElementById('productos').onclick = function() {
    document.getElementById('prods').classList.add("hidden")
    document.getElementById('prods').classList.remove("hidden")

};