#!/usr/bin/python3
"""Define a class square"""


class Square
    """Represent class square

    Attributes:
        __size of a square"""
    def __init__(self, size=0):
        """Initialize the square
        Args:
            size of size a the square
        Returns::
            None
        """
        if type(size) != int:
            raise TypeError("size must be a integer")
        else:
            if size < 0:
                raise ValueError("size must be >= 0")
            else:
                self.__size = size
    def area(self):
        """Process to multiply
        Returns
            The area of the square
        """
        return (self.__size) ** 2
