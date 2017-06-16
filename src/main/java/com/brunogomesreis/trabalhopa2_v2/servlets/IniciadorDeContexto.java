package com.brunogomesreis.trabalhopa2_v2.servlets;

import com.brunogomesreis.trabalhopa2_v2.DAO.ConnectionFactory;
import com.brunogomesreis.trabalhopa2_v2.DAO.DomoticaDAO;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class IniciadorDeContexto implements ServletContextListener {
    public static ConnectionFactory connectionFactory;

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        try{
            //--- Dependency injection num campo static de uma classe que só tem métodos static!
            //--- Fazer para todos DAO !!
            DomoticaDAO.cf = new ConnectionFactory();
System.out.println("Injetou dependência: ConnectionFactory.");
        }catch(Exception e){
System.out.println("NÃO injetou dependência: ConnectionFactory.");
            e.printStackTrace();
        }
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        try{
            System.out.println("==== Chamou contextDestroyed ====");
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
