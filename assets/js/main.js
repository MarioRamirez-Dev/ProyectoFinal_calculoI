// Funcionalidad del boton
$('.btn_menu').on('click',function(){
    $('.menu').toggleClass('menu-responsive');
});
$('.submenu').on('click',function(){
    $(this).children('ul').slideToggle;
});
$("ul").click(function(p){
    p.stopPropagation();
})
//Boton Hamburguesa del menu
document.getElementById('hamburguer_menu')
.addEventListener('click', ({ target }) => {
    target.classList.toggle('open')
})