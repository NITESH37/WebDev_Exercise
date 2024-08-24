#include <stdio.h>
#define pi 3.14

void main()
{
    int radius;
    float area, peri;
    printf("Enter Radius: ");
    scanf("%df", &radius);
    area = pi * radius * radius;
    peri = 2 * pi * radius;
    printf("Area of circle is = %.3f \n", area);
    printf("Perimeter of circle is  = %.3f", peri);
}