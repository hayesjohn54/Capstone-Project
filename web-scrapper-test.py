import requests
from bs4 import BeautifulSoup

url = input("Enter website: ")
response = requests.get(url)

soup = BeautifulSoup(response.content, "html.parser")

for link in soup.find_all("img"):
    print(link.get("alt"))

