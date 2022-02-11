# Signup

> ## Success Case

1. User fills all user fields
2. User send a post request with user fields
3. System validates password confirmation and doesn't return error
4. System validates Email and doesn't return error
5. System create a data on database
6. System return a http response with status code 200

> ## Failure Cases

>  ### Missing param
1. User doesn't fills all user fields
2. User send a post request with user fields
3. System return a bad request with status code 400 and a missing param error message

>  ### Password confirmation failed
1. User fills all user fields
2. User send a post request with user fields
3. Password confirmation throws
4. System return a bad request with status code 400 and a invalid param error message

> ### Email validation failed
1. User fills all user fields
2. User send a post request with user fields
3. email validation throws
4. System return a bad request with status code 400 and a invalid param error message

> ### Server throws
1. User fills all user fields
2. User send a post request with user fields
3. System return a server error with status code 500 and a server error message