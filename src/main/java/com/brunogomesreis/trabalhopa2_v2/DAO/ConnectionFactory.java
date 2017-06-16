package com.brunogomesreis.trabalhopa2_v2.DAO;

import java.sql.Connection;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class ConnectionFactory implements IFconnectionFactory{
    private DataSource ds;

//------------------------------------------------------------------------------------------------------------
    public ConnectionFactory() {
        try {
            InitialContext cxt = new InitialContext();
            ds = (DataSource) cxt.lookup("java:comp/env/jdbc/domotica");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
//------------------------------------------------------------------------------------------------------------
    @Override
    public Connection getConnection(){
        try{
            if(ds!=null){
                return ds.getConnection();
            }else{
                return null;
            }
        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }
//------------------------------------------------------------------------------------------------------------
}
