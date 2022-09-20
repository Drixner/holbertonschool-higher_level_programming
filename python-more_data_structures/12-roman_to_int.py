#!/usr/bin/python3
def roman_to_int(roman_string):
    if type(roman_string) is not str or roman_string is None:
        return 0
    dic = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    suma = 0
    for index in range(len(roman_string)):
        if (index > 0) and dic[roman_string[index]] > dic[roman_string[index - 1]]:
            suma += dic[roman_string[index]] - dic[roman_string[index - 1]] * 2
            continue
        suma += dic[roman_string[index]]
    return suma
