
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = rosa;
        this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            if (carArr.length >= 2) {
                el.checked = false;
                alert("Você só pode comparar 2 veículos por vez");
                return;
            } 
           
            if (GetCarArrPosition(carArr, carClass) === -1) {
                carArr.push(carClass); //seleciona o carro marcado e adiciona no array de comparação (lista)
            }
            
        } else {
            const index = GetCarArrPosition(carArr, carClass); //index = referencia do array
            if (index !== -1) {
                carArr.splice (index, 1); //splice modifica o array, ou seja remove a seleção do carro
            }
        } 
        botaoComparar();
    } else {
        throw "You need set a Car Class";
    }
}

function botaoComparar() {
    const compareBtn = document.querySelector("button[onclick ='ShowCompare'");

    if (carArr.length === 2){ //habilitando o botão apenas se array for estritamente igual a 2
        compareBtn.disabled = false;
        compareBtn.style.opacity = 1; //equivale a 100% de opacidade
        compareBtn.style.cursor = "pointer";
    } else {
        compareBtn.disabled = true;
        compareBtn.style.opacity = 0.5; 
        compareBtn.cursor = "not-allowed";
    }
}


function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    
}
