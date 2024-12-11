#include <stdio.h>
#include <conio.h>

void main()
{
    FILE *fpt;
    fpt = fopen("first.text", "w");
    if (fpt == NULL)
    {
        printf("ERROR CREATING FILE");
        return 1;
    }
    fprintf(fpt, "Hello, this is my first");
    fclose(fpt);
}