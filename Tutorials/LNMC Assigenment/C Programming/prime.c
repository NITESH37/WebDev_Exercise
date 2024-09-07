// To check weather it is prime or not

#include <stdio.h>

void main()
{
    int n, c = 0;
    printf("Enter a number: ");
    scanf("%d", &n);
    for (int i = 2; i < n; i++)
    {
        if (n % i == 0)
        {
            c = c + 1;
        }
    }
    if (c == 0)
    {
        printf("IT is a Prime number: %d", n);
    }
    else
    {
        printf("Not a Prime number: %d", n);
    }
}