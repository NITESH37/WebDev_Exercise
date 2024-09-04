// to find mean
#include <stdio.h>
void main()
{
    int n, m;
    float mean, sum = 0.0;
    printf("Enter how many data to find the mean: ");
    scanf("%d", &m);
    for (int i = 0; i < m; i++)
    {
        printf("Enter a value: ");
        scanf("%d", &n);
        sum = sum + n;
    }
    mean = sum / m;
    printf("%f \n", sum);
    printf("%f", mean);
}