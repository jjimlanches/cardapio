
function mostrarLanche(){
    let lanche = document.getElementById('lanche')
    let hotDog = document.getElementById('hotDog')
    let bebida = document.getElementById('bebida')
    let opcional = document.getElementById('opcional')

    if(lanche.style.display === 'none'){
        lanche.style.display = 'block'
        hotDog.style.display = 'none'
        bebida.style.display = 'none'
        opcional.style.display = 'none'
    }
}

function mostrarHotDog(){
    let lanche = document.getElementById('lanche')
    let hotDog = document.getElementById('hotDog')
    let bebida = document.getElementById('bebida')
    let opcional = document.getElementById('opcional')
    
    
    if(hotDog.style.display === 'none'){
        hotDog.style.display = 'block'
        lanche.style.display = 'none'
        bebida.style.display = 'none'
        opcional.style.display = 'none'
    }
}

function mostrarBebida(){
    let lanche = document.getElementById('lanche')
    let hotDog = document.getElementById('hotDog')
    let bebida = document.getElementById('bebida')
    let opcional = document.getElementById('opcional')
    
    if(bebida.style.display === 'none'){
        hotDog.style.display = 'none'
        lanche.style.display = 'none'
        bebida.style.display = 'block'
        opcional.style.display = 'none'
    } 
}

function mostrarOpcional(){
    let lanche = document.getElementById('lanche')
    let hotDog = document.getElementById('hotDog')
    let bebida = document.getElementById('bebida')
    let opcional = document.getElementById('opcional')
    
    if(opcional.style.display === 'none'){
        hotDog.style.display = 'none'
        lanche.style.display = 'none'
        bebida.style.display = 'none'
        opcional.style.display = 'block'
    }
}
