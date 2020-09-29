import sys
import csv
import sqlite3

if len(sys.argv) < 4:
    print('python3 importCsvToDb.py path_to_db path_to_csv table_name')
else:
    path_to_db = sys.argv[1]
    path_to_csv = sys.argv[2]
    table_name = sys.argv[3]

    conn = sqlite3.connect(path_to_db)
    c = conn.cursor()

    with open(path_to_csv,'r', encoding='utf-8') as csv_table:
        csv_reader = csv.reader(csv_table, delimiter=',')
        column_names =  ','.join(next(csv_reader))
        to_db = [record for record in csv_reader]

    c.executemany(f"INSERT INTO {table_name} ({column_names}) VALUES (?, ?);", to_db)
    conn.commit()
    conn.close()
