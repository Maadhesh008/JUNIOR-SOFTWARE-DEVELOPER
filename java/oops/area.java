import java.net.SocketPermission;

public class area {
    area(int a)
    {
        System.out.println("AREA OF SQUARE:"+(a*a));
    }
    area(int l,int b)
    {
        System.out.println("AREA OF RECTANGLE"+(l*b));

    }
    area(float r)
    {
        System.out.println("AREA OF CIRCLE:"+(Math.PI*r*r));
    }
    public static void main(String[] args) {
        area a1=new area(4);
        area a2=new area(4,6);
        area a3=new area(5.0f);
    }
}
