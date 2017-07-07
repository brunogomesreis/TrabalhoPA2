

function iniciar(id){
    // A DIV DA LÂMPADA FOI FEITA NO HTML NORMAL E DEPOIS COPIADA PARA O JAVASCRIPT ;))
    //alert("TO NO LAMPADA! #CHUPA");
    //alert(id);
    
    
    var painel = $("#controle-dispositivo");
    painel.append("<h1>Controle da Lampada "+ id + "</h1>");
    painel.append(" <button class=\"btn-success btn\" id=\"liga-lampada-"+id+"\">Liga</button>");
    painel.append(" <button class=\"btn-danger btn\" id=\"desliga-lampada-"+id+"\">Desliga</button>");
    painel.append(" <img src=\"images/luz-apagada.png\" id=\"luz-lampada-"+id+"\">");
    $("#liga-lampada-"+id).click(function(){
        //alert("entrei no liga-lampada");
       $("#luz-lampada-"+id).attr("src","images/luz-acesa.png"); 
    });
    $("#desliga-lampada-"+id).click(function(){
        //alert("entrei no liga-lampada");
       $("#luz-lampada-"+id).attr("src","images/luz-apagada.png"); 
    });
   
    
    
    //var divJanelaDaLampada = document.createElement('div');
    
  //  divJanelaDaLampada.setAttribute('id',"janela"+id);
  //  divJanelaDaLampada.style.display="block"; 
  //  divJanelaDaLampada.innerHTML= 
            
   // document.$("#selecionar-dispositivo").appendChild(divJanelaDaLampada);
    
    //linkPadrao(disp.abrirjanela,function(){abrirJanelaDaLampada(disp);});
    //linkPadrao(disp.fecharjanela,function(){fecharJanelaDaLampada(disp);});

    //linkPadrao('perguntar'+disp.serial,function(){ 
        // Fazer pedido AJAX para classe "eel418.drivers.Lampada"
      //  var data = {};
       // data.nomeDoDriver = "eel418.modular.drivers.Lampada";
       // data.serial = disp.serial;
       // fazerPedidoPostAJAXcomPromise(data,'drivers')
        //    .then(receberEstadoDaLampada)
        //    .catch(function(){alert('ERRO NA LEITURA DOS DISPOSITIVOS');});
   // });

   // function receberEstadoDaLampada(xhr){
   //     var estado = xhr.response.estado;
        // fazer alguma coisa...
    //    document.getElementById('respostaEstado'+disp.serial).innerHTML = estado;
   // }
    
//alert('Iniciou a Lâmpada');    
}

function abrirJanelaDaLampada(disp){
    
    // Acessar a classe JAVA correspondente para perguntar sobre o estado...
    
    document.getElementById(disp.iddiv).style.display='block';
}

function fecharJanelaDaLampada(disp){
    document.getElementById(disp.iddiv).style.display='none';
}
//------------------------------------------------------------------------------
function fazerPedidoPostAJAXcomPromise(sendData,destino){
        return new Promise(function (resolve,reject) {
            var data = JSON.stringify(sendData);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', destino);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//            xhr.timeout = 5000;
            xhr.responseType = 'json';
            xhr.onload = function(){
                if (xhr.status === 200) {
                    resolve(xhr);
                } else {
                    reject('Erro de status<>200.');
                }
            };
            // Handle network errors
            xhr.onerror = function() {
                reject('Outros erros de rede...');
            };
            xhr.send(data);
        });
}
//==============================================================================




