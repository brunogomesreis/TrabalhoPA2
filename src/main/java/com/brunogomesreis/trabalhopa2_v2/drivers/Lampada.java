package com.brunogomesreis.trabalhopa2_v2.drivers;

import javax.json.JsonObject;

public class Lampada implements IFdosDrivers{
    @Override
    public String processar(JsonObject jsonDoPedido){
        
        
System.out.println("serial: "+jsonDoPedido.getInt("serial"));        


        return "{\"estado\":\"on\"}";
    }
}
