const buttonLigar = document.querySelector('button') as HTMLButtonElement;
const img = document.querySelector<HTMLImageElement>('img');
const buttonSala = document.getElementById('btnSala') as HTMLButtonElement;
const buttonQuarto = document.getElementById('btnQuarto') as HTMLButtonElement;
const buttonCozinha = document.getElementById('btnCozinha') as HTMLButtonElement;

let cliques = 0;

if (buttonLigar) {
    buttonLigar.addEventListener('click', () => {
        cliques++;
        if (cliques === 1) {
            ligarLampada();
        } else if (cliques === 2) {
            desligarLampada();
        } else if (cliques === 3) {
            quebrarLampada();
        }
    });
}

if (buttonSala) {
    buttonSala.addEventListener('click', () => {
        buttonSala.style.backgroundColor = 'green'; 
        buttonCozinha.style.color = 'black';
        buttonSala.style.color = 'white'; 
        buttonCozinha!.style.backgroundColor = '';
        buttonQuarto!.style.backgroundColor = '';
        resetarLampada();
    });
}

if (buttonQuarto) {
    buttonQuarto.addEventListener('click', () => {
        buttonQuarto.style.backgroundColor = 'green'; 
        buttonSala.style.color = 'black'; 
        buttonQuarto.style.color = 'white'; 
        buttonSala!.style.backgroundColor = '';
        buttonCozinha!.style.backgroundColor = '';
        resetarLampada();
    });
}

if (buttonCozinha) {
    buttonCozinha.addEventListener('click', () => {
        buttonCozinha.style.backgroundColor = 'green'; 
        buttonQuarto.style.color = 'black';
        buttonCozinha.style.color = 'white';
        buttonQuarto!.style.backgroundColor = '';
        buttonSala!.style.backgroundColor = '';
        resetarLampada();
    });
}

function ligarLampada() {
    if (buttonLigar) {  
        buttonLigar.textContent = 'Lâmpada Ligada!';
        buttonLigar.style.backgroundColor = 'yellow';
        buttonLigar.style.color = 'black'; 
        img!.src = '../img/ligada.jpg';  
    }
}

function desligarLampada() {
    if (buttonLigar) {  
        buttonLigar.textContent = 'Lâmpada Desligada!';
        buttonLigar.style.backgroundColor = 'black';
        buttonLigar.style.color = 'white';
        img!.src = './img/b983w.jpg';  
    }
}

function quebrarLampada() {
    if (buttonLigar) {  
        buttonLigar.textContent = 'Lâmpada Quebrada!';
        buttonLigar.style.backgroundColor = 'red';
        buttonLigar.style.color = 'white';
        img!.src = './img/quebrada.jpg';  
        buttonLigar.disabled = true;
    }
}

function resetarLampada() {
    buttonLigar!.textContent = 'Ligar!';
    buttonLigar!.style.backgroundColor = 'white';
    buttonLigar!.style.color = 'black';
    img!.src = './img/b983w.jpg'; 
    cliques = 0; 
    buttonLigar!.disabled = false;

}