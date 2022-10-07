#!/usr/bin/python3
"""
this module is the class squere
"""


from models.rectangle import Rectangle


class Square(Rectangle):
    """A representation of a square"""
    def __init__(self, size, x=0, y=0, id=None):
        """initializes the square"""
        super().__init__(size, size, x, y, id)
        self.size = size

    @property
    def size(self):
        """getter"""
        return self.width

    @size.setter
    def size(self, value):
        """setter"""
        self.width = value
        self.height = value

    def __str__(self):
        """informal string representation of the square"""
        return "[Square] ({:d}) {:d}/{:d} - {:d}".format(self.id, self.x,
