import java.util.Scanner;

class HelloWorld {
    public static void main(String[] args) {
        sum();
    }
    static void sum(){
        int num1,num2,sum;
        Scanner input = new Scanner(System.in);
        
        System.out.println("Enter first Number: ");
        num1 = input.nextInt();
        num2 = input.nextInt();
        sum = num1+num2;
        System.out.println("Total is " + sum);
        
    }
}