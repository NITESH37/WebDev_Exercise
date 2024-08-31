#include <stdio.h>

int main()
{
    int n, i, medianClassIndex;
    float N, CF, L, f, h;

    // Input number of groups
    printf("Enter the number of groups: ");
    scanf("%d", &n);

    float classIntervals[n];
    float frequencies[n];
    float cumulativeFrequencies[n];

    // Input class intervals and frequencies
    printf("Enter the class intervals:\n");
    for (i = 0; i < n; i++)
    {
        scanf("%f", &classIntervals[i]);
    }

    printf("Enter the frequencies:\n");
    for (i = 0; i < n; i++)
    {
        scanf("%f", &frequencies[i]);
    }

    // Calculate cumulative frequencies
    cumulativeFrequencies[0] = frequencies[0];
    for (i = 1; i < n; i++)
    {
        cumulativeFrequencies[i] = cumulativeFrequencies[i - 1] + frequencies[i];
    }

    // Total number of observations
    N = cumulativeFrequencies[n - 1];
    float halfN = N / 2;

    // Find
    for (i = 0; i < n; i++)
    {
        if (cumulativeFrequencies[i] >= halfN)
        {
            medianClassIndex = i;
            break;
        }
    }

    // Median class details
    L = classIntervals[medianClassIndex] - (classIntervals[1] - classIntervals[0]) / 2; // Lower boundary
    f = frequencies[medianClassIndex];
    CF = (medianClassIndex == 0) ? 0 : cumulativeFrequencies[medianClassIndex - 1];
    h = classIntervals[1] - classIntervals[0]; // Width of class interval

    // Calculate the median
    float median = L + ((halfN - CF) / f) * h;

    printf("The median is: %.2f\n", median);

    return 0;
}
