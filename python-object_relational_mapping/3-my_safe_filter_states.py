#!/usr/bin/python3
"""
This script takes arguments and returns 
all values from the state table of 
hbtn_0e_0_usa where the name matches 
the argument. But this time, write one
that is safe from MySQL injections.
"""

import MySQLdb
from sys import argv

if __name__ == '__main__':
    """
    Access to he database and get the states
    from the databases
    """

    db = MySQLdb.connect(host="localhost", user=argv[1], port=3306,
                         passwd=argv[2], db=argv[3])

    with db.cursor() as cur:
        cur.execute("""
        SELECT * FROM states
        WHERE name LIKE BINARY %(name)s
        ORDER BY states.id ASC""",
                    {'name':argv[4]})

        rows = cur.fetchall()
    if rows is not None:
        for row in rows:
            print(row)
