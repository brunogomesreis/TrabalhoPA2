/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brunogomesreis.trabalhopa2_v2.DAO;

/**
 *
 * @author bruno
 */

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class AmbientesDAO extends BaseDAO {

    
    public boolean doCreate(AmbientesParametros dto) {
        //Funcionando
       // System.out.println("Entra no doCreate");
        try {
            Connection con = getConnection();
            PreparedStatement pstmt = con.prepareStatement(
               "INSERT INTO ambientes (nome) VALUES(?) RETURNING serialambientes;");
            pstmt.setString(1, dto.getNome());
            ResultSet rst = pstmt.executeQuery();
            rst.next();
            dto.setSerialambiente(rst.getInt("serialambientes"));
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }
    
    
    public ArrayList listaTodosAmbientes (){
        
        //Funcionando
        
        ArrayList<AmbientesParametros> listaTodosAmbientes = new ArrayList();
        AmbientesParametros AmbienteTemporario;
           
        
        try{
            Connection con = getConnection();
            PreparedStatement pstmt = con.prepareStatement(
            "SELECT * FROM ambientes");
            ResultSet resultset = pstmt.executeQuery();
            
            while(resultset.next()){
                AmbienteTemporario = new AmbientesParametros();
                AmbienteTemporario.setSerialambiente(resultset.getInt("serialambientes"));
                AmbienteTemporario.setNome(resultset.getString("nome"));
                
                listaTodosAmbientes.add(AmbienteTemporario);
            }
           
            return listaTodosAmbientes;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    
   
   
     public int getSerial(AmbientesParametros dto){

        //Aparentemente, tem algum bug, mas sempre que eu testo está funcionando perfeitamente
         
        ArrayList <AmbientesParametros> lista = listaTodosAmbientes ();
  
        try{
            int serial = -1;
            for(int i=0; i<lista.size();i++){
                if (lista.get(i).getNome().equalsIgnoreCase(dto.getNome())){
                    serial = lista.get(i).getSerialambiente();
                }
            }
            System.out.println(serial);
            return serial;
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }
    public boolean doDelete(AmbientesParametros dto){
        
        //Funcionando
        
        int serial = getSerial(dto);
        
        try {
            Connection con = getConnection();
            
            PreparedStatement pstmt = con.prepareStatement(
               "DELETE FROM dispositivos WHERE serialambientes=?;"
                       + "DELETE FROM ambientes WHERE nome=?;");
            System.out.println(serial);
            System.out.println(dto.getNome());
            pstmt.setInt(1, serial);
            pstmt.setString(2, dto.getNome());
            
            pstmt.execute();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;    
    }
    
}
  