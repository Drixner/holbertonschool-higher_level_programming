#!/usr/bin/python3
"""Define a class square"""


class Square:
    """Class square

    Attributes:
        _size : size of the square
    """
    def __init__(self, size=0):
        if type(size) != int:
            raise TypeError("size must be an integer")
        else:
            if size < 0:
                raise ValueError("size must be >= 0")
            else:
                self.__size = size
