// When frequency and no. of obeservation

#include <stdio.h>

void main()
{
    float xb, n, x, f, sumX = 0, sumF = 0, sumXF = 0, XF = 1;
    printf("Declare No. of Observation: ");
    scanf("%f", &n);
    for (int i = 0; i < n; i++)
    {
        printf("Enter X: ");
        scanf("%f", &x);
        sumX = sumX + x;
        printf("Enter F: ");
        scanf("%f", &f);
        sumF = sumF + f;
        XF = x * f;
        sumXF = sumXF + XF;
    }
    xb = sumXF / sumF;
    printf("Sigma X : %f", sumX);
    printf(" F : %f", sumF);
    printf("Sigma XF : %f", sumXF);
    printf("Sigma X : %f", xb);
}