function corFundo(){
    let color = ["blue","red","yellow"]
    document.getElementById("txt").style.backgroundColor = color[1]
    document.getElementById("txw").style.backgroundColor = color[2]
    document.getElementById("txw").style.color = color[0]
}
function reverterCor(){
    let color = ["#80ff00","black"]
    document.getElementById("txt").style.backgroundColor = color[1]
    document.getElementById("txw").style.backgroundColor = color[1]
    document.getElementById("txw").style.color = color[0]
}