import pandas as pd
import json

path_to_csv = r"../data/diagnosis_data.csv"
df = pd.read_csv(path_to_csv)

data = []
modules_codes = df.module_code.unique()

for column in df.columns:
    df[column] = df[column].fillna('null')

for module_code in modules_codes:
    module_data = [{
        'disease_icd10': row.disease_icd10,
        'disease_name': row.disease_name,
        'diagnosis_conditions': {
            'main_cond_1': row.main_cond_1,
            'main_cond_2': row.main_cond_2,
            'side_cond_1': row.side_cond_1,
            'side_cond_2': row.side_cond_2,
            'side_cond_3': row.side_cond_3,
            'side_cond_4': row.side_cond_4,
            'side_cond_5': row.side_cond_5,
            'side_cond_6': row.side_cond_6,
            'detail_cond': row.detail_cond
        }
    }
        for (index, row) in df.iterrows()]

    data.append({
        'module_code': module_code,
        'module_data': module_data
    })


with open('data.json', 'w') as o:
    json.dump(data, o)
