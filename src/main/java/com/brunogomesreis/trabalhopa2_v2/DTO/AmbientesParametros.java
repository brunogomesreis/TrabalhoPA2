/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brunogomesreis.trabalhopa2_v2.DTO;

import java.io.Serializable;

/**
 *
 * @author bruno
 */
import java.io.Serializable;

public class AmbientesParametros implements Serializable{
    private int serialambiente;
    private String nome;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getSerialambiente() {
        return serialambiente;
    }

    public void setSerialambiente(int serialambiente) {
        this.serialambiente = serialambiente;
    }
    
}
