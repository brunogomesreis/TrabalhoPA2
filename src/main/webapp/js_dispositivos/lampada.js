

function iniciar(){
    // A DIV DA LÂMPADA FOI FEITA NO HTML NORMAL E DEPOIS COPIADA PARA O JAVASCRIPT ;))
    alert("TO NO LAMPADA! #CHUPA");
    
    /*
    var divJanelaDaLampada = document.createElement('div');
    divJanelaDaLampada.setAttribute('id',disp.iddiv);
    divJanelaDaLampada.style.cssText = 
            "position:absolute;top:100px;left:550px;z-index:100;width:400px;height:400px;"+
            "border:3px solid aqua;border-radius:20px;background-color:cornflowerblue;"+
            "opacity:0.95;text-align:center;display:none;";
    divJanelaDaLampada.innerHTML = 
            '<span id="'+disp.fecharjanela+'" style="color:white;font-weight:bold;">FECHAR</span>'+
            '<input type=\"hidden\" id=\"'+disp.serial+'\" name=\"'+disp.serial+'\" value=\"'+disp.serial+'\"/>'+
            '<br><br><br><br><br>'+
            disp.nome+'<br>'+
            '<div style="width:150px;height:100px;text-align:left;margin-left:auto;'+
            'margin-right:auto;color:white;font-weight:bold;">'+
            '<input type="radio" name="estadoLampada'+disp.serial+'" value="des" checked> Desligada<br>'+
            '<input type="radio" name="estadoLampada'+disp.serial+'" value="lig"> Ligada<br></div>'+
            '<a href=\"#\" id=\"perguntar'+disp.serial+'\">Perguntar estado ao servidor</a><br>'+
            'Recebeu estado: <span id=\"respostaEstado'+disp.serial+'\"></span>';
    document.body.appendChild(divJanelaDaLampada);
    
    linkPadrao(disp.abrirjanela,function(){abrirJanelaDaLampada(disp);});
    linkPadrao(disp.fecharjanela,function(){fecharJanelaDaLampada(disp);});

    linkPadrao('perguntar'+disp.serial,function(){ 
        // Fazer pedido AJAX para classe "eel418.drivers.Lampada"
        var data = {};
        data.nomeDoDriver = "eel418.modular.drivers.Lampada";
        data.serial = disp.serial;
        fazerPedidoPostAJAXcomPromise(data,'drivers')
            .then(receberEstadoDaLampada)
            .catch(function(){alert('ERRO NA LEITURA DOS DISPOSITIVOS');});
    });

    function receberEstadoDaLampada(xhr){
        var estado = xhr.response.estado;
        // fazer alguma coisa...
        document.getElementById('respostaEstado'+disp.serial).innerHTML = estado;
    }
    */
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




