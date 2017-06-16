/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brunogomesreis.trabalhopa2_v2.DTO;

import java.io.Serializable;
import javax.json.Json;
import javax.json.JsonObject;

/**
 *
 * @author bruno
 */
public class CasaParametros implements Serializable{
    private String nome;
    
    
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    JsonObject objetoJSON;
    
    public JsonObject toJSON(){

        
        System.out.println("Entrei no CasaParametros");
        objetoJSON = Json.createObjectBuilder()
                .add("nome", nome)
                .build();
        
        return objetoJSON;
    }
    
    @Override
    public String toString(){
        return toJSON().toString();
    }
 
}
