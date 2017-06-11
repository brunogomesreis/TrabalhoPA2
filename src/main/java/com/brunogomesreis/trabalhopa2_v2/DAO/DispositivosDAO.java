/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brunogomesreis.trabalhopa2_v2.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author bruno
 */
public class DispositivosDAO extends BaseDAO {

    public boolean doCreate(DispositivosParametros dto) {
        //Funcionando
        try {
            Connection con = getConnection();
            PreparedStatement pstmt = con.prepareStatement(
               "INSERT INTO dispositivos (nome,serialambientes) VALUES(?,?) RETURNING serialdispositivo;");
            //System.out.println(dto.getNome());
            //System.out.println(dto.getSerialambiente());
            pstmt.setString(1, dto.getNome());
            pstmt.setInt(2, dto.getSerialambiente());
            ResultSet rst = pstmt.executeQuery();
            rst.next();
            dto.setSerialdispositivo(rst.getInt("serialdispositivo"));
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public boolean doDeleteByNome(DispositivosParametros dto){
        //Funcionando
        try {
            Connection con = getConnection();
            PreparedStatement pstmt = con.prepareStatement(
               "DELETE FROM dispositivos WHERE nome=? AND serialambientes=? ;");
            //System.out.println(dto.getNome());
            //System.out.println(dto.getSerialambiente());
            
            pstmt.setString(1, dto.getNome());
            pstmt.setInt(2, dto.getSerialambiente());
            pstmt.execute();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }
  
    public boolean doDelete(DispositivosParametros dto){
        //Funcionando
        try {
            Connection con = getConnection();
            PreparedStatement pstmt = con.prepareStatement(
               "DELETE FROM dispositivos WHERE serialdispositivo=?;");
            //System.out.println(dto.getSerialdispositivo());    
            pstmt.setInt(1, dto.getSerialdispositivo());
            pstmt.execute();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }
  public ArrayList listaTodosDispositivos (){
        
        //Funcionando
        
        ArrayList<DispositivosParametros> listaTodosDispositivos = new ArrayList();
        DispositivosParametros DispositivoTemporario;
           
        
        try{
            Connection con = getConnection();
            PreparedStatement pstmt = con.prepareStatement(
            "SELECT * FROM dispositivos");
            ResultSet resultset = pstmt.executeQuery();
            
            while(resultset.next()){
                DispositivoTemporario = new DispositivosParametros();
                DispositivoTemporario.setSerialambiente(resultset.getInt("serialambientes"));
                DispositivoTemporario.setNome(resultset.getString("nome"));
                
                listaTodosDispositivos.add(DispositivoTemporario);
            }
           
            return listaTodosDispositivos;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public ArrayList listaDispositivos (AmbientesParametros dto){
        
        //Funcionando
        
        ArrayList<DispositivosParametros> listaDispositivos = new ArrayList();
        DispositivosParametros DispositivoTemporario;
           
        
        try{
            Connection con = getConnection();
            PreparedStatement pstmt = con.prepareStatement(
            "SELECT * FROM dispositivos WHERE serialambientes=?");
            pstmt.setInt(1, dto.getSerialambiente());
            ResultSet resultset = pstmt.executeQuery();
            
            while(resultset.next()){
                DispositivoTemporario = new DispositivosParametros();
                DispositivoTemporario.setSerialambiente(resultset.getInt("serialambientes"));
                DispositivoTemporario.setNome(resultset.getString("nome"));
                
                listaDispositivos.add(DispositivoTemporario);
            }
           
            return listaDispositivos;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
  
}
