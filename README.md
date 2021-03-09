# Invite Task

## Usage

Rename "config/config.example.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev
```

## Example

- BaseURL: http://localhost:5000/api/v1

### Users
- Search users in database
  * API - /users/:searchTerm
  * Method: GET
   ```
  {
    "success": true,
    "data": [
        {
            "_id": "60475d182ec3204524710a49",
            "name": "Tum Tantasatiyanon"
        },
        {
            "_id": "60475e872ec3204524710a4b",
            "name": "Tum Alexander"
        }
    ]
  }
  ```
  
### Invites
- Get invites in database
    * API - /invites
    * Method: GET
   ```
  {
    "success": true,
    "data": [
        {
            "_id": "60476cc7933f7130947f15de",
            "isDelete": false,
            "userId": "60475d182ec3204524710a49",
            "createdAt": "2021-03-09T12:40:39.204Z",
            "updatedAt": "2021-03-09T12:40:39.204Z",
            "__v": 0,
            "user": {
                "_id": "60475d182ec3204524710a49",
                "name": "Tum Tantasatiyanon"
            }
        }
    ]
  }
  ```
- Add invite in database
    * API - /invites
    * Method: POST
   ```
  {
    "success": true,
    "data": {
        "isDelete": false,
        "_id": "604771b1b02d99140cfc35d3",
        "userId": "60475d182ec3204524710a48",
        "createdAt": "2021-03-09T13:01:37.881Z",
        "updatedAt": "2021-03-09T13:01:37.881Z",
        "__v": 0
    }
  }
  ```
- Delete invite from database
    * API - /invites/:id
    * Method: DELETE
   ```
  {
    "success": true,
    "data": {
        "isDelete": true,
        "_id": "604771b1b02d99140cfc35d3",
        "userId": "60475d182ec3204524710a48",
        "createdAt": "2021-03-09T13:01:37.881Z",
        "updatedAt": "2021-03-09T13:02:43.457Z",
        "__v": 0
    }
  }
  ```
