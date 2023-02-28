var nbDeBoule = 250
var demiph = $(window).height()/2 
var precisionEchelle = 10
var taille = $(window).width()/nbDeBoule
var id
var quitterTitre = false
var alea
var aleaNow
var boucle = 0
var multiplicateur = 10
var menuOuvert = false

//fonction pour ouvrir le menu

function changeMenu(){
    if(!menuOuvert){
        menuOuvert = true
        anime({
            targets : '#ui',
            left : '0',
            duration : 1500,
            easing : 'easeOutCubic'
        })
        anime({
            targets : '#arrow',
            rotate : '-180deg',
            duration : 200,
        })
    }else{
        menuOuvert = false
        anime({
            targets : '#ui',
            left : '-201px',
            duration : 1500,
            easing : 'easeOutCubic'
        })
        anime({
            targets : '#arrow',
            rotate : '0deg',
            duration : 200,
        })
    }
}

//faire apparaitre le titre au début

anime({
    targets : '#titre',
    opacity : 1,
    duration : 700,
    easing : 'linear',
    delay : 1000
})
anime({
    targets : '#boutonStart',
    opacity : 1,
    duration : 700,
    easing : 'linear',
    delay : 1500
})
anime({
    targets : '#fonction',
    opacity : 1,
    duration : 700,
    easing : 'linear',
    delay : 2500
})

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
    .html((((i-precisionEchelle/2)*nbDeBoule/precisionEchelle)/multiplicateur).toString())
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
    .html((-((Math.floor((demiph*2/precisionEchelle*i-$(window).height()) + $(window).height()/2)))/multiplicateur).toString())
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

//boucle while de l'écran titre

function start(){
    boucle = 10
    anime({
        targets : '#echelle',
        opacity : 1,
        duration : 700,
        easing : 'linear',
    })
    anime({
        targets : '#boutonStart',
        opacity : 0,
        duration : 700,
        easing : 'linear',
    })
    anime({
        targets : '#fonction',
        opacity : 0,
        translate : '-100% -100%',
        top: '0',
        left: '0',
        duration : 1100,
        easing : 'easeOutCubic',

    })
    anime({
        targets : '#titre',
        opacity : 0,
        duration : 700,
        easing : 'linear',
    })
    anime({
        targets : '#ui',
        left : '-201px',
        duration : 1500,
        easing : 'linear',
        delay: 500,
        easing : 'easeOutCubic'
    })
}

function bouclef(){
    setTimeout(() => {
        alea =  Math.floor(Math.random() * (5 - 1 + 1) + 1)
        while(alea == aleaNow){
            alea =  Math.floor(Math.random() * (5 - 1 + 1) + 1)
        }
        aleaNow = alea
        aa =  (Math.random() * 2 - 1)
        ab =  (Math.random() * 2 - 1)
        ac =  (Math.random() * 2 - 1)
        ad =  (Math.random() * 2 - 1)
        console.log(aa + ',' + ab + ',' + ac + ',' + ad)
        if(alea == 1){
            fonctionAffine(aa*10, ab*10)
        }
        if(alea == 2){
        fonctionPsecondDeg(aa, ab, ac)
        }
        if(alea == 3){
            fonctionPtroisiemeDeg(aa, ab, ac, ad)
        }
        if(alea == 4){
            aa*=5
            sinusoidale(aa, ab, ac, ad)
        }
        if(alea == 5){
            expo(aa, ab, ac, ad)
        }
        if(boucle<10){
            bouclef()
        }
    }, 3000);
}

bouclef()

//fonctions ils faut multiplier par le multiplicateur Y et divisier X jsp pouquoi

var calc
var eq

function fonctionAffine(a, b){
    for (let i = 1; i < nbDeBoule + 1; i++) {
        id = '#boule' + i.toString()
        posX = (i - nbDeBoule/2)/multiplicateur
        posY = (a*posX + b)*multiplicateur
        calc =  (demiph-posY).toString() + 'px'
        eq = 'f(x)=' + Math.floor(a*100)/100 + 'x + ' + Math.floor(b*100)/100
        $("#fonction").html(eq)
        $("#uiFonction").html(eq)
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
        posX = (i - nbDeBoule/2)/multiplicateur
        posY = (a*Math.pow(posX, 2) + b*posX + c)*multiplicateur
        calc =  (demiph-posY).toString() + 'px'
        eq = 'f(x)=' + Math.floor(a*100)/100 + 'x² + ' + Math.floor(b*100)/100 + 'x + ' + Math.floor(c*100)/100
        $("#fonction").html(eq)
        $("#uiFonction").html(eq)
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
        posX = (i - nbDeBoule/2)/multiplicateur
        posY = (a*Math.pow(posX, 3) + b*Math.pow(posX, 2) + c*posX + d)*multiplicateur
        calc =  (demiph-posY).toString() + 'px'
        eq = 'f(x)=' + Math.floor(a*100)/100 + 'x³ + ' + Math.floor(b*100)/100 + 'x² + ' + Math.floor(c*100)/100 + 'x + ' + Math.floor(d*100)/100
        $("#fonction").html(eq)
        $("#uiFonction").html(eq)
        anime({
            targets : id,
            top : calc,
            duration : 750,
            delay : i*6
        })
    }
}

function sinusoidale(a, b, c, d){
    for (let i = 1; i < nbDeBoule + 1; i++) {
        id = '#boule' + i.toString()
        posX = (i - nbDeBoule/2)/multiplicateur
        posY = (a*10*Math.sin(b*(posX-c))+d)*multiplicateur
        calc =  (demiph-posY).toString() + 'px'
        eq = 'f(x)=' + Math.floor(a*100)/100 + 'sin(' + Math.floor(b*100)/100 + '(x-' + Math.floor(c*100)/100 + ') +' + Math.floor(d*100)/100
        $("#fonction").html(eq)
        $("#uiFonction").html(eq)
        anime({
            targets : id,
            top : calc,
            duration : 750,
            delay : i*6
        })
    }
}

function expo(a, b, c, d){
    for (let i = 1; i < nbDeBoule + 1; i++) {
        id = '#boule' + i.toString()
        posX = (i - nbDeBoule/2)/multiplicateur
        posY = (a*10*Math.exp(b*(posX-c))+d)*multiplicateur
        calc =  (demiph-posY).toString() + 'px'
        eq = 'f(x)=' + Math.floor(a*100)/100 + 'exp(' + Math.floor(b*100)/100 + '(x-' + Math.floor(c*100)/100 + ') +' + Math.floor(d*100)/100
        $("#fonction").html(eq)
        $("#uiFonction").html(eq)
        anime({
            targets : id,
            top : calc,
            duration : 750,
            delay : i*6
        })
    }
}