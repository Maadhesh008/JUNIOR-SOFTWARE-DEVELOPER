class father
{
     int k=100;
    int d=200;

}
class Son extends father
{
void show()
{
    System.out.println("derive class son:"+d);
    System.out.println("derive class son:"+k);
}
}
public class inherit {
    public static void main(String[] args) {
        Son s=new Son();
        s.show();    
    }
}