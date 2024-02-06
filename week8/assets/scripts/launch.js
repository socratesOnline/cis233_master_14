function tryLaunch() {
    var blnLaunch = 1;

    if (blnGas == 0) {
        blnLaunch = 0;
        strMessage = 'You are out of gas';
    }

    if (blnBatt == 0) {
        blnLaunch = 0;
        strMessage = 'You are out of charge';
    }

    if (blnBrake == 1) {
        blnLaunch = 0;
        strMessage = 'You need to release the parking brake'
    }

    if (blnTrac == 1) {
        blnLaunch = 0;
        strMessage = 'You need to disengage traction control'
    }

    if (intMode != 3) {
        blnLaunch = 0;
        strMessage = 'You need to engage sport mode'
    }

    if (blnLaunch == 0) {
        document.getElementById('msg').innerHTML = strMessage;
        new Audio('./assets/media/sputter.mp3').play();
    } else {
        document.getElementById('launch').src = './assets/images/lca1.png';
        document.getElementById('msg').innerHTML = '';
        new Audio('./assets/media/launch.mp3').play();
    }
}