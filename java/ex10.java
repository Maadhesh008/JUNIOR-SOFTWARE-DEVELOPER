import java.util.*;

public class ex10
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        System.out.println("ENTER THE NAME");
        String s1=s.nextLine();
        int len=s1.length();
        System.out.println("ENTER THE CHARACTER");
        char c=s.next().charAt(0);
        int sum=0;


        for(int i=0;i<len;i++)
        {
            if(s1.charAt(i)==c)
            {
               System.out.print(i+",");
               sum++;
            }
          
        }System.out.print("\b ");

        if(sum==0)
        {
            System.out.println("NOT FOUND");
        }
         
       
       
    }
}