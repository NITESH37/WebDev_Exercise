// To Print fibonacci series

#include <stdio.h>

void main()
{
    int n1 = 0, n2 = 1, n3;

    printf("%d %d ", n1, n2);
    for (int i = 2; i <= 10; i++)
    {
        n3 = n1 + n2;
        if (n3 < 10)
        {
            printf("%d ", n3);
        }
        n1 = n2;
        n2 = n3;
    }
}