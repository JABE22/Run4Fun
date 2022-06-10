import pandas as pd
from ccodes import CODES, aplha2to3
import os

'''
NOTE: 
* Run this file from the path it is located in order to successful read and write from the static file paths (hard coded)
* To run file, use virtual project python environment containing pandas 
  (In Visual Studio Code - Right Click -> Run Code does not work: uses C:/Python311/python.exe)
* Do not forget to modify file for your needs (file names, function settings, etc.)
* In my particular case, for example: make sure right virtual environment is activated, move to right folder
  and use "python" command:
  >> conda activate cenv
  >> cd c:/Users/jarno/django_projects/Run4Fun/run4fun/events/static/python
  >> python csv-transformer.py
'''


# CSV transformer for data from Königsschlösser Marathon, Füssen
def füssen():
    #print(os.path)
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

def ekb():
    data = pd.read_csv('data/race_results/ekb-halfmar-raw.csv', delimiter=',')
    data['First Name'] = data['First Name'] + data['Last Name']
    data = data.rename(columns={'First Name':'Name'})
    data = data.drop(columns=['Last Name'])
    print(data)
    data.to_csv('data/race_results/ekb-halfmar.csv', sep=',', columns=data.columns, index=False)

# Select functions to run
helsinki()
füssen()