import java.util.*;
public class ex3 {
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        System.out.println("ENTER THE N VALE");
        int sum=0;
        int n = s.nextInt();
        for (int i=1;i<n;i++)
        {
           System.out.print(i+ "+");
           
           sum=sum+i;
           
        }
        System.out.print(n+"="+(sum+n));
    } 
}
