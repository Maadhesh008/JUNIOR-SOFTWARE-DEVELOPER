import java.util.*;
public class ex4 {
    public static void main(String args[])
    {
         char c=0;
         int count=0;
         
        Scanner s = new Scanner(System.in);
        System.out.println("ENTER THE NAME");    //TO FIND WHETHER THE I/P CHAR IS AVAILABEL IN THE NAME
        String v= s.nextLine();
        int n = v.length();
        System.out.println("ENTER THE CHARACTER");
         c= s.next().charAt(0);
         for(int i=0;i<n;i++)
         {
           
            if(c==v.charAt(i))
            {
               System.out.println(i);
               count++;
            }
        }
         
       if(count==0)
       {
        System.out.println("MENTIONED CHARACTER NOT THERE IN THE NAME");
       }


         

    }
    }
