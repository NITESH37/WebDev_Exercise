#include <stdio.h>>

void main()
{
    int a, b, c1, c2, c3, c4, c5, c6, c7;
    printf("Enter First Number: ");
    scanf("%d", &a);
    printf("Enter Second Number: ");
    scanf("%d", &b);
    c1 = a & b;
    c2 = a | b;
    c3 = a ^ b;
    c4 = a << b;
    c5 = a >> b;
    c6 = ~a;
    c7 = ~b;
    printf("Bitwise AND = %d \n", c1);
    printf("Bitwise OR = %d \n", c2);
    printf("Bitwise XOR = %d \n", c3);
    printf("Bitwise left shift = %d \n", c4);
    printf("Bitwise right shift = %d \n", c5);
    printf("Bitwise complement A = %d \n", c6);
    printf("Bitwise complement B = %d \n", c7);
}