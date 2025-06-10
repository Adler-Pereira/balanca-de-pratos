const tabua = document.getElementById("balanca");
const caixa = document.getElementById("caixa");

function calcular(){
    var boxum = document.getElementById("boxum");
    var expum = boxum.value;
    expum = expum.replace(',', '.');
    var resum = math.evaluate(expum);
    var boxdois = document.getElementById("boxdois");
    var expdois = boxdois.value;
    expdois = expdois.replace(',', '.');
    var resdois = math.evaluate(expdois);
    if(resum > resdois){
        tabua.style.transform = `rotate(-4deg)`;
        caixa.style.transform = `rotate(-4deg)`;
    }
    if(resum < resdois){
        tabua.style.transform = `rotate(4deg)`;
        caixa.style.transform = `rotate(4deg)`;
    }
    if(resum == resdois){
        tabua.style.transform = `rotate(0deg)`;
        caixa.style.transform = `rotate(0deg)`;
    }
}
setInterval(calcular);