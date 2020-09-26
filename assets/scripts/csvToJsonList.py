import pandas as pd
import json

path_to_csv = r"C:\Users\lick\Documents\Alusia\doctors-assistant-app\assets\scripts\data\diagnosis_data.csv"
df = pd.read_csv(path_to_csv)

data_set = {
'module':'duza_depresja',
'data':[]
}

for index, row in df.iterrows():
    data_set['data'].append(
    {
    'disease_icd10': row.disease_icd10,
    'disease_name': row.disease_name,
    'diagnosis_conditions': {
      'main_cond_1': row.main_cond_1,
      'main_cond_2': row.main_cond_2,
      'side_cond_1': row.side_cond_1,
      'side_cond_2': row.side_cond_1,
      'side_cond_3': row.side_cond_1,
      'side_cond_4': row.side_cond_1,
      'side_cond_5': row.side_cond_1,
      'side_cond_6': row.side_cond_1,
      'side_cond_7': row.side_cond_1,
      }
    }
    )


with open('data.json', 'w') as o:
    json.dump(data_set, o)
