let num = document.getElementById('num')
let list = document.getElementById('lista')
let ress = document.getElementById('ress')
let valo = []



function snum(n){
if ( Number(n) >= 1 && Number(n) <= 100){
    return true
}else{
    return false
 }
}

function slista (n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false 
    }

}

function add(){
    if(snum(num.value) && !slista(num.value , valo)){
        valo.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado `
        list.appendChild(item)
        ress.innerHTML = ''
    }else{
    window.alert('valor invalido ja encontrado na lista.')
 }
 num.value = ''
 num.focus()
}

function final(){
    if(valo.length == 0 ){
        window.alert(`Adicione valores antes de finalizar `)
    }else{
        let t = valo.length
        let maior = valo[0]
        let menor = valo[0]
        let soma = 0
        let media = 0

        for(let pos in valo){
            soma += valo[pos]
            if ( valo[pos] > maior)
                maior = valo [pos]
            if (valo [pos] < menor)
                menor = valo [pos]
        }
        media = soma / t




        ress.innerHTML = ''
        ress.innerHTML += `<p>Ao todo, temos ${t} números cadastrados. </p>`
        ress.innerHTML += `<p>O maior numero informado foi ${maior}.</p>`
        ress.innerHTML += `<p>O menor valor infomado foi ${menor}.</p>`
        ress.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        ress.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`


    }
}