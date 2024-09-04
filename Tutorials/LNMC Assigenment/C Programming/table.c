// To print table
#include <stdio.h>

void main()
{
    int n;
    printf("Enter a number to print table: ");
    scanf("%d", &n);
    for (int i = 1; i <= 10; i++)
    {
        printf("%d \n", i * n);
    }
}