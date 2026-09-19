package databasework;

import java.sql.*;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Scanner;

public class Pgm3 {
	public static void main(String[] args) {
		Scanner s=new Scanner(System.in);
		System.out.println("ENTER THE RNO WHICH U WANT TO DELETE");
		int rno=s.nextInt();
		
		
		
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
			System.out.println("DRIVER ACCEPTED");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jsd","root","MAADHESHvk@008");
			System.out.println("CONNECTION SUCCESFULL");
			
			//===== delete date from student table
			Statement st=con.createStatement();
			int res1=st.executeUpdate("delete from student where rno="+rno);
			if(res1==1)
			{
				System.out.println("SUCCESFULLY DELETED");
			}
			else
			{
				System.out.println("NOT DELETED BECOZ RECORD NOT FOUND");
				
			}
			st.close(); con.close();
			//================end================
		}
		catch(Exception e)
		{
			System.out.println("ERROR REASON:"+e.toString());
		}
	
	}
}
