
    let linkLanche = document.getElementById('linkLanche')
    let linkHotDog = document.getElementById('linkHotDog')
    let linkOpcional = document.getElementById('linkOpcional')
    let linkBebida = document.getElementById('linkBebida')

    if (lanche.style.display === 'block'){
        linkLanche.style.backgroundColor = 'darkorange', 
        linkLanche.style.color = 'white'
    }

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


    if (lanche.style.display === 'block'){
        linkLanche.style.backgroundColor = 'darkorange', 
        linkLanche.style.color = 'white'
        linkHotDog.style.backgroundColor = 'whitesmoke'
        linkHotDog.style.color = 'black'
        linkOpcional.style.backgroundColor = 'whitesmoke'
        linkOpcional.style.color = 'black'
        linkBebida.style.backgroundColor = 'whitesmoke'
        linkBebida.style.color = 'black'
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

    
    if (hotDog.style.display === 'block'){
        linkHotDog.style.backgroundColor = 'darkorange', 
        linkHotDog.style.color = 'white'
        linkLanche.style.backgroundColor = 'whitesmoke'
        linkLanche.style.color = 'black'
        linkOpcional.style.backgroundColor = 'whitesmoke'
        linkOpcional.style.color = 'black'
        linkBebida.style.backgroundColor = 'whitesmoke'
        linkBebida.style.color = 'black'
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

    if (bebida.style.display === 'block'){
        linkBebida.style.backgroundColor = 'darkorange', 
        linkBebida.style.color = 'white'
        linkLanche.style.backgroundColor = 'whitesmoke'
        linkLanche.style.color = 'black'
        linkOpcional.style.backgroundColor = 'whitesmoke'
        linkOpcional.style.color = 'black'
        linkHotDog.style.backgroundColor = 'whitesmoke'
        linkHotDog.style.color = 'black'
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

    if (opcional.style.display === 'block'){
        linkOpcional.style.backgroundColor = 'darkorange', 
        linkOpcional.style.color = 'white'
        linkLanche.style.backgroundColor = 'whitesmoke'
        linkLanche.style.color = 'black'
        linkBebida.style.backgroundColor = 'whitesmoke'
        linkBebida.style.color = 'black'
        linkHotDog.style.backgroundColor = 'whitesmoke'
        linkHotDog.style.color = 'black'
    }
}
