
package com.brunogomesreis.trabalhopa2_v2.DAO;


import java.sql.Connection;
import javax.naming.InitialContext;
import javax.sql.DataSource;

/**
 *
 * @author Renan
 */
public class BaseDAO {
    
    private DataSource ds;
    
    public BaseDAO(){
        try {
            InitialContext cxt = new InitialContext();
            if (cxt == null) {
                System.out.println("[DataBaseDAO.constructor] Failed in InitialContext.");
            } else {
                ds = (DataSource) cxt.lookup("java:comp/env/jdbc/domotica1");
            }
        } catch (Exception e) {
            System.out.println("[DataBaseDAO.constructor] Exception: " + e.getMessage());
        }
    }
    
    public Connection getConnection(){
        Connection result = null;
        try{
            if(ds != null) result = ds.getConnection();
        } catch(Exception e) {
            e.printStackTrace(System.out);
        }
        return result;
    }
    
    
}
