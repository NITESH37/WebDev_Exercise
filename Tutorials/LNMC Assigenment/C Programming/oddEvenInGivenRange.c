// To print all odd even inn given range

#include <stdio.h>

void main()
{
    int range1, range2;
    printf("Enter Range1: ");
    scanf("%d", &range1);
    printf("Enter Range2: ");
    scanf("%d", &range2);

    for (int i = range1; i <= range2; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d, ", i);
        }
    }
}