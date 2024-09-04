// to find power of m^n
#include <stdio.h>
int main()
{
    int m, n;
    int result = 1;

    printf("Enter the base (m): ");
    scanf("%d", &m);

    printf("Enter the exponent (n): ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++)
    {
        result *= m;
    }

    printf("%d^%d = %d\n", m, n, result);

    return 0;
}