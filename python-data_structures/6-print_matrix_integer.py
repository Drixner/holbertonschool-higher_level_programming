#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    for j in range(len(matrix)):
        for x in range(len(matrix[0])):
            print("{:d}".format(matrix[j][x]), end="")
            if x < len(matrix[0]) - 1:
                print(" ", end="")
        print()
