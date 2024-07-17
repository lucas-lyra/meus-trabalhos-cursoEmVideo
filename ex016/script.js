function valor(){
 var a = document.getElementById('a')
 var b = document.getElementById('b')
 var c =  document.getElementById('c')
 var res = document.getElementById('res')

 if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0 ){
   window.alert("[erro] Falta dados !!!!")    
 }else{
    res.innerHTML = 'contando:'
    var i = Number(a.value)
    var f = Number(b.value)
    var p = Number(c.value)
    
    if(i < f){
        for (var h = i; h <= f; h += p ){
        res.innerHTML += ` ${h} \u{1F449}`
    }
    res.innerHTML+= `\u{1f3c1}`
    }

    
  }
}
