#include <stdio.h>
void main()
{
    int a, b, c;
    printf("Enter first Number: ");
    scanf("%d", &a);
    printf("Enter second Number: ");
    scanf("%d", &b);

    for (int i = a; i <= b; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d ,", a);
        }
        else
        {
            printf("%d ,", a);
        }
    }
}