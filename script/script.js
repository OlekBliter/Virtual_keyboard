function pressKey(key){
    document.getElementById(key).style.boxShadow = '0 0 2px #999'
    document.getElementById(key).style.transform = 'scale(0.9)'
    setTimeout(function(){
        document.getElementById(key).style.boxShadow = '0 0 10px #999'
        document.getElementById(key).style.transform = 'scale(1)' 
    }, 200)  
}
document.body.onkeydown = function(e){
    if(e.keyCode == 27){
        pressKey('esc')
    }else if(e.keyCode == 112){
        pressKey('f1')
    }else if(e.keyCode == 113){
        pressKey('f2')
    }else if(e.keyCode == 114){
        pressKey('f3')
    }else if(e.keyCode == 115){
        pressKey('f4')
    }else if(e.keyCode == 116){
        pressKey('f5')
    }else if(e.keyCode == 117){
        pressKey('f6')
    }else if(e.keyCode == 118){
        pressKey('f7')
    }else if(e.keyCode == 119){
        pressKey('f8')
    }else if(e.keyCode == 120){
        pressKey('f9')
    }else if(e.keyCode == 121){
        pressKey('f10')
    }else if(e.keyCode == 122){
        pressKey('f11')
    }else if(e.keyCode == 123){
        pressKey('f12')
    }else if(e.keyCode == 44){
        pressKey('prtSc')
    }else if(e.keyCode == 45){
        pressKey('insert')
    }else if(e.keyCode == 46){
        pressKey('delete')
    }else if(e.keyCode == 192){
        pressKey('wavyLine')
    }else if(e.keyCode == 49){
        pressKey('n1')
    }else if(e.keyCode == 50){
        pressKey('n2')
    }else if(e.keyCode == 51){
        pressKey('n3')
    }else if(e.keyCode == 52){
        pressKey('n4')
    }else if(e.keyCode == 53){
        pressKey('n5')
    }else if(e.keyCode == 54){
        pressKey('n6')
    }else if(e.keyCode == 55){
        pressKey('n7')
    }else if(e.keyCode == 56){
        pressKey('n8')
    }else if(e.keyCode == 57){
        pressKey('n9')
    }else if(e.keyCode == 48){
        pressKey('n0')
    }else if(e.keyCode == 189){
        pressKey('hyphen')
    }else if(e.keyCode == 187){
        pressKey('equal')
    }else if(e.keyCode == 8){
        pressKey('backspace')
    }else if(e.keyCode == 9){
        pressKey('tab')
    }else if(e.keyCode == 81){
        pressKey('q')
    }else if(e.keyCode == 87){
        pressKey('w')
    }else if(e.keyCode == 69){
        pressKey('e')
    }else if(e.keyCode == 82){
        pressKey('r')
    }else if(e.keyCode == 84){
        pressKey('t')
    }else if(e.keyCode == 89){
        pressKey('y')
    }else if(e.keyCode == 85){
        pressKey('u')
    }else if(e.keyCode == 73){
        pressKey('i')
    }else if(e.keyCode == 79){
        pressKey('o')
    }else if(e.keyCode == 80){
        pressKey('p')
    }else if(e.keyCode == 219){
        pressKey('bracketl')
    }else if(e.keyCode == 221){
        pressKey('bracketr')
    }else if(e.keyCode == 220){
        pressKey('backslash')
    }else if(e.keyCode == 20){
        pressKey('caps')
    }else if(e.keyCode == 65){
        pressKey('a')
    }else if(e.keyCode == 83){
        pressKey('s')
    }else if(e.keyCode == 68){
        pressKey('d')
    }else if(e.keyCode == 70){
        pressKey('f')
    }else if(e.keyCode == 71){
        pressKey('g')
    }else if(e.keyCode == 72){
        pressKey('h')
    }else if(e.keyCode == 74){
        pressKey('j')
    }else if(e.keyCode == 75){
        pressKey('k')
    }else if(e.keyCode == 76){
        pressKey('l')
    }else if(e.keyCode == 186){
        pressKey('semicolon')
    }else if(e.keyCode == 222){
        pressKey('quote')
    }else if(e.keyCode == 13){
        pressKey('enter')
    }else if(e.keyCode == 16 && e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT){
        pressKey('lshift')
    }else if(e.keyCode == 16 && e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
        pressKey('rshift')
    }else if(e.keyCode == 90){
        pressKey('z')
    }else if(e.keyCode == 88){
        pressKey('x')
    }else if(e.keyCode == 67){
        pressKey('c')
    }else if(e.keyCode == 86){
        pressKey('v')
    }else if(e.keyCode == 66){
        pressKey('b')
    }else if(e.keyCode == 78){
        pressKey('n')
    }else if(e.keyCode == 77){
        pressKey('m')
    }else if(e.keyCode == 188){
        pressKey('coma')
    }else if(e.keyCode == 190){
        pressKey('point')
    }else if(e.keyCode == 191){
        pressKey('questionMark')
    }else if(e.keyCode == 17 && e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT){
        pressKey('lctrl')
    }else if(e.keyCode == 17 && e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
        pressKey('rctrl')
    }else if(e.keyCode == 18 && e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT){
        pressKey('lalt')
    }else if(e.keyCode == 18 && e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
        pressKey('ralt')
    }else if(e.keyCode == 32){
        pressKey('space')
    }else if(e.keyCode == 91){
        pressKey('windows')
    }else if(e.keyCode == 93){
        pressKey('contextMenu')
    }else if(e.keyCode == 38){
        pressKey('topArrow')
    }else if(e.keyCode == 37){
        pressKey('leftArrow')
    }else if(e.keyCode == 40){
        pressKey('bottomArrow')
    }else if(e.keyCode == 39){
        pressKey('rightArrow')
    }
}