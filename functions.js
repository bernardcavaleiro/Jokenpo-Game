function jogar(){
    if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false &&  document.getElementById("tesoura").checked == false){
            alert("Escolha uma opção!");
        }   
        else{
            var sorteio = Math.floor(Math.random() * 3);
            switch(sorteio){
                case 0:
                    document.getElementById("robot").src="icons/rock.svg";
                    break;
                case 1:
                    document.getElementById("robot").src="icons/paper.svg";
                    break;
                case 2:
                    document.getElementById("robot").src="icons/scissors.svg";
                    break;
            }

            if ((document.getElementById("pedra").checked == true && sorteio == 0) || (document.getElementById("papel").checked == true && sorteio == 1) || (document.getElementById("tesoura").checked == true && sorteio == 2)){
                document.getElementById("placar").innerHTML="Empate";
            
            }
            else if ((document.getElementById("pedra").checked == true && sorteio == 2) || (document.getElementById("papel").checked == true && sorteio == 0) || (document.getElementById("tesoura").checked == true && sorteio == 1)){
                document.getElementById("placar").innerHTML="Vitória";

            }

            else{
                document.getElementById("placar").innerHTML="Perdeu";
            }
    }
}

function resetar(){
    document.getElementById("robot").src="robot.svg"
    document.getElementById("placar").innerHTML="";

}
