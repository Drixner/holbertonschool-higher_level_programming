#!/usr/bin/python3
"""
this module have the base class
"""


class Base:
    """a class base"""
    __nb_objects = 0

    def __init__(self, id=None):
        """init the class base"""
        if id != None:
            self.id = id
        else:
            Base.__nb_objects += 1
            self.id = self.__nb_objects
