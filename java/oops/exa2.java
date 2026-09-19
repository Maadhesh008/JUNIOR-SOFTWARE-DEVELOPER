import java.util.Scanner;
public class exa2 {
    int rno;
    String sname;
    float mark;
    Scanner scan=new Scanner(System.in);
    void getdata()
    {
        System.out.println("Enter rno sname and mark");
        rno=scan.nextInt();
        sname=scan.next();
        mark=scan.nextFloat();
    }
    void dis()
    {
        System.out.println(rno+"   "+sname+"     "+mark);
    }
    public static void main(String args[])
    {
        Scanner scan=new Scanner(System.in);
        System.out.print("Enter number of students :");
        int n=scan.nextInt();
        exa2 s[]=new exa2[n];
        for(int i=0;i<n;i++)
        {
            s[i]=new exa2();
            s[i].getdata();
        }
        for(int i=0;i<n;i++)
            s[i].dis();
        System.out.println("=========FAIL STUDENT LIST=============");
        for(int i=0;i<n;i++)
        {
            if(s[i].mark<50)
                s[i].dis();
        }
    

    }
}