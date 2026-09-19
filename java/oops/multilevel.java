class HeadMaster
{
    void show()
    {
        System.out.println("headmaster class");
    }
}
class Teacher extends  HeadMaster
{
    void show()
    {
        
        System.out.println("Teacher class");
        super.show();
    }
}

class Students extends Teacher
{
    void show()
    {
       
        System.out.println("Students class"); 
         super.show();       
    }
}
public class multilevel {
    public static void main(String[] args) {
            Students s=new Students();
            s.show();
    }
}