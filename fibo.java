import java.util.*;
public class fibo {
    public static void main(String args[])
    {
        int a =-1;
        int b=1;
        int c=0;
        int sum=0;

        Scanner s= new Scanner(System.in);
        
        System.out.println("ENTER THE NUMBER U WANT FOR FIBONACCI SERIES");
        int n=s.nextInt();
       
        for(int i=1;i<=n;i++)
        {
            c=a+b;
            System.out.print(c+"+");

            a=b;
            b=c;
            sum=sum+c;

        }
System.out.print("\b="+sum);
    }
}
