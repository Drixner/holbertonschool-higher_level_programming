#!/usr/bin/python3
"""
This script takes one argument and returns
all values from the state table of hbtn_0e_0_usa
whose name matches the argument.
"""

import MySQLdb
from sys import argv

if __name__ == '__main__':
    """
    """
    db = MySQLdb.connect(host="localhost", user=argv[1],
                         port=3306, passwd=argv[2], db=argv[3])

    cur = db.cursor()
    cur.execute("SELECT * FROM states \
                WHERE name LIKE BINARY 'N%' \
                ORDER BY states.id ASC")
    rows = cur.fetchall()

    for row in rows:
        print(row)
