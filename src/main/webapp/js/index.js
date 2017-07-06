/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("#btnteste").click(testandoPost);

//colocando o nome da casa

function testandoPost(){
    alert("Entrei no testando post");
    console.log("entrei no testando post");
    $.ajax({
        method: "POST",
        url: "Ambientes"
      })
        .done(function( msg ) {
          alert( "Data Saved: " + msg );
  
  
        });
}

//teste para listar os ambinetes
function testandoJSON(){
    var ambientes =$(".lista-de-ambientes").find("ul");
    
    $.getJSON( 'Ambientes', function( data ) {
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
    $.get('Ambientes', function(data){
        alert(data);
        console.log("resultado do get" + data);
        //$("#minha-casa").text(data);
    });
}

//Funcao teste para conseguir acrescentar itens na lista
function insereAmbiente(){
    alert("To chegando no testandoAjax");
    var ambiente =$(".lista-de-ambientes").find("ul");
    for (i=0;i<5;i++){
        ambiente.append("<li><button class=\"btn btn-link\" id=\"btnteste\">Ambiente"+i+"</button></li>");   
    }
}
//Essa Funcao deveria atualizar o nome da casa no BD
function atualizarCasa(){
    var nomeCasa = {
        "nome": $("#nova-casa").val()
    };

    $.post("Casa", nomeCasa);
}
//Muda o titulo da pagina com o nome da casa
$.post('casa', function(data){
        //alert(data);
        $("#minha-casa").text(data);
    });
