/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




//Inicialização

//Botões
//$("#btnteste").click(testandoPost);
//$("#btnteste2").click(testandoGetJSON);
//Muda o titulo da pagina com o nome da casa
$.post('casa', function(data){
        //alert(data);
        $("#minha-casa").text(data);
    });
listaAmbientes();
listaDispositivos();


//Métodos usados
function listaAmbientes(){
    //alert("Entrei no testando post");
    console.log("entrei no testando post");
    $.ajax({
        method: "POST",
        url: "Ambientes"
      })
        .done(function( msg ) {
            //alert( "Data Saved: " + msg );
            var ambientes = [];
            $.each(msg, function( index, value ) {
                ambientes.push(value);
            });
            var ambiente =$(".lista-de-ambientes").find("ul");
            for (i=0;i<ambientes.length;i++){
                ambiente.append("<li><button class=\"btn btn-link\" id=\"btnteste\">"+ambientes[i]+"</button></li>");   
            }
  
        });
}

function listaDispositivos(){
    alert("Entrei no testando post");
    console.log("entrei no testando post");
    $.ajax({
        method: "POST",
        url: "Dispositivos"
      })
        .done(function( msg ) {
            alert( "Data Saved: " + msg );
            var dispositivos = [];
            $.each(msg, function(index, value ) {
                dispositivos.push(value);
            });
            var ambiente =$(".lista-de-dispositivos").find("ul");
            for (i=0;i<dispositivos.length;i++){
                ambiente.append("<li><button class=\"btn btn-link\" id=\"btnteste\">"+dispositivos[i]+"</button></li>");   
            }
  
        });
}



//Funções para teste
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

function testandoGetJSON(){
    $.getJSON( "Ambientes", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
    var ambiente =$(".lista-de-ambientes").find("ul");
            for (i=0;i<5;i++){
                ambiente.append("<li><button class=\"btn btn-link\" id=\"btnteste\">"+msg+"</button></li>");   
            }
    //$( "<ul/>", {
    //  "class": "my-new-list",
    //  html: items.join( "" )
    //}).appendTo( "body" );
    
  });
}

function testandoAjax(){
    $.get('Ambientes', function(data){
        alert(data);
        console.log("resultado do get" + data);
        //$("#minha-casa").text(data);
    });
}

function insereAmbiente(){
    //Funcao teste para conseguir acrescentar itens na lista
    alert("To chegando no testandoAjax");
    var ambiente =$(".lista-de-ambientes").find("ul");
    for (i=0;i<5;i++){
        ambiente.append("<li><button class=\"btn btn-link\" id=\"btnteste\">Ambiente"+i+"</button></li>");   
    }
}

function atualizarCasa(){
    //Essa Funcao deveria atualizar o nome da casa no BD
    var nomeCasa = {
        "nome": $("#nova-casa").val()
    };

    $.post("Casa", nomeCasa);
}
