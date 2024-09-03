import java.util.Scanner;

class HelloWorld {
    public static void main(String[] args) {
        int ans = sum(10,20);
        int ans2 = sumThree(15,12,21);
        System.out.println(ans);
        System.out.println(ans2);
    }
    static int sum(int a, int b){
        return a+b;
        
    }
    static int sumThree(int a,int b, int c){
        return a+b+c;
    }
}