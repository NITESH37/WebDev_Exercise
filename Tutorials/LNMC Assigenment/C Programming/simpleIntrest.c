#include <stdio.h>

void main()
{
    int amount, rate, year;
    float si;
    printf("Enter Amount: ");
    scanf("%d", &amount);
    printf("Enter Rate: ");
    scanf("%d", &rate);
    printf("Enter Year: ");
    scanf("%d", &year);
    si = amount * rate * year / 100;
    printf("Simple Intrest are = %.2f", si);
}