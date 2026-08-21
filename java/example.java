import java.util.Scanner;

public class example{
    public static void main(String args[])
    {
        int count=0;
        int sum=0;
        Scanner s= new Scanner(System.in);
        System.out.println("ENTER THE N VALUE");
        int n=s.nextInt();
        int r=0;
        int even=0 ;
        int odd=0;
        int a=0;
        int b=0;
      
       
        
        while(n!=0)
        {
          
            r=n%10;
           n=n/10;
          if(r%2==0)
          {
            sum=r+sum;
            even++;
            a = a + (r*10);

          }
          else{
             count=count+r;
             odd++;
             b = (r * 10) + b;
          }
         
         }

        System.out.println(a);
         System.out.println(b);

        System.out.println("COUNT OF EVEN NUMBER:"+even);
        System.out.println("COUNT OF ODD NUMBER:"+odd);
         System.out.println("SUM OF EVEN DIGITS:"+sum);
          System.out.println("SUM OF ODD DIGITS:"+count);
         s.close();

        
    }
}