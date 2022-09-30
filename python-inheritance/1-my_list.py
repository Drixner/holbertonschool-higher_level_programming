#!/usr/bin/python3
"""The Mylist class defines"""


class MyList(list):
    """Class Mylistinheritance from list"""
    def print_sorted(self):
        """print list ordered"""
        print(sorted(self))
