#!/usr/bin/python3
"""Define a class square"""


class Square:
    """Class square
    art:
        __size, value Integer

    Return:
        None
    """
    def __init__(self, size=0):
        if type(size) is not int:
            raise TypeError("size must be an integer")
        else:
            if size < 0:
                raise ValueError("size must be >= 0")
            else:
                self._size = size
