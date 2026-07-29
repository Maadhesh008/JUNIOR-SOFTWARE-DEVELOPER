import java.util.*;
public class prime
{
    
    public static void main(String args[])
    {
        int a=0;
        int m=0;
        char c=0;
        int v =-1;
        int k=1;
        int z=0;
        int sum1=0;
        Scanner s= new Scanner(System.in);
        System.out.println("ENTER THE NUMBER");
        a =s.nextInt();
        for (int i=2;i<a;i++)
        {
            if(a%i==0)
            {
                m=1;
            }
        }
        if(m==1)
        {
            System.out.println(a+" IS NOT A PRIME NUMBER");

        }
        else
        {
            System.out.println(a + " IS A PRIME NUMBER");
            System.out.println("DO YOU WANT TO FIND THE FIBONACCI SERIES FOR THIS PRIME NUMBER(Y/N)");
            c=s.next().charAt(0);
            while((c=='y'||(c=='Y')))
            {
            for(int i=1;i<=a;i++)
        {
            z=v+k;
            System.out.print(z+"+");

            v=k;
            k=z;
            sum1=sum1+z;

        }
System.out.print("\b="+sum1);
break;
            }
        }
        


    }

}