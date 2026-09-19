package databasework;

import java.sql.*;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Scanner;

public class Pgm2 {
	public static void main(String[] args) {
		Scanner s=new Scanner(System.in);
		System.out.println("ENTER THE RNO SNAME MARK RESULT");
		int rno=s.nextInt();
		String sn=s.next();
		int mark=s.nextInt();
		String res=s.next();
		
		
		
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
			System.out.println("DRIVER ACCEPTED");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jsd","root","MAADHESHvk@008");
			System.out.println("CONNECTION SUCCESFULL");
			
			//===== insert date into the student table
			Statement st=con.createStatement();
			int res1=st.executeUpdate("insert into student value("+rno+" , '"+sn+"' ,"+mark+" ,'"+res+"')");
			if(res1==1)
			{
				System.out.println("SUCCESFULLY INSERTED");
			}
			else
			{
				System.out.println("NOT INSERTED");
				
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
