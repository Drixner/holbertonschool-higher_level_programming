#!/usr/bin/python3
"""
Locked Class with no class or object attributte
That prevents the user from dinamically creating
new instance attribute is called first_name
"""

class LockedClass():
    """bloqueando la clases para que no registre
    atributos dinamicamente usando slots"""
    __slots__ = ["first_name"]
