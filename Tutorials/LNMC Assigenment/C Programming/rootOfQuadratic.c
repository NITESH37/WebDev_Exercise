#include <stdio.h>
#include <math.h>
void main()
{
    int a, b, c, d;
    float r1, r2, x1, x2;
    printf("Enter three  cofficet as  numbers: ");
    scanf("%d%d%d", &a, &b, &c);

    d = pow(b, 2) - 4 * a * c;
    printf("Your discreminant is: %d \n", d);
    if (d == 0)
    {
        r1 = r2 = -b / 2.0 * a;
        printf("Root are quals: %f %f", r1, r2);
    }
    else
    {
        if (d > 0)
        {
            x1 = (-b + (sqrt(d))) / (2 * a);
            x2 = (-b - (sqrt(d))) / (2 * a);
            printf("your root are %f and %f", x1, x2);
        }
        else
        {
            printf("Root are imaginary");
        }
    }
}