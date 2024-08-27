#include <stdio.h>

void main()
{
    int n;
    printf("ENTER A VALUE: ");
    scanf("%d", &n);
    if (n % 3 == 0)
    {
        if (n % 7 == 0)
        {
            printf("\n %d is divisible by 3 and 7.", n);
        }
        else
        {
            printf("\n %d is divisible by 3 but not by 7.", n);
        }
    }
    else
    {
        if (n % 7 == 0)
        {
            printf("\n %d is not divisible by 3 but by 7.", n);
        }
        else
        {
            printf("\n %d is neither divisible by 3 nor by 7.", n);
        }
    }
}