package com.brunogomesreis.trabalhopa2_v2.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DomoticaDAO {

    public static ConnectionFactory cf;

//==============================================================================
    public static String lerStringExemplo(String param){
        ResultSet rs = null;
        String result = null;
        
        try (Connection conexao = cf.getConnection()) {
            PreparedStatement comandoSQL = conexao.prepareStatement(
                "SELECT * FROM ...;"
            );
            comandoSQL.setString(1, param);
            rs = comandoSQL.executeQuery();
            if(rs.next()){
                result = rs.getString("col_name");
            }
        }catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
//==============================================================================
}
