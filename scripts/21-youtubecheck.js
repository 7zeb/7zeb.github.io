async function checkYouTubeUploadToday() {
  const apiKey = "AIzaSyBe67a0-qIYhodHBj7FfSF2K6PrHOW0MEQ";
  const channelId = "UCM4Zvt9DVqzAHJOJoCgcF_g";
  const today = new Date().toISOString().split("T")[0];

  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=5`;

  const response = await fetch(url);
  const data = await response.json();

  for (const item of data.items) {
    const publishedDate = item.snippet.publishedAt.split("T")[0];
    if (publishedDate === today) {
      return {
        uploaded: true,
        title: item.snippet.title,
        time: item.snippet.publishedAt,
      };
    }
  }

  return { uploaded: false };
}
