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
    ambiente.append("<li> VAI PRA CASA DO CARALHO </li>");
    
}
