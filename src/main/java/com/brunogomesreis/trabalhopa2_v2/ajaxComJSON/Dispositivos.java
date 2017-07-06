/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brunogomesreis.trabalhopa2_v2.ajaxComJSON;

import com.brunogomesreis.trabalhopa2_v2.DTO.DispositivosDAO;
import com.brunogomesreis.trabalhopa2_v2.DTO.DispositivosParametros;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author bruno
 */
public class Dispositivos extends HttpServlet {

    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
        DispositivosDAO DataBaseParaLista = new DispositivosDAO();
        ArrayList<DispositivosParametros> Lista = DataBaseParaLista.listaTodosDispositivos();
            
        ArrayList<String> ListaDeDispositivos = new ArrayList();
        for (int i = 0; i < Lista.size(); i++) {
            
            System.out.println(Lista.get(i).getNome());
            ListaDeDispositivos.add(Lista.get(i).getNome());
        }
        
        //System.out.println(ListaDeStrings);
            String gson =  new Gson().toJson(ListaDeDispositivos);

                
        
        
        System.out.println("Printando o json");
        System.out.println(gson);
        
       
        System.out.println("Entrei no Dispositivos");
        response.setContentType("application/json;charset=UTF-8");
        
        PrintWriter out = response.getWriter();
        //out.print(dto.toString());
       out.print(gson);
        //System.out.println(json);
        out.flush();
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
