#!/usr/bin/python3
"""The Mylist class defines"""


class Mylist(list):
    """Class Mylist
    inheritance from list"""
    def print_sorted(self):
        """print list ordered"""
        print(sorted(self))
