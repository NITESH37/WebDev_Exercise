// to print  1 to 100 which is divisible by 5 but not 3
#include <stdio.h>
void main()
{
    for (int i = 1; i < 100; i++)
    {
        if (i % 5 == 0 && i % 3 != 0)
        {
            printf("%d,", i);
        }
    }
}