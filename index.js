let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'sin'){
            screen.value = Math.sin(screenValue);
        }
        else if (buttonText == 'cos'){
            screen.value = Math.cos(screenValue);
        }
        else if (buttonText == 'tan'){
            screen.value = Math.tan(screenValue);
        }
        else if (buttonText == 'log'){
            screen.value = Math.log(screenValue);
        }
        else if (buttonText == 'pi'){
            buttonText = '3.14';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        

    })
    
}


