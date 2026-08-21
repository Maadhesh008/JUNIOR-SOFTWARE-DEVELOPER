import java.util.*;
public class ex5 {
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        System.out.println("ENTER THE NAME");   //(NISANTH)--->> NHITSNA(0615243INDEX)
        String v= s.nextLine();
        int n = v.length();
        int  d=n-1;


       
         for(int i=d;i>=n/2;i--)
         {  
    

            System.out.print(v.charAt((d-i)));
            System.out.print(v.charAt(i));  
            
            
        }
        if(n%2!=0)
        {
            System.out.print("\b ");
        }
         
       
         

    }
    }
