#include <stdio.h>>

void main()
{
    int sub1, sub2, sub3;
    float avg, per, total;
    printf("Enter first subject marks: ");
    scanf("%d", &sub1);
    printf("Enter second subject marks: ");
    scanf("%d", &sub2);
    printf("Enter third subject marks: ");
    scanf("%d", &sub3);
    total = sub1 + sub2 + sub3;
    per = (total * 100) / 300;
    avg = total / 3;
    printf("Total Marks Obtained = %d", total);
    printf("Average of marks = %.2f \n", avg);
    printf("Percantage of marks = %.2f", per);
}