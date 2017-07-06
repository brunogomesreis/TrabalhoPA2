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
                                <li><button class="btn btn-link" data-toggle="collapse" data-target="#editar-casa" data-parent="#painel-cofiguracao">Editar Casa</button></li>
                                <li><button class="btn btn-link" data-toggle="collapse" data-target="#adicionar-ambiente" data-parent="#painel-cofiguracao">Adicionar Ambiente</button></li>
                                <li><button class="btn btn-link" data-toggle="collapse" data-target="#adicionar-dispositivo" data-parent="#painel-cofiguracao">Adicionar Dispositivo</button></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            
        <div id="divMaisExterna">
            <div class="container">
                <h1 id="minha-casa">Minha Casa</h1>
                <div id="painel-todos" class="panel-group">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h2 id="ambiente-escolhido">Ambiente</h2>
                            <button class="btn btn-link panel-title" data-toggle="collapse" data-target="#selecionar-ambiente" data-parent="#painel-todos">Escolher Ambiente</button>
                        </div>
                        <div id="selecionar-ambiente" class="collapse"> 
                            <section class="lista-de-ambientes">
                                <div class="panel-body" id="lista-de-ambientes">
                                    
                                    <ul class="list-unstyled">
                                        
                                    </ul>
                                    
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h2>Dispositivo</h2>
                
                            <button class="btn btn-link panel-title" data-toggle="collapse" data-target="#selecionar-dispositivo" data-parent="#painel-todos">Escolher Dispositivo</button>
                        </div>
                        <div id="selecionar-dispositivo" class="collapse"> 
                            <div class="panel-body">
                                <section>
                                    <ul class="list-unstyled">
                                        <li><button class="btn btn-link">Dispositivo1</button></li>
                                        <li><button class="btn btn-link">Dispositivo2</button></li>
                                        <li><button class="btn btn-link">Dispositivo3</button></li>
                                    </ul>
                                </section>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id="painel-configuracao" class="panel-group">
                <div id="editar-casa" class="collapse" >
                    <div class="container">

                        <form class="form-inline">
                        <div class="form-group">
                          <label for="nova-casa">Casa</label>
                          <input type="text" class="form-control" id="nova-casa" placeholder="Editar Casa">
                         <button class="btn btn-link" id="btn-editar-casa">Editar Casa</button>
                      </form>

                    </div>
                </div>
                
                <div id="adicionar-ambiente" class="collapse">
                    <div class="container">

                        <form class="form-inline">
                        <div class="form-group">
                          <label for="novo-ambiente">Ambiente</label>
                          <input type="text" class="form-control" id="novo-ambiente" placeholder="Adicionar Ambiente">
                        </div>
                        <button type="submit" class="btn btn-default">Adicionar Ambiente</button>
                      </form>

                    </div>
                </div>
                
                <div id="adicionar-dispositivo" class="collapse">
                    <div class="container">
                        <form class="form-inline">
                            <div class="row">
                              <div class="col-lg-6">
                                <div class="input-group">
                                  <div class="input-group-btn">
                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ambiente <span class="caret"></span></button>
                                    <ul class="dropdown-menu">
                                      <li><a href="#">Ambiente1</a></li>
                                      <li><a href="#">Ambiente2</a></li>
                                      <li><a href="#">Ambiente3</a></li>

                                    </ul>
                                  </div><!-- /btn-group -->
                                  <input type="text" class="form-control" aria-label="...">
                                </div><!-- /input-group -->
                                  <button type="submit" class="btn btn-default">Adicionar Ambiente</button>
                              </div><!-- /.col-lg-6 -->
                            </div><!-- /.row -->
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/index.js"></script>
        
    </body>
</html>
