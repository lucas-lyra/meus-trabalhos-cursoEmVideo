function tb(){
    var a = document.getElementById('a')
    var b = document.getElementById('seltab')
    if(a.value.length == 0) {
      window.alert('por favor prencha tudo ')
}   else{
    var an = Number(a.value)
    var c = 1
    b.innerHTML = ''

    while (c <= 10) {
        var item = document.createElement('option')
        item.text = `${an} x ${c} = ${an*c}`
        b.appendChild(item)
        c++
        
    }

 }
}