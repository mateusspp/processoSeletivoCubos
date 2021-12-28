function solucao(tamanho) {
	//seu codigo aqui
    foto = tamanho
    if (foto <= 5) {console.log("OK");}
    else {console.log("FOTO MUITO GRANDE")};
    
}

function processData(input) {
    solucao(Number(input));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
