import requests
from bs4 import BeautifulSoup

headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '3600',
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'
}

url = "https://ftc-events.firstinspires.org/2022/USCANOSBM1B/rankings"
req = requests.get(url, headers)
soup = BeautifulSoup(req.content, 'html.parser')
retlist = []
for tr in soup.find_all('tr'):
    tds = list(tr.find_all('td'))
    if len(tds) > 0:
        rank       = tds[0].get_text().strip()
        team_num   = tds[1].get_text().strip()
        team_link  = tds[1].find('a').get('href')
        avg_rp     = tds[2].get_text().strip()
        avg_tbp1   = tds[3].get_text().strip()
        avg_tbp2   = tds[4].get_text().strip()
        high_score = tds[5].get_text().strip()
        wlt        = tds[6].get_text().strip()
        retlist.append( "{" + "\"Rank\":" + rank + ", \"TeamNumber\":" + team_num + ", \"Link\":\"" + team_link + "\", \"HighScore\":" + high_score + "}")

retstr = "[" + ",".join(retlist) + "]"
print(retstr)

text_file = open("Output.txt", "w")
text_file.write(retstr)
text_file.close()
# print(soup.prettify())