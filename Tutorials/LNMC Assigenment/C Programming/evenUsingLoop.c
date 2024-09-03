#include <stdio.h>

void main()
{
    printf("Even ");
    for (int i = 1; i <= 50; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d ", i);
        }
    }
}