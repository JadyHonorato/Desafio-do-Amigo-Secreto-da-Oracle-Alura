let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == '') {
        alert('Você precisa digitar um nome.');
        return;
    }

    let listaAmigos = document.getElementById('listaAmigos');
    amigos.push(nomeAmigo);

    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigo;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo;
    }
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length < 4) {
        alert('Você precisa de pelo menos 4 amigos para o sorteio.');
        return;
    }
    
    embaralha(amigos);
    let resultado = document.getElementById('resultado');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            resultado.innerHTML = resultado.innerHTML + amigos[i] + ' -> ' + amigos[0] + '<br>';
        } else {
            resultado.innerHTML = resultado.innerHTML + amigos[i] + ' -> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').textContent = '';
    document.getElementById('resultado').textContent = '';
}
