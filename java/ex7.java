import java.util.*;
public class ex7
{
    public static void  main(String args[])
    {
        Scanner s= new Scanner(System.in);
        System.out.println("ENTER THE UNSTRUCTURED TEXT");
        String t=s.nextLine();
       
        for(int i=0;i<t.length();i++)
        {
            char c1= t.charAt(i);
            if(((c1>='a'&&c1<='z')||(c1>='0'&&c1<='9'))||(i < t.length() - 1&&((t.charAt(i+1)>='a'&&t.charAt(i+1)<='z')||(t.charAt(i+1)>='0'&&t.charAt(i+1)<='9'))))
            {
                System.out.print(c1);
            }
         }
        
    }
}