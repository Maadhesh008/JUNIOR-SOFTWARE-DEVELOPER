package com.maadheshspring.demoproject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Person {

	private String sname;
	private int age;
	
	// Add this default constructor so Spring can instantiate the class
	public Person() {
	}

	public Person(String sname, int age) {
		super();
		this.sname = sname;
		this.age = age;
	}
	
	public String getSname()
	{
		return sname;
	}
	public int getAge()
	{
		return age;
	}
	
	@GetMapping("/objdata")
	public String showObjectData()
	{
		Person p1 = new Person("maadhesh", 22);
		Person p2 = new Person("karthika", 23);
		Person p3 = new Person("shreekanth", 22);
		Person p4 = new Person("dinesh", 22);
		
		Person p[]= {p1,p2,p3,p4};
		String ans="<table border='4 cellpadding='5' bgcolor='lightgreen' align='center'><tr><th>sno</th><th>Student Name</th><th>Age</th>";
		for(int i=0;i<p.length;i++)
		{
			ans=ans+"<tr><td>"+(i+1)+"</td><td>"+p[i].getSname()+"</td><td>"+p[i].getAge()+"</td></tr>";
		}
		ans=ans+"</table>";
		return ans;
		// String data1 = p1.getSname() + "---------->" + p1.getAge();
		
		//return "<font color='green' size='6'>Person 1 Information : " + data1 + "</font>";
	}
}