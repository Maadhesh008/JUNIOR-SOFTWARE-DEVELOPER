package databasework;
import java.sql.*;

public class Pgm1 {

	public static void main(String[] args) {
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
			System.out.println("DRIVER ACCEPTED");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jsd","root","MAADHESHvk@008");
			System.out.println("CONNECTION SUCCESFULL");
			
			//=====DATA RETRIEVE FROM MYSQL TABLE NAME: STUDENT
			Statement st=con.createStatement();
			ResultSet rs=st.executeQuery("select * from student");
			while(rs.next())
			{
				System.out.println(rs.getString(1)+"     "+rs.getString(2)+"     "+rs.getString(3)+"     "+rs.getString(4));
			}
			rs.close(); st.close(); con.close();
			//================end================
		}
		catch(Exception e)
		{
			System.out.println("ERROR REASON:"+e.toString());
		}
	
	}

}
