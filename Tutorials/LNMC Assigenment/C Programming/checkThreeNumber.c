#include <stdio.h>
void main()
{
    int a, b, c;
    printf("Enter Three Number: ");
    scanf("%d%d%d", &a, &b, &c);
    if (a > b)
    {
        if (a > c)
        {
            printf("A is Greater Number");
        }
        else
        {
            printf("C is Greater Number");
        }
    }
    else
    {
        if (b > c)
        {
            printf("B is Greater Number");
        }
        else
        {
            printf("C is Greater Number");
        }
    }
}