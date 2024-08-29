#include <stdio.h>
void main()
{
    int a;
    char c;
    printf("Enter a Character: ");
    scanf("%c", &c);

    a = c;
    if (a >= 65 && a <= 90)
    {
        c = a + 32;
        printf("%c", c);
    }
    else
    {
        if (a >= 97 && a <= 122)
        {
            c = a - 32;
            printf("%c", c);
        }

        else

        {
            printf("Enter Valid char");
        }
    }
}