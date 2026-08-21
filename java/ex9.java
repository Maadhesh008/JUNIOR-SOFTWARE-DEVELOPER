import java.util.Scanner;

public class ex9{
    public static void main(String args[])
    {
        
        Scanner s= new Scanner(System.in);
        System.out.println("ENTER THE N VALUE");
        int n=s.nextInt();
        int r=0;
        int a=0;
        while(n!=0)
        {
            r=n%10;
           a=(a*10)+r;
            n=n/10;

        }
        System.out.println("reverse No is " +a);
          
            
             

       
        
    }
}