#include <stdio.h>
#include <stdlib.h>

int main()
{
    FILE *file;
    char ch;

    // Step 1: Create and write to the file
    file = fopen("example.txt", "w"); // Open file in write mode
    if (file == NULL)
    {
        printf("Error creating file.\n");
        return 1; // Exit with error code
    }

    // Write some text to the file
    fprintf(file, "Hello, World!\n");
    fprintf(file, "This is a file handling example in C.\n");
    fprintf(file, "Goodbye!\n");

    // Close the file after writing
    fclose(file);

    // Step 2: Read from the file and print to console
    file = fopen("example.txt", "r"); // Open file in read mode
    if (file == NULL)
    {
        printf("Error opening file for reading.\n");
        return 1; // Exit with error code
    }

    // Read and print each character from the file
    while ((ch = fgetc(file)) != EOF)
    {
        putchar(ch); // Print character to console
    }

    // Close the file after reading
    fclose(file);
    return 0; // Exit successfully
}