function verificar () {
var clube = window.document.getElementById('txt')
var imagem = window.document.getElementById('img1')
var n = window.document.getElementById('name')
var res = window.document.getElementById('res')

var time = (clube.value)
var nome = (n.value)

res.innerHTML = `O seu nome é ${nome} e você torce para o ${time}!`

if (time == 'corinthians' || time == 'Corinthians') {
    imagem.src = './imagens/corinthians.jpeg'
} else if (time == 'Flamengo' || time == 'flamengo') {
    imagem.src = './imagens/flamengo.jpeg'
} else if (time == 'palmeiras' || time == 'Palmeiras') {
    imagem.src = './imagens/palmeiras.jpeg'
} else if(time == 'sao paulo' || time =='são paulo' || time =='São Paulo' || time == 'São paulo') {
    imagem.src = './imagens/saopaulo.jpeg'
} else if(time == 'santos' || time == 'Santos') {
    imagem.src = './imagens/santos.jpeg'
} else {
    imagem.src = './imagens/bola.jpeg'
}
}
