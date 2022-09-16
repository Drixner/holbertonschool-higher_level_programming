#!/usr/bin/python3
def max_integer(my_list=[]):
    if my_list == 0:
        return None
    l = my_list[0]
    for i in my_list:
        if i > l:
            l = i
    return l
