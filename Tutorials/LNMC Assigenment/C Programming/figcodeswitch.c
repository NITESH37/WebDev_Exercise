#include <stdio.h>
void main()
{
    int figCode;
    float r, l, br, ba, h, s, area;
    printf("TO CALCULATE AREA OF VARIOUS SHAPES");
    printf("\nPRESS 1 FOR CIRCLE");
    printf("\nPRESS 2 FOR RECTANGLE");
    printf("\nPRESS 3 FOR TRIANGLE");
    printf("\nPRESS 4 FOR SQUARE");
    printf("\nENTER YOUR CHOICE: ");
    scanf("%d", &figCode);
    switch (figCode)
    {
    case 1:
        printf("\nYOU CHOOSE CIRCLE.");
        printf("\nEnter radius of the circle: ");
        scanf("%f", &r);
        area = 3.14 * r * r;
        printf("\nArea Of the Circle is: %.2f", area);
        break;
    case 2:
        printf("\nYOU CHOOSE RECTANGLE");
        printf("\nEnter length of rectangle: ");
        scanf("%f", &l);
        printf("\nEnter breadth of rectangle: ");
        scanf("%f", &br);
        area = l * br;
        printf("\nArea Of the rectangle is: %.2f", area);
        break;
    case 3:
        printf("\nYOU CHOOSE TRIANGLE.");
        printf("\nEnter base of the triangle: ");
        scanf("%f", &ba);
        printf("\nEnter height of the triangle: ");
        scanf("%f", &h);
        area = (1 / 2) * ba * h;
        printf("\nArea Of the Triangle is: %.2f", area);
        break;
    case 4:
        printf("\nYOU CHOOSE SQUARE.");
        printf("\nEnter the side of the square: ");
        scanf("%f", &s);
        area = s * s;
        printf("\nArea Of the Square is: %.2f", area);
        break;
    default:
        printf("\nINVALID INPUT.");
    }
}