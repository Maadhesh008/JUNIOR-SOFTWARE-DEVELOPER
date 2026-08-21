import java.util.*;
public class sumseries {
    public static void main(String args[])
        {
            int sum=0;
            Scanner s = new Scanner(System.in);
            System.out.println("ENTER THE NUMBER");
            int n=s.nextInt();

             
            for(int i=0;i<=n;i++)
            {
                if(i%2==0)
                {
                    sum=sum-i;
                    System.out.print(i+ "+");
                }
                else
                {
                    sum=sum+i;
                    System.out.print(i+ "-");

                }
            }
            System.out.print("\b=" +sum);
        }
    
}
