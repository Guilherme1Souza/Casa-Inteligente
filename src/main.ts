const buttonLigar = document.querySelector('button') as HTMLButtonElement | null;
const img = document.querySelector<HTMLImageElement>('img');

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
        } else if (cliques > 3) {}
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