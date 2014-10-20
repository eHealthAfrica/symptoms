use snake case for file names here, since they will be used to create
Javascript variable names

## Data model

A symptom has the following structure:

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

Name and code are mandatory.

Codes (`code`) should be unique.

Use lowercase strings for names.
