#include <stdio.h>
void main()
{
    int a, b;
    printf("Enter Two Number: ");
    scanf("%d%d", &a, &b);
    if (a > b)
    {
        printf("a= %d is greater", a);
    }
    else
    {
        printf("b= %d is greater", b);
    }
}