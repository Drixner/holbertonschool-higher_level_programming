#!/usr/bin/python3
""" definition the class """


def inherits_from(obj, a_class):
    """Attributes of the class"""
    return (issubclass(type(obj), a_class) and type(obj) != a_class)
