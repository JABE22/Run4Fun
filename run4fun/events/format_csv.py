import pandas as pd

data = pd.read_csv('static/js/data/race_results/ekb-halfmar-raw.csv', delimiter=',')
data['First Name'] = data['First Name'] + data['Last Name']
data = data.rename(columns={'First Name':'Name'})
data = data.drop(columns=['Last Name'])
print(data)
data.to_csv('static/js/data/race_results/ekb-halfmar-raw.csv', sep=',', columns=data.columns, index=False)