// To print factorial of n number
#include <stdio.h>
void main()
{
    int n, fact = 1;
    printf("Enter the number to calculate factorial: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        fact = fact * i; /* code */
    }
    printf("%d", fact);
}