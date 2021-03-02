# Sample app

This app is for student management.

## Notes

- `frontend`: gives the visual views to interact
  - setup the envi with react-ts and some code configs
  - adding react admin: `npm i react-admin ra-data-simple-rest @material-ui/core`
- `backend`: handles the logic of reading data from Excel, uploads data to DB
  - `json-server`: use just to tesr REST API and data manipulating

## Fake data

```json
{
  "id": 1,
  "participantId": "e123456",
  "fullName": "John Doe",
  "address": "123 Long Street",
  "assignment1": 6,
  "assignment2": 7,
  "exam": 8
},
{
  "id": 2,
  "participantId": "e213009",
  "fullName": "Jane Dean",
  "address": "456 Short Street",
  "assignment1": 8,
  "assignment2": 5,
  "exam": 9
},
{
  "id": 3,
  "participantId": "e122470",
  "fullName": "John Doe",
  "address": "789 Medium Street",
  "assignment1": 3,
  "assignment2": 5,
  "exam": 10
},
```

## Todo List

- [ ] **User Story**: I can read data from an Excel `.xlsx` file
- [ ] **User Story**: I have a admin board to managing courses, students and grades
- [ ] **User Story**: I can add/modify/edit students
- [ ] **User Story**: I can add/modify/edit courses
- [ ] **User Story**: I can add/modify/edit grades
- [ ] **User Story**: I must be authenticated and authorized (as a teacher role)
- [ ] **User Story**: I can somehow updates everything to a MySQL db
