import java.util.Scanner;

public class ex8
{
    public static void main(String args[])
    {
        Scanner s= new Scanner(System.in);
        System.out.println("ENTER THE N VALUE");
        int n=s.nextInt();
        int r,sum=0;
        while(n!=0)
        {
           
            r=n%10;
            n=n/10;
            sum=sum+r;

        }
        System.out.println("sum of digits:"+sum);
    }
