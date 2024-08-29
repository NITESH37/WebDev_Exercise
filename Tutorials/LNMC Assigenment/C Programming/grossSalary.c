#include <stdio.h>
void main()
{
    int basic, hra, da, gross;
    printf("Enter Basic, hra,da: ");
    scanf("%d%d%d", &basic, &hra, &da);
    gross = basic + (basic * hra / 100.0) + (basic * da / 100.0);
    printf("Your gross salary = %d \n", gross);

    if (gross < 25000)
    {
        printf("you don't need to pay tax");
    }
    else
    {
        if (gross < 40000)
        {
            printf("You pay 20%% percent of tax4");
        }
        else
        {
            printf("You pay 40%% percent of tax");
        }
    }
}