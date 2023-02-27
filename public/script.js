var nbDeBoule = 250
var demiph = $(window).height()/2 
var precisionEchelle = 10
var taille = $(window).width()/nbDeBoule
var id

//creation de chaque boule + placement verticale

for (let i = 1; i < nbDeBoule + 1; i++) {
    jQuery
    ('<div>', {
        class : 'boule',
        id : 'boule' + (i).toString()
    })
    .css({'height': taille.toString(), 'width': taille.toString(), 'top': (taille/2 + (taille*(i-(nbDeBoule/2+0.5))) + $(window).height()/2).toString() + "px"})
    .appendTo('#container')
}

//création de l'echelle horizontale

for (let i = 1; i < precisionEchelle + 1; i++) {
    jQuery
    ('<p>', {
        class : 'nbEchelle',
        id : 'nbEchelleh' + (i).toString()
    })
    .css({'top' : demiph.toString() + 'px', 'left' : ($(window).width()/precisionEchelle*i).toString() + 'px'})
    .html(((i-precisionEchelle/2)*nbDeBoule/precisionEchelle).toString())
    .appendTo('#echelle')
    jQuery
    ('<div>', {
        class : 'divEchelleh',
        id : 'divEchelleh' + (i).toString()
    })
    .css({'top' : '0', 'left' : ($(window).width()/precisionEchelle*i).toString() + 'px'})
    .appendTo('#echelle')
}

//création de l'echelle verticale

for (let i = 1; i < precisionEchelle + 1; i++) {
    jQuery
    ('<p>', {
        class : 'nbEchelle',
        id : 'nbEchellev' + (i).toString()
    })
    .css({'left' : ($(window).width()/2).toString() + 'px', 'top' : (demiph*2/precisionEchelle*i).toString() + 'px'})
    .html(-(Math.floor((demiph*2/precisionEchelle*i-$(window).height()) + $(window).height()/2)).toString())
    .appendTo('#echelle')
    jQuery
    ('<div>', {
        class : 'divEchellev',
        id : 'divEchellev' + (i).toString()
    })
    .css({'left' : '0', 'top' : (demiph*2/precisionEchelle*i).toString() + 'px'})
    .appendTo('#echelle')
}

//fonction pour placer les boules à l'horizontale + appel

horizontale()

function horizontale() {
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

//fonction affine

var calc

function fonctionAffine(a, b){
    for (let i = 1; i < nbDeBoule + 1; i++) {
        id = '#boule' + i.toString()
        posX = i - nbDeBoule/2
        posY = a*posX + b
        calc =  (demiph-posY).toString() + 'px'
        anime({
            targets : id,
            top : calc,
            duration : 750,
            delay : i*6
        })
    }
}

function fonctionPsecondDeg(a, b, c){
    for (let i = 1; i < nbDeBoule + 1; i++) {
        id = '#boule' + i.toString()
        posX = i - nbDeBoule/2
        posY = a*Math.pow(posX, 2) + b*posX + c
        calc =  (demiph-posY).toString() + 'px'
        anime({
            targets : id,
            top : calc,
            duration : 750,
            delay : i*6
        })
    }
}

function fonctionPtroisiemeDeg(a, b, c, d){
    for (let i = 1; i < nbDeBoule + 1; i++) {
        id = '#boule' + i.toString()
        posX = i - nbDeBoule/2
        posY = a*Math.pow(posX, 3) + b*Math.pow(posX, 2) + c*posX + d
        calc =  (demiph-posY).toString() + 'px'
        anime({
            targets : id,
            top : calc,
            duration : 750,
            delay : i*6
        })
    }
}