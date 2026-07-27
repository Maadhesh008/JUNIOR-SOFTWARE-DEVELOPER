import java.util.*;

class ex2
{
 public static void main(String args[])
 {
   char c =0;
    do
    {
         Scanner s= new Scanner(System.in);
       System.out.println("ENTER THE YEAR");
       int a= s.nextInt();
       System.out.println("ENTER THE MONTH");
       int b= s.nextInt();
       switch (b) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            System.out.println("31 DAYS IN THE MONTH");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            System.out.println("30 DAYS IN THE MONTH");
            break;
        case 2:
            if ((a % 400 == 0) || (a % 4 == 0 && a % 100 != 0))
            {
                System.out.println("29 DAYS IN A MONTH");
            }
            else
            {
                System.out.println("28 DAYS IN A MONTH2");
            } break;
       
        default:
            System.out.println("ENTER A VALID MONTH");
            break;
       }
       System.out.println("DO YOU WANT TO CONTINUE THE PROCESS(Y/N)");
       c= s.next().charAt(0);
    }while((c=='Y')||(c=='y'));
 }
}