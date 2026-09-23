<%@page import="java.sql.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
try
{
	Class.forName("com.mysql.cj.jdbc.Driver");
	out.println("<h1> DRIVER ACCEPTED<h1>");
	
	Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jsd","root","MAADHESHvk@008");
	out.println("<h2> CONNECTION SUCCESFULL <h2>");
	
	Statement st=con.createStatement();
	ResultSet rs=st.executeQuery("select * from student");
	out.println("<table border='4' bgcolor='lightgreen' align='center'>");
	out.println("<tr><th>RNO</th><th>STUDENT NAME</th><th>MARK</th><th>RANK</th>");
	
	while(rs.next())
	{
		out.println("<tr><td>"+rs.getString(1)+"</td><td>"+rs.getString(2)+"</td><td>"+rs.getString(3)+"</td><td>"+rs.getString(4)+"</td></tr>");
	}
	out.println("</table>");
	
}
catch(Exception e)
{
	out.println("<h1>Error:"+e.toString()+"<h1>");
}



%>
</body>
</html>