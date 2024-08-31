// Online C compiler to run C program online
#include <stdio.h>

int main()
{
    int a, b, c, d;
    printf("Enter four numbers: ");
    scanf("%d%d%d%d", &a, &b, &c, &d);

    a > b ? a > c   ? a > d ? printf("A is the greatest") : printf("D is the greatest")
              : c > d ? printf("C is the greatest")
                    : printf("D is the greatest")

    : b > c ? b > d ? printf("B is the greatest") : printf("D is the greatest")
    : c > d ? printf("C is the greatest")
            : printf("D is the greatest");

    return 0;
}