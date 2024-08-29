#include <stdio.h>

void main()
{
    char ch;

    printf("Enter a character: ");
    scanf(" %c", &ch);

    if (ch >= 'A' && ch <= 'Z')
    {

        ch = ch + ('a' - 'A');
    }

    else if (ch >= 'a' && ch <= 'z')
    {

        ch = ch - ('a' - 'A');
    }

    else
    {
        printf("The entered character is not a letter.\n");
    }

    printf("Converted character: %c\n", ch);
}
