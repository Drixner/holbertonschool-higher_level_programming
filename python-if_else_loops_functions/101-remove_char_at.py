#!/usr/bin/python3
def remove_char_at(str, n):
    n_str = ""
    if (n > len(str)) or (n < 0):
        return str
    for i in str:
        if i != str[n]:
            n_str = n_str + i
    return n_str
