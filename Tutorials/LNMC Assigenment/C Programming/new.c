#include <stdio.h>

void main()
{
    int a, b, c, d;
    printf("Enter Four Number: ");
    scanf("%d%d%d%d", &a, &b, &c, &d);
    a > b   ? a > c ? a > d ? printf("A is greater") : printf("D is greater") : c > d ? printf("C is greater")
                                                                                      : printf("D is greater")
      : b > c ? b > d ? printf("B is greater") : printf("D is greater")
      : c > d ? printf("C is greater")
            : printf("D is greater");
}