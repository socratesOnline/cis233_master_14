var blnGas = 0, blnBatt = 0, blnBrake = 1, blnTrac = 1, intMode = 0;

showTime();

function getGas(){
    if (blnGas == 0) {
        blnGas = 1;
        document.getElementById('gas').src = './assets/images/gas1.png';
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_1.png'
    } else {
        blnGas = 0;
        document.getElementById('gas').src = './assets/images/gas0.png';
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_0.png'
    }
}

function chargeBattery(){
    if (blnBatt == 0) {
        blnBatt = 1;
        document.getElementById('batt').src = './assets/images/batt1.png';
        document.getElementById('bttn_batt').src = './assets/images/bttn_batt_1.png'
    } else {
        blnBatt = 0;
        document.getElementById('batt').src = './assets/images/batt0.png';
        document.getElementById('bttn_batt').src = './assets/images/bttn_batt_0.png'
    }
}

function setBrake() {
    if (blnBrake == 0) {
        blnBrake = 1;
        document.getElementById('brake').src = './assets/images/p1.png';
        document.getElementById('bttn_park').src = './assets/images/bttn_park_1.png'
    } else {
        blnBrake = 0;
        document.getElementById('brake').src = './assets/images/p0.png';
        document.getElementById('bttn_park').src = './assets/images/bttn_park_0.png'
    }
}

function setTrac() {
    if (blnTrac == 0) {
        blnTrac = 1;
        document.getElementById('trac').src = './assets/images/trac0.png';
        document.getElementById('bttn_trac').src = './assets/images/bttn_trac_1.png'
    } else {
        blnTrac = 0;
        document.getElementById('trac').src = './assets/images/trac1.png';
        document.getElementById('bttn_trac').src = './assets/images/bttn_trac_0.png'
    }
}

function setMode(){
    var obj = document.getElementById('mode');
    var img = document.getElementById('bttn_shifter');
    switch(intMode) {
        case 0:
            obj.innerHTML = 'ECO PRO';
            intMode = 1;
            img.style.top = '720px';
            break;
        case 1:
            obj.innerHTML = "COMFORT";
            intMode = 2;
            img.style.top = '740px';
            break;
        case 2: 
            obj.innerHTML = "SPORT"
            intMode = 3;
            img.style.top = '760px';
            break;
        default:
            obj.innerHTML = "PARK"
            intMode = 0;
            img.style.top = '700px';
            break;
    }
}
