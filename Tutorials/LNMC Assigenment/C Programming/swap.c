#include <stdio.h>

void main()
{
    int n1, n2, n3;
    printf("Enter First Number: ");
    scanf("%d", &n1);
    printf("Enter Second Number: ");
    scanf("%d", &n2);
    n3 = n1;
    n1 = n2;
    n2 = n3;
    printf("After Swapping %d %d", n1, n2);
}