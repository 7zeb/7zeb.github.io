import urllib.request
import xml.etree.ElementTree as ET
import re

CHANNEL_ID = "UCM4Zvt9DVqzAHJOJoCgcF_g"
RSS_URL = f"https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}"

NS = {
    "atom": "http://www.w3.org/2005/Atom",
    "yt": "http://www.youtube.com/xml/schemas/2015",
}

with urllib.request.urlopen(RSS_URL) as r:
    root = ET.fromstring(r.read())

entry = root.find("atom:entry", NS)
title = entry.find("atom:title", NS).text
video_id = entry.find("yt:videoId", NS).text
embed_url = f"https://www.youtube.com/embed/{video_id}"

block = (
    "<!-- YOUTUBE-LATEST-START -->\n"
    f"        <p>7Zeb's Newest Video is: {title}</p>\n"
    f"        <h3>Watch it now!</h3>\n"
    f'        <iframe width="650" height="542" src="{embed_url}" title="{title}" frameborder="0" '
    f'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" '
    f'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>\n'
    "        <!-- YOUTUBE-LATEST-END -->"
)=

if "<!-- YOUTUBE-LATEST-START -->" not in content:
    raise RuntimeError("Markers not found in index.html — add <!-- YOUTUBE-LATEST-START --> and <!--
YOUTUBE-LATEST-END --> around the newest video block.")
      
with open("index.html", "r") as f:
    content = f.read()

updated = re.sub(
    r"<!-- YOUTUBE-LATEST-START -->.*?<!-- YOUTUBE-LATEST-END -->",
    block,
    content,
    flags=re.DOTALL,
)

if updated == content:
    print("No change.")
else:
    with open("index.html", "w") as f:
        f.write(updated)

    print(f"Updated: {title} ({video_id})")
