<%-- 
    Document   : index
    Created on : 09/06/2017, 11:21:29
    Author     : bruno
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Automaçao Residencial</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/index.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
    </head>
    
    <body>
        <header>
                <nav class="navbar navbar-default">
                    <div class="container">

                        <div class="navbar-header">
                            
                            <button type="button" class="btn btn-default" data-toggle="collapse" data-target="#navbar-automacao" aria-label="Left Align">
                                <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                            </button>

                        </div>

                        <div class="collapse" id="navbar-automacao">
                            <ul class="nav navbar-nav">
                                <li><a href="#editar-casa">Editar Casa</a></li>
                                <li><a href="#adicionar-ambiente">Adicionar Ambiente</a></li>
                                <li><a href="#adicionar-dispositivo">Adicionar Dispositivo</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            
        <div id="divMaisExterna">
            <div class="container">
                <h1>Minha Casa</h1>
                <div id="painel-todos" class="panel-group">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h2>Ambiente</h2>
                            <h3 class="panel-title" data-toggle="collapse" data-target="#selecionar-ambiente" data-parent="#painel-todos">Escolher Ambiente</h3>
                        </div>
                        <div id="selecionar-ambiente" class="collapse"> 
                            <div class="panel-body">
                                <p>Aqui entra a seleção do ambiente</p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h2>Dispositivo</h2>
                
                            <h3 class="panel-title" data-toggle="collapse" data-target="#selecionar-dispositivo" data-parent="#painel-todos">Escolher Dispositivo</h3>
                        </div>
                        <div id="selecionar-dispositivo" class="collapse"> 
                            <div class="panel-body">
                                <p>Aqui entra a seleção do dispositivo</p>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>

        </div>
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
    </body>
</html>
