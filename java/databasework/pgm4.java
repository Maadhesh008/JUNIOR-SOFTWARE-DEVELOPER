package databasework;
import java.sql.*;
import java.util.Scanner;
public class pgm4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan=new Scanner(System.in);
		System.out.println("update process:");
		System.out.println("Enter rno,sname and mark");
		
		int rno=scan.nextInt();
		String sname=scan.next();
		float mark=scan.nextFloat();
		String result="";
		if(mark>34)
			result="PASS";
		else
			result="FAIL";
		
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			System.out.println("driver accepted");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jsd", "root", "MAADHESHvk@008");
			System.out.println("Connection Success");
			
			// ---- update data 
			Statement st=con.createStatement();
			int res=st.executeUpdate("update student set sname='"+sname+"',mark="+mark+",result='"+result+"' where rno="+rno);
			if(res==1)
			{
				System.out.println("successfully updated");
			}
			else
			{
				System.out.println("not updated because record not found");
			}			
			
			 st.close(); con.close();
			//=================================end=========
			
			
		}
		catch(Exception e)
		{
			System.out.println("Error Reason:"+e.toString());
		}
	}

}