// PROGRAM TO SHOW ENTERED CHARACTER IS A VOWEL OR NOT
#include <stdio.h>
void main()
{
    int a;
    char b;
    printf("ENTER A CHARACTER: ");
    scanf("%c", &b);
    printf("\nASCII VALUE OF ENTERED CHARACTER: %c", b);
    a = b;
    if (a == 65 || a == 69 || a == 73 || a == 79 || a == 85)
    {
        printf("\n%c is a Vowel", a);
    }
    else if (a == 97 || a == 101 || a == 105 || a == 111 || a == 117)
    {
        printf("\n%c is a Vowel", a);
    }
    else
    {
        printf("\n%c is not a Vowel", a);
            
    }
     
}