import java.util.*;

public class multiplication
{
   public static void main(String args[])
    {
        int v=0;
        Scanner s = new Scanner(System.in);
        System.out.println("ENTER WHICH MULTIPLICATION TABLE U WANT");
        int n=s.nextInt();
        for(int i=1;i<=10;i++)
        {
            
            System.out.println(i+ "*" +n+ "=" +(i*n));
        }


    }
    
}
