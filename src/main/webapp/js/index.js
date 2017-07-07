/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




//Inicialização

alteraNomeCasa();
//testandoJSON();
listaAmbientes2();
listaDispositivos2();
//Botões
$("#btn-adicionar-ambiente").click(function (){
    var ambiente = $("#novo-ambiente").val();
    alert(ambiente + " Adicionado(a)");
    $.post( "Adiciona_Ambientes", ambiente );
});
$("#btn-editar-casa").click(function (){
    var casa = $("#nova-casa").val();
    alert("Nome da Casa Alterado");
    $.post( "Adiciona_Casa", casa );
});

//Métodos usados

function listaAmbientes2(){
    //alert("Entrei no testando post");
    console.log("entrei no testando post");
    $.ajax({
        method: "POST",
        url: "Ambientes"
      })
        .done(function( data ) {
            //alert( "Data Saved: " + msg );
            var ambiente = $(".lista-de-ambientes").find("ul");
            
            for (i=0;i<data.length;i++){
                ambiente.append("<li><button class=\"btn btn-link \" id=\"btn-ambiente-"+ data[i].serialambiente+ "\">"+ data[i].nome +"</button></li>");   
                $("#btn-ambiente-"+ data[i].serialambiente).click(function (){
                $("#ambiente-escolhido").text(this.innerHTML);
                });
            }       
  
        });
}

function listaDispositivos2(){
    //alert("Entrei no testando post");
    console.log("entrei no testando post");
    $.ajax({
        method: "POST",
        url: "Dispositivos"
      })
        .done(function( msg ) {
      //      alert( "Data Saved: " + msg );
            
            var dispositivo =$(".lista-de-dispositivos").find("ul");
            for (i=0;i<msg.length;i++){
                dispositivo.append("<li><button class=btn btn-link id="+msg[i].serialdispositivo+">"+msg[i].nome+"</button></li>");   
                $("#"+ msg[i].serialdispositivo).click(function (event){
                $("#dispositivo-escolhido").text(this.innerHTML);
                if (this.innerHTML==="lampada"){
                    iniciar(event.target.id);
                }
                });
            }
  
        });
}

function alteraNomeCasa(){
    $.post('casa', function(data){
        //alert(data);
        $("#minha-casa").text(data);
    });
}

function adicionaAmbiente(ambiente){
    alert("entrei no adicionaAmbiente");
    alert(ambiente);
    $.post( "Adiciona_Ambientes", ambiente );
}


//Funções para teste
function enviandoPOST(){
  //alert("entrei no enviandoPOST");
  $.post( "Adiciona_Ambientes", "Banheiro" );
}

function testandoJSON(){
    var ambientes =$(".lista-de-ambientes").find("ul");
    
    $.getJSON( 'Ambientes', function( data ) {
    var items = [];
    for(i=0;i<data.length;i++){
        items.push( "<li id='" + data[i].serialambiente + "'>" + data[i].nome + "</li>" );
    }

    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( ambientes );
  });
}

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
                ambiente.append("<li><button class=\"btn btn-link \" id=\"btn-ambiente"+i+"\">"+ambientes[i]+"</button></li>");   
                $("#btn-ambiente"+i).click(function (){
                $("#ambiente-escolhido").text(this.innerHTML);
                });
            }
  
        });
}

function listaDispositivos(){
    //alert("Entrei no testando post");
    console.log("entrei no testando post");
    $.ajax({
        method: "POST",
        url: "Dispositivos"
      })
        .done(function( msg ) {
      //      alert( "Data Saved: " + msg );
            var dispositivos = [];
            $.each(msg, function(index, value ) {
                dispositivos.push(value);
            });
            var dispositivo =$(".lista-de-dispositivos").find("ul");
            for (i=0;i<dispositivos.length;i++){
                dispositivo.append("<li><button class=\"btn btn-link\" id=\"btn-dispositivo"+i+"\">"+dispositivos[i]+"</button></li>");   
                $("#btn-dispositivo"+i).click(function (){
                $("#dispositivo-escolhido").text(this.innerHTML);
                if (this.innerHTML==="lampada"){
                    iniciar();
                }
                });
            }
  
        });
}

function alterarNomeAmbiente(nome){
    console.log("Alterando a caralha do nome");
    $("#ambiente-escolhido").text(nome);
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
