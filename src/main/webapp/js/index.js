/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("#btnteste").click(insereAmbiente);

function testandoAjax(){
    $("#ambiente-escolhido").text("tomar no cu");
}

function insereAmbiente(){
    var ambiente =$(".lista-de-ambientes").find("ul");
    for (i=0;i<5;i++){
        ambiente.append("<li><button class=\"btn btn-link\" id=\"btnteste\">Ambiente"+i+"</button></li>");   
    }
}
