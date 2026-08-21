import java.util.*;
class example
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        char c = 0;
        do{
            System.out.println("ENTER ANY TWO NUMBERS");
        int a= s.nextInt();
        int b= s.nextInt();
        System.out.println("1.ADDITION\n2.SUBRACTION\n3.MULTIPLICATION\n4.DIVISION\n5.REMAINDER" );
        System.out.println("ENTER YOUR CHOICE");
        int v= s.nextInt();
        
        switch(v)
        {
            case 1:
                 System.out.println("ADDITION:"+(a+b));
                 break;
            case 2:
                 System.out.println("SUBRACTION:"+(a-b));
                 break;
            case 3:
                 System.out.println("MULTIPLICATION:"+(a*b));
                 break;
            case 4:
                 System.out.println("DIVISION:"+(a/b));
                 break;
            case 5:
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