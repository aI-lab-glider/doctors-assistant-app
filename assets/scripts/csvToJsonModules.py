import pandas as pd
import json

path_to_csv = r"data/modules_data.csv"
df = pd.read_csv(path_to_csv)

data = []

for column in df.columns:
    df[column] = df[column].fillna('null')

for index, row in df.iterrows():
    dict = {
        'module_name': row['nazwa'],
        'module_code': row['skrot'],
        'min_major_true': row['min_liczba_major']
    }
    data.append(dict)


with open('modules_data.json', 'w') as o:
    json.dump(data, o)
