#!/usr/bin/python3
Class lockedClass():
"""bloqueando la clases para que no registre atributos dinamicamente usando slots"""
    __slots__ = ["first_name"]
