var nbDeBoule = 250
var demiph = $(window).height()/2 
var precisionEchelle = 20
var taille = $(window).width()/nbDeBoule
var id
var quitterTitre = false
var alea
var aleaNow
var boucle = 0
var multiplicateur = 10
var menuOuvert = false
var bouleXSouris
var idBouleSouris
var coord
var commence = false

//fonction quand souris bouge

$('#container').on('click', (e) => {
    if(e.pageX > 100 && e.pageY > 200 && !menuOuvert || menuOuvert && e.pageX > 300){
        bouleXSouris = Math.floor(e.pageX/$(window).width()*nbDeBoule)
        idBouleSouris = '#boule' + bouleXSouris.toString()
        anime({
            targets: "#coordDiv",
            duration: 250,
            left : $(idBouleSouris).css('left'),
            top : $(idBouleSouris).css('top'),
            easing : 'easeOutCubic'
        })
        //s$("#coordDiv").css({'left' : $(idBouleSouris).css('left'), 'top' : $(idBouleSouris).css('top')})
        coord = '(' + ((bouleXSouris-nbDeBoule/2)/multiplicateur).toString() + ';' + ((-(parseInt($(idBouleSouris).css('top'))-$(window).height()/2))/multiplicateur).toString() + ')'
        $("#coord").html(coord)
    }
    if(menuOuvert && e.pageX > 300){
        changeMenu()
    }
})

//fonction pour ouvrir le menu

function changeMenu(){
    if(!menuOuvert){
        menuOuvert = true
        anime({
            targets : '#ui',
            left : '0',
            duration : 1000,
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
            left : '-301px',
            duration : 1000,
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
    delay : 2000
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
        left : '-301px',
        duration : 1500,
        easing : 'linear',
        delay: 500,
        easing : 'easeOutCubic'
    })
    $("#coordDiv").css({'display' : 'flex', 'top' : '-60px', 'left' : '0'})
    commence = true
}

function bouclef(){
    setTimeout(() => {
        alea =  Math.floor(Math.random() * (6 - 1 + 1) + 1)
        while(alea == aleaNow){
            alea =  Math.floor(Math.random() * (6 - 1 + 1) + 1)
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
        if(alea == 6){
            inverse(aa, ab, ac, ad)
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
        if(bouleXSouris == i){
            anime({
                targets : '#coordDiv',
                top : calc,
                duration : 750,
                delay : i*6
            })
            coord = '(' + ((bouleXSouris-nbDeBoule/2)/multiplicateur).toString() + ';' + ((-(parseInt(calc)-$(window).height()/2))/multiplicateur).toString() + ')'
            $("#coord").html(coord)
        }
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
        if(bouleXSouris == i){
            anime({
                targets : '#coordDiv',
                top : calc,
                duration : 750,
                delay : i*6
            })
            coord = '(' + ((bouleXSouris-nbDeBoule/2)/multiplicateur).toString() + ';' + ((-(parseInt(calc)-$(window).height()/2))/multiplicateur).toString() + ')'
            $("#coord").html(coord)
        }
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
        if(bouleXSouris == i){
            anime({
                targets : '#coordDiv',
                top : calc,
                duration : 750,
                delay : i*6
            })
            coord = '(' + ((bouleXSouris-nbDeBoule/2)/multiplicateur).toString() + ';' + ((-(parseInt(calc)-$(window).height()/2))/multiplicateur).toString() + ')'
            $("#coord").html(coord)
        }
    }
}

function sinusoidale(a, b, c, d){
    for (let i = 1; i < nbDeBoule + 1; i++) {
        id = '#boule' + i.toString()
        posX = (i - nbDeBoule/2)/multiplicateur
        posY = (a*Math.sin(b*(posX-c))+d)*multiplicateur
        calc =  (demiph-posY).toString() + 'px'
        eq = 'f(x)=' + Math.floor(a*100)/100 + 'sin(' + Math.floor(b*100)/100 + '(x-' + Math.floor(c*100)/100 + ')) +' + Math.floor(d*100)/100
        $("#fonction").html(eq)
        $("#uiFonction").html(eq)
        anime({
            targets : id,
            top : calc,
            duration : 750,
            delay : i*6
        })
        if(bouleXSouris == i){
            anime({
                targets : '#coordDiv',
                top : calc,
                duration : 750,
                delay : i*6
            })
            coord = '(' + ((bouleXSouris-nbDeBoule/2)/multiplicateur).toString() + ';' + ((-(parseInt(calc)-$(window).height()/2))/multiplicateur).toString() + ')'
            $("#coord").html(coord)
        }
    }
}

function expo(a, b, c, d){
    for (let i = 1; i < nbDeBoule + 1; i++) {
        id = '#boule' + i.toString()
        posX = (i - nbDeBoule/2)/multiplicateur
        posY = (a*Math.exp(b*(posX-c))+d)*multiplicateur
        calc =  (demiph-posY).toString() + 'px'
        eq = 'f(x)=' + Math.floor(a*100)/100 + 'exp(' + Math.floor(b*100)/100 + '(x-' + Math.floor(c*100)/100 + ')) +' + Math.floor(d*100)/100
        $("#fonction").html(eq)
        $("#uiFonction").html(eq)
        anime({
            targets : id,
            top : calc,
            duration : 750,
            delay : i*6
        })
        if(bouleXSouris == i){
            anime({
                targets : '#coordDiv',
                top : calc,
                duration : 750,
                delay : i*6
            })
            coord = '(' + ((bouleXSouris-nbDeBoule/2)/multiplicateur).toString() + ';' + ((-(parseInt(calc)-$(window).height()/2))/multiplicateur).toString() + ')'
            $("#coord").html(coord)
        }
    }
}

function inverse(a, b, c, d){
    for (let i = 1; i < nbDeBoule + 1; i++) {
        id = '#boule' + i.toString()
        posX = (i - nbDeBoule/2)/multiplicateur
        if(b*(posX-c) != 0){
            posY = (a*(1/(b*(posX-c)))+d)*multiplicateur
        }
        calc =  (demiph-posY).toString() + 'px'
        eq = 'f(x)=' + Math.floor(a*100)/100 + '/(' + Math.floor(b*100)/100 + '(x-' + Math.floor(c*100)/100 + '))) +' + Math.floor(d*100)/100
        $("#fonction").html(eq)
        $("#uiFonction").html(eq)
        anime({
            targets : id,
            top : calc,
            duration : 750,
            delay : i*6
        })
        if(bouleXSouris == i){
            anime({
                targets : '#coordDiv',
                top : calc,
                duration : 750,
                delay : i*6
            })
            coord = '(' + ((bouleXSouris-nbDeBoule/2)/multiplicateur).toString() + ';' + ((-(parseInt(calc)-$(window).height()/2))/multiplicateur).toString() + ')'
            $("#coord").html(coord)
        }
    }
}

//tracer la fonction choisi


var fonctionChoisi
var af = 1
var bf = 1
var cf = 1
var df = 1

//quand bouton changer recolter valeurs et changer en fonction

function change(value, index){
    af = parseInt($("#a").val())
    bf = parseInt($("#b").val())
    cf = parseInt($("#c").val())
    df = parseInt($("#d").val())
    fonctionChoisi = $("#selectBase").val()
    if(fonctionChoisi == "identité"){
        $('#fonctionA').html('f(x)=x')
        af = 1
        bf = 0
        fonctionChoisi = 'affine'
    }
    if(fonctionChoisi == "carré"){
        $('#fonctionA').html('f(x)=x²')
        af = 1
        bf = 0
        cf = 0
        fonctionChoisi = "p2"
    }
    if(fonctionChoisi == "cube"){
        $('#fonctionA').html('f(x)=x³')
        af = 1
        bf = 0
        cf = 0
        df = 0
        fonctionChoisi = "p3"
    }
    if(fonctionChoisi == "sin"){
        $('#fonctionA').html('f(x)=sin(x)')
        af = 1
        bf = 1
        cf = 0
        df = 0
        fonctionChoisi = "sint"
    }
    if(fonctionChoisi == "exp"){
        $('#fonctionA').html('f(x)=exp(x)')
        af = 1
        bf = 1
        cf = 0
        df = 0
        fonctionChoisi = "expt"
    }
    if(fonctionChoisi == "inverse"){
        $('#fonctionA').html('f(x)=exp(x)')
        af = 1
        bf = 1
        cf = 0
        df = 0
        fonctionChoisi = "inverset"
    }
    if(fonctionChoisi == "affine"){
        $('#fonctionA').html('f(x)=' + Math.floor(af*100)/100 + 'x + ' + Math.floor(bf*100)/100)
        fonctionChoisi = "affine"
    }
    if(fonctionChoisi == "p2"){
        $('#fonctionA').html('f(x)=' + Math.floor(af*100)/100 + 'x² + ' + Math.floor(bf*100)/100 + 'x + ' + Math.floor(cf*100)/100)
        fonctionChoisi = "p2"
    }
    if(fonctionChoisi == "p3"){
        $('#fonctionA').html('f(x)=' + Math.floor(af*100)/100 + 'x³ + ' + Math.floor(bf*100)/100 + 'x² + ' + Math.floor(cf*100)/100 + 'x + ' + Math.floor(df*100)/100)
        fonctionChoisi = "p3"
    }
    if(fonctionChoisi == "sint"){
        $('#fonctionA').html('f(x)=' + Math.floor(af*100)/100 + 'sin(' + Math.floor(bf*100)/100 + '(x-' + Math.floor(cf*100)/100 + ')) +' + Math.floor(df*100)/100)
        fonctionChoisi = "sint"
    }
    if(fonctionChoisi == "expt"){
        $('#fonctionA').html('f(x)=' + Math.floor(af*100)/100 + 'exp(' + Math.floor(bf*100)/100 + '(x-' + Math.floor(cf*100)/100 + ')) +' + Math.floor(df*100)/100)
        fonctionChoisi = "expt"
    }
    if(fonctionChoisi == "inverset"){
        $('#fonctionA').html('f(x)=' + Math.floor(af*100)/100 + '/(' + Math.floor(bf*100)/100 + '(x-' + Math.floor(cf*100)/100 + '))) +' + Math.floor(df*100)/100)
        fonctionChoisi = "inverset"
    }
}
function trace(){
        if (fonctionChoisi == 'affine'){
            fonctionAffine(af, bf)
        }else if(fonctionChoisi == 'p2'){
            fonctionPsecondDeg(af, bf, cf)
        }else if(fonctionChoisi == 'p3'){
            fonctionPtroisiemeDeg(af, bf, cf, df)
        }else if(fonctionChoisi == 'sint'){
            sinusoidale(af, bf, cf, df)
        }else if(fonctionChoisi == 'expt'){
            expo(af, bf, cf, df)
        }else if(fonctionChoisi == 'inverset'){
            inverse(af, bf, cf, df)
        }
}