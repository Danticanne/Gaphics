var nbDeBoule = 250
var demiph = $(window).height()/2 

var taille = $(window).width()/nbDeBoule
var id
console.log(taille)

for (let i = 1; i < nbDeBoule + 1; i++) {
    jQuery
    ('<div>', {
        class : 'boule',
        id : 'boule' + (i).toString()
    })
    .css({'height': taille.toString(), 'width': taille.toString(), 'top': (taille/2 + (taille*(i-(nbDeBoule/2+0.5))) + $(window).height()/2).toString() + "px"})
    .appendTo('#container')

}

verticale()

function verticale() {
    for (let i = 1; i < nbDeBoule + 1; i++) {
        id = '#boule' + i.toString()
        //$('#boule1').css({'top' : '50vh', 'left' : (taille/2 + (i*taille - taille)).toString() + 'px'})
        anime({
            targets : id,
            left : (taille/2 + (i*taille - taille)).toString() + 'px',
            top : (demiph).toString() + 'px',
            //easing : 'easeInOutExpo',
            duration : 750,
            delay : i*6
        })
    }
}

var calc

function fonctionAffine(a){
    for (let i = 1; i < nbDeBoule + 1; i++) {
        id = '#boule' + i.toString()
        posX = i - nbDeBoule/2
        posY = posX + a
        calc =  (demiph-posY).toString() + 'px'
        anime({
            targets : id,
            top : calc,
            duration : 750,
            delay : i*6
        })
    }
}