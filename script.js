function mostrarLanche(){
    let lanche = document.getElementById('lanche')
    let hotDog = document.getElementById('hotDog')
    let bebida = document.getElementById('bebida')
    let opcional = document.getElementById('opcional')
    let linkLanche = document.getElementById('linkLanche')
    let linkHotDog = document.getElementById('linkHotDog')
    let linkBebida = document.getElementById('linkBebida')
    let linkOpicional = document.getElementById('linkOpicional')
    
    if(lanche.style.display === 'none'){
        lanche.style.display = 'block'
        hotDog.style.display = 'none'
        bebida.style.display = 'none'
        opcional.style.display = 'none'
    }

    if(lanche.style.display === 'block'){
        linkLanche.style.color = '#ED3437'
        linkHotDog.style.color = 'black'
        linkBebida.style.color = 'black'
        linkOpicional.style.color = 'black'
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

    if(hotDog.style.display === 'block'){
        linkLanche.style.color = 'black'
        linkHotDog.style.color = '#ED3437'
        linkBebida.style.color = 'black'
        linkOpicional.style.color = 'black'
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

    if(bebida.style.display === 'block'){
        linkLanche.style.color = 'black'
        linkHotDog.style.color = 'black'
        linkBebida.style.color = '#ED3437'
        linkOpicional.style.color = 'black'
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

    if(opcional.style.display === 'block'){
        linkLanche.style.color = 'black'
        linkHotDog.style.color = 'black'
        linkBebida.style.color = 'black'
        linkOpicional.style.color = '#ED3437'
    }
}


