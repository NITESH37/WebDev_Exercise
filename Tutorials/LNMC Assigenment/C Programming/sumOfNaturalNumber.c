// Write a program to find sum of first 10 natural number

#include <stdio.h>
void main()
{
    int sum = 0;
    for (int i = 1; i <= 10; i++)
    {
        sum = sum + i;
    }
    printf("Sum is %d", sum);
}