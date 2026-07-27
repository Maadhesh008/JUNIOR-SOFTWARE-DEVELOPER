
import java.util.*;
public class ex1 {
    


    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        char c = 0; 
        do{
            System.out.println("ENTER ANY TWO NUMBERS");
        int a= s.nextInt();
        int b= s.nextInt();
        System.out.println("'a'.ADDITION\n's'.SUBRACTION\n'm'.MULTIPLICATION\n'd'.DIVISION\n'r'.REMAINDER" );
        System.out.println("ENTER YOUR CHOICE");
        int ch= s.next().charAt(0);
        
        switch(ch)
        {
            case 'a': case 'A':
                 System.out.println("ADDITION:"+(a+b));
                 break;
           case 's': case 'S':
                 System.out.println("SUBRACTION:"+(a-b));
                 break;
           case 'M': case 'm':
                 System.out.println("MULTIPLICATION:"+(a*b));
                 break;
           case 'D': case 'd':
                 System.out.println("DIVISION:"+(a/b));
                 break;
           case 'R': case 'r':
                 System.out.println("REMAINDER:"+(a%b));
                 break;
            
            
            default:
                  System.out.println("ENTER THE CORRECT VALUE");
         
        }
        System.out.println("DO YOU WANT TO CONTINUE(Y/N):");
        c = s.next().charAt(0);
    }while (c =='y'|| c =='Y');
 
    }
}

