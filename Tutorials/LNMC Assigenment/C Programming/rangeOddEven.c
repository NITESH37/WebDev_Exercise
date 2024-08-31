// Find Even number from given rane

#include <stdio.h>
void main()
{
    int a, b;
    printf("Enter the start of the range: ");
    scanf("%d", &a);
    printf("Enter the end to the range: ");
    scanf("%d", &b);
    printf("Even number in range %d to %d \n", a, b);
    for (int i = a; i <= b; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d ", i);
        }
    }
}