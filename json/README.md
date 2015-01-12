Use snake case for file names here, since they will be used to create
Javascript variable names

## Data model

A symptom has the following structure:

```
    {
      code: '',
      name: '',
      description: '',
      synonyms: [''],
      translations: {
        fr: {
          name: '',
          description: '',
          synonyms: ['']
        }
      }
    }
```

Name and code are mandatory.

Codes (`code`) should be unique.

Use lowercase strings for names.


## Lists file

The file has the following structure:

```
    [
      {
        countryCode: 'default|gn|ml|lr|sl|mg',
        followUp: ['symptom_code_1', ..., 'symptom_code_m'],
        case: ['symptom_code_1', ..., 'symptom_code_n']
      }
    ]
```

1. `followup` contains the list of symptoms for the Contact Tracing App.
2. `case` contains the list for the Case Investigation and Dashboard App.

If one of the list is empty the associated app will use the default list
instead. If default list is also empty, there are no symptoms for this app.
