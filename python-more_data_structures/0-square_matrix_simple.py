#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    for n in matrix:
        print(" ".join("{:d}".format(i)for i in n))
