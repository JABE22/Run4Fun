import pandas as pd
from ccodes import CODES, aplha2to3
import os


# CSV transformer for data from Königsschlösser Marathon, Füssen
def füssen():
    print(os.path)
    data = pd.read_csv('data/raceresults/füs-halfmar-raw.csv', delimiter='\t')
    # Removes decimals from place indicator columns
    data['Platz'] = data['Platz'].astype('int32')
    data['M'] = data['M'].fillna(0).astype('int32').astype('str').replace('0','')
    data['W'] = data['W'].fillna(0).astype('int32').astype('str').replace('0','')
    # Combines first and last names
    data['Vorname'] = data['Vorname'] + " " + data['Nachname']
    # Renames and drops unused columns from the data
    data = data.rename(columns={'Vorname':'Name','Nation':'CountryCode','AK':'Category','Netto':'Time'})
    data = data.drop(columns=['M','W','Nachname','AK-Platz'])
    print(data.columns)
    # Country code modifications
    print(data['CountryCode'].unique())
    data['CountryCode'] = data['CountryCode'].fillna('ukw').apply(lambda x: aplha2to3.get(x))
    print(data['CountryCode'])
    # Inserts Nation column to achieve compatibility for some specific application
    nations = data['CountryCode'].apply(lambda x: CODES.get(x))
    data.insert(3,'Nation',nations)
    print(data['Nation'])
    # Flip column order of Club and category
    data = data[['Platz','Nr.','Name','Nation','CountryCode','Verein','Category','Time','Brutto']]
    print(data.columns)
    print(data)
    print(data[data['Platz']==83].CountryCode)
    data.to_csv('data/raceresults/füs-halfmar.csv', sep=',', columns=data.columns, index=False)

def helsinki():
    print('Function \'helsinki\' not yet implemented')

# Select functions to run
helsinki()
füssen()