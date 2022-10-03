#!/usr/bin/python3
"""
Contains function that returns int lists of pascal triangle of any given size
"""


def pascal_triangle(n):
    """Returns a pascal triangle matrix"""
    triangle = []
    for i in range(n):
        row = [1]
        if i > 0:
            for n in range(len(triangle[i - 1]) - 1):
                row.append(triangle[i - 1][n] + triangle[i - 1][n + 1])
            row.append(1)
        triangle.append(row)
    return triangle
