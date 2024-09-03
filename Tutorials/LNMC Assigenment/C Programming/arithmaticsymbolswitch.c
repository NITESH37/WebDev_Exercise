#include <stdio.h>

void main()
{
    int a, b, r;
    char c;
    printf("Enter 1st value: ");
    scanf("%d", &a);
    printf("\nEnter 2nd value: ");
    scanf("%d", &b);
    printf("\nEnter arithmatic Symbol: ");
    fflush(stdin);
    scanf("%c", &c);
    switch (c)
    {
    case '+':
        r = a + b;
        break;
    case '-':
        r = a - b;
        break;
    case '*':
        r = a * b;
        break;
    case '/':
        r = a / b;
        break;
    default:
        printf("Invalid Choice");
        break;
    }
    printf("THE RESULT IS : %d", r);
}