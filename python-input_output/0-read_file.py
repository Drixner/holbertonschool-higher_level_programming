#!/usr/bin/python3
"""The definition of the class"""


def read_file(filename=""):
    """name the class"""
    with open(filename, "r", encoding="utf-8") as f:
        print(f.read(), end="")
