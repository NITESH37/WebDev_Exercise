// write a prigram to find of the no which is divisble by 5

#include <stdio.h>
void main()
{
    for (int i = 1; i <= 40; i++)
    {
        if (i % 5 == 0)
        {
            printf("%d, ", i);
        }
    }
}