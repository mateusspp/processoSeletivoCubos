// Foi o primeiro código de JS que eu fiquei "travado", por isto, ele está completo e é o primeiro a ser posto aqui. 

function solucao(idade, ehEmancipada, documentacaoOK, score) {
	//seu codigo aqui
    const ideal = idade >= 18 || ehEmancipada == true;
     
    if (ideal && documentacaoOK == true && score < 500) {console.log(500);}
    else if (ideal && documentacaoOK == true && score <= 699) {console.log(1500);}
    else if (ideal && documentacaoOK == true && score <= 1000) {console.log(3000);}
    else {console.log("CONTA NEGADA");}
        
        
        //Idade >= 18 : Idade maior ou igual. 
        //Idade <= 18: Menor ou igual a 18.
}


function processData(input) {
    const { idade, ehEmancipada, documentacaoOK, score } = JSON.parse(input);
    solucao(idade, ehEmancipada, documentacaoOK, score);
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