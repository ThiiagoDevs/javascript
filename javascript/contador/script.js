function Contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pass = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //alert('Erro faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0) {
            alert('Passo invalido! considerando Passo 1 ')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else {
            //contagem regressiiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}