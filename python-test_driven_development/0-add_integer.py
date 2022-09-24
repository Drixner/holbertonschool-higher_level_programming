#!/usr/bin/python3
"""
Integers add
a and b must be integers
ohterwise raise TypeError
"""


def add_integer(a, b=98):
    """
    Adds two integers
    a and b must be integers
    otherwise raise TypeError
    Return: addition of a and b, after caster
    to integers if thery are float
    """
    if (type(a) not in [float, int]):
        raise TypeError("a must be an integer")

    if (type(b) not in [float, int]):
        raise TypeError("b must be an integer")

    if (type(a) is float):
        a = int(a)
    if (type(b) is float):
        b = int(b)

    return (a + b)
