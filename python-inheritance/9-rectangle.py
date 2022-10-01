#!/usr/bin/python3
"""Class definition"""


class BaseGeometry:
    """A class with public instance methods area and integer_validator"""
    def area(self):
        raise Exception("area() is not implemented")

    def integer_validator(self, name, value):
        if type(value) is not int:
            raise TypeError(f'{name} must be an integer')
        if value <= 0:
            raise ValueError(f'{name} must be greater than 0')


class Rectangle(BaseGeometry):
    """Class inherits from BaseGeometry"""

    def __init__(self, width, height):
        """Instantiation with width and height"""
        self.__width = width
        self.integer_validator("width", width)
        self.__height = height
        self.integer_validator("height", height)

    def area(self):
        """Returns area of the rectangle"""
        return self.__width * self.__height

    def __str__(self):
        """informal string representation of the rectangle"""
        return ("[Rectangle] {}/{}".format(self.__width, self.__height))
