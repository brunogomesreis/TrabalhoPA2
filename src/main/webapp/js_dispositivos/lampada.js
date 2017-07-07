

function iniciar(id){
    // A DIV DA LÂMPADA FOI FEITA NO HTML NORMAL E DEPOIS COPIADA PARA O JAVASCRIPT ;))
    alert("TO NO LAMPADA! #CHUPA");
    alert(id);
    
    
    //var dispositivo =$("#lista-de-dispositivos");
    
        document.body.appendChild("<div class='panel panel-default'>OLAAAA</div>");
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




