#include <stdio.h>
#include <math.h>

int main()
{
    int choice;
    float a, r, t, SI, CI;

    printf("CHOOSE FROM THE FOLLOWING:");
    printf("\nPRESS 1 FOR SIMPLE INTEREST");
    printf("\nPRESS 2 FOR COMPOUND INTEREST");
    printf("\nENTER YOUR CHOICE: ");
    scanf("%d", &choice);

    switch (choice)
    {
    case 1:
        printf("\nYOU CHOSE SIMPLE INTEREST.");
        printf("\nEnter Principal amount: ");
        scanf("%f", &a);
        printf("\nEnter the Interest Rate: ");
        scanf("%f", &r);
        printf("\nEnter the Time: ");
        scanf("%f", &t);
        SI = (a * r * t) / 100;
        printf("\nSIMPLE INTEREST: %f", SI);
        printf("\nTOTAL AMOUNT: %f", a + SI);
        break;

    case 2:
        printf("\nYOU CHOSE COMPOUND INTEREST.");
        printf("\nEnter Principal amount: ");
        scanf("%f", &a);
        printf("\nEnter the Interest Rate: ");
        scanf("%f", &r);
        printf("\nEnter the Time: ");
        scanf("%f", &t);
        CI = a * (pow((1 + r / 100), t) - 1);
        printf("\nCOMPOUND INTEREST: %f", CI);
        printf("\nTOTAL AMOUNT: %f", a + CI);
        break;

    default:
        printf("\nINVALID INPUT.");
    }

    return 0;
}
