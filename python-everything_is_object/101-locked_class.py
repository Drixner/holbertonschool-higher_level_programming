#!/usr/bin/python3
"""
Locked Class with no class or object attributte
That prevents the user from dinamically creating
new instance attribute is called first_name
"""


Class lockedClass():
    """
    Locked class
    """

    __slots__ = ["first_name"]
