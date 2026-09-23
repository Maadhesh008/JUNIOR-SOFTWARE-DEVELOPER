package com.maadheshspring.demoproject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import jakarta.websocket.server.PathParam;

@RestController
public class TestController {
	
	@GetMapping("/test")
	
	public String test()
	{
		return "<h1> HELLO SPRINGBOOT </h1>";
	}
	
	public int myfunction(int a,int b)
	{
		return a+b;
	}
	
	@GetMapping("/args")
	public String myadd()
	{
		return "<h1>Result:"+myfunction(10,20)+"</h1>";
	}
	
	int sarr(int myarr[])
	{
		int sum=0;
		for(int i=0;i<myarr.length;i++)
		{
			sum=sum+myarr[i];
		}
		return sum;
	}
	
	
	
	@GetMapping("/arrsum")
	public String arrsum()
	{
		int arr[]= {11,22,33,44,55,66};
		int arrtotal=sarr(arr);
		return "LENGTH OF ARRAY:"+arr.length+ "<h2>   SUM OF ARRAY:"+arrtotal+"</h2>";
	}
	
	
	
	//run time data from url with parameters
	
	@GetMapping("/app/{id}")
	public String showArgs(@PathVariable Long id)
	{
		long data=id;
		return "<h1> YOUR URL RUNTIME DATA:"+data+"</h1>";
	}
}
