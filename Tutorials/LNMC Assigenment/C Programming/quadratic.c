#include <stdio.h>
#include <math.h> // it is used for math calculation
#include <conio.h>
void main()
{
    float x, y, z, det, root1, root2, real, img;
    printf("\n Enter the value of coefficient x, y and z: \n ");
    scanf("%f %f %f", &x, &y, &z);
    // define the quadratic formula of the nature of the root
    det = y * y - 4 * x * z;
    // defines the conditions for real and different roots of the quadratic equation
    if (det > 0)
    {
        root1 = (-y + sqrt(det)) / (2 * x);
        root2 = (-y + sqrt(det)) / (2 * x);
        printf("\n Value of root1 = %.2f and value of root2 = %.2f", root1, root2);
    }
    // elseif condition defines both roots ( real and equal root) are equal in the quadratic equation
    else if (det == 0)
    {
        root1 = root2 = -y / (2 * x); // both roots are equal;
        printf("\n Value of root1 = %.2f and Value of root2 = %.2f", root1, root2);
    }
    // if det < 0, means both roots are real and imaginary in the quadratic equation.
    else
    {
        real = -y / (2 * x);
        img = sqrt(-det) / (2 * x);
        printf("\n value of root1 = %.2f + %.2fi and value of root2 = %.2f - %.2fi ", real, img, real, img);
    }
    getch();
}