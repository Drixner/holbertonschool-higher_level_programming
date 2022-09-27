#!/usr/bin/python3
class LockedClass():
    """bloqueando la clases para que no registre atributos dinamicamente usando slots"""
    __slots__ = ["first_name"]
