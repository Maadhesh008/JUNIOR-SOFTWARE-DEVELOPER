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
int rno=Integer.parseInt(request.getParameter("rno"));
String sname=request.getParameter("sname");
float mark=Float.parseFloat(request.getParameter("mark"));

out.println("<h2>ROLL NUMBER :"+rno+"</h2>");

out.println("<h2>STUDENT NAME :"+sname+"</h2>");
out.println("<h2>MARK :"+mark+"</h2>");
%>
</body>
</html>