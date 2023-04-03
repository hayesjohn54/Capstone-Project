import hashlib

# Define a function to hash a password using the SHA-256 algorithm
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

# Get a username and password from the user
username = input("Enter your username: ")
password = input("Enter your password: ")

# Hash the password
hashed_password = hash_password(password)

# Simulate storing the hashed password in a database
database = {username: hashed_password}

# Get another username and password from the user
username2 = input("Enter another username: ")
password2 = input("Enter another password: ")

# Hash the password
hashed_password2 = hash_password(password2)

# Check if the username and hashed password matches the one stored in the database
if username2 in database and database[username2] == hashed_password2:
    print("Login successful!")
else:
    print("Login failed.")
