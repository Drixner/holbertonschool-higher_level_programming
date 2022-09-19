#!/usr/bin/python3
def best_score(a_dictionary):
    if (not a_dictionary):
        return None
    if (not a_dictionary.values()):
        return None
    for k, v in a_dictionary.items():
        if v == max(a_dictionary.values()):
            return(k)
