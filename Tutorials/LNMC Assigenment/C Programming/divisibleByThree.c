#include <stdio.h>
void main()
{
    int a;
    printf("Enter a number: ");
    scanf("%d", &a);
    if (a % 3 == 0)
    {
        /* code */
        if (a % 7 != 0)
        {
            printf("%d is divisible by 3 but not  divisible by 7", a);
        }
        else
        {
            printf("%d is divisible by 3 but also  divisble by 7", a);
        }
    }
    else
    {
        printf("%d is not divisible by 3", a);
    }
}