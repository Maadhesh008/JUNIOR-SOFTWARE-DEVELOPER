import java.util.*;
public class ex6 {
    public static void main(String args[] )
    {
        Scanner s = new Scanner(System.in);
        System.out.println("ENTER YOUR MAIL");
        String t = s.nextLine();
        int n=t.length();
        char c=0;
        int nc=0; 
        int ac=0;
        int sc=0;
        for (int i=0;i<n;i++)
        {
            c=t.charAt(i);
            if(c>= 'a' && c<='z')
            {
                ac++;
            }
            if(c>='0' && c<='9')
            {
                nc++;
            }
            if(c=='.')
            {
                sc++;
            }
            if(c=='@')
            {
                break;
            }
        }
        System.out.println("ALPHABET COUNT:"+ac);
        System.out.println("NUMBER COUNT:"+nc);
        System.out.println("DOT COUNT:"+sc);

        
    }
}
