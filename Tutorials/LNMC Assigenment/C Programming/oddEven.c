#include <stdio.h>
void main()
{
    int a;
    printf("Enter a number: ");
    scanf("%d", &a);
    if (a % 2 == 0)
    {
        printf("%d is a Even Number", a);
    }
    else
    {
        printf("%d is a Odd Number", a);
    }
}