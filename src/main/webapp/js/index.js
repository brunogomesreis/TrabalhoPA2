/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("#btnteste").click(atualizarCasa);

//colocando o nome da casa

//teste para listar os ambinetes
function testandoJSON(){
    var ambientes =$(".lista-de-ambientes").find("ul");
    
    $.getJSON( 'controller', function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });

    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( ambientes );
  });
}



function testandoAjax(){
    $.get('casa', function(data){
        //alert(data);
        $("#minha-casa").text(data);
    });
}


function insereAmbiente(){
    alert("To chegando no testandoAjax");
    var ambiente =$(".lista-de-ambientes").find("ul");
    for (i=0;i<5;i++){
        ambiente.append("<li><button class=\"btn btn-link\" id=\"btnteste\">Ambiente"+i+"</button></li>");   
    }
}

function atualizarCasa(){
    var nomeCasa = $("#nova-casa").val();
    $.post("Casa", nomeCasa);
}

$.get('casa', function(data){
        //alert(data);
        $("#minha-casa").text(data);
    });
