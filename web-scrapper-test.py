import requests
from bs4 import BeautifulSoup

# Create a prompt for the user to enter a website they would like to scrape.
url = input("Enter website: ")

# Use a GET request to recieve info from the website. Assign it to a variable.
response = requests.get(url)

# Pass the GET response into the Beautiful Soup constructor and parse throught the HTML.
soup = BeautifulSoup(response.content, "html.parser")

# For loop to find the data you are looking for, then print the data to the console.
for link in soup.find_all("img"):
    print(link.get("alt"))

