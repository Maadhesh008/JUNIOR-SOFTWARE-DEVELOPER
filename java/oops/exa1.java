import java.util.Scanner;
public class exa1 {
    int rno;
    String sname;
    float mark;
    Scanner scan=new Scanner(System.in);
    void getdata()
    {
        System.out.println("Enter rno sname and mark:");
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
       exa1 s1=new exa1();
       exa1 s2=new exa1();
        exa1 s3=new exa1();
        s1.getdata();
        s2.getdata();
        s3.getdata();
        s1.dis();
        s2.dis();
        s3.dis();
    }
}