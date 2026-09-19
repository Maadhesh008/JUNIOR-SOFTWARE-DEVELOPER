public class exa3 {
    int eno;
    String sname;
    int mark;
    exa3(int e,String name,int mark1)
    {
        System.out.println("constructor called this is default or null constructor");
        eno=e;
        sname=name;
        mark=mark1;
    }
    void show()
    {
        System.out.println("==============This is normal method===================");
        System.out.println(sname+"     "+eno+"    "+mark);
    }
    public static void main(String[] args) {
       exa3 e1=new exa3(4058,"maadhesh",100); // constructor
       exa3 e2=new exa3(4059,"karthikaprakash",90); // constructor
       exa3 e3=new exa3(4060,"shreekanth",70); // constructor
        e1.show(); // normal method
        e2.show();
        e3.show();
    }

}