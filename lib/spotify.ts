const baseUrl = "https://api.spotify.com/";
const urlParams = "v1/me/top/tracks?time_range=long_term&limit=5";
const spotifyToken =
  "BQCzsNwxnywjrf8w6EkxjsO0IiQoeTSs9oS7QnQN4jKL98zNhn1dKNAmGXjNurfl0EQPHIonNISAYvX1sKxQsMR-_lvvjwqHRHT2J8ntngXgPDNcauEoDtNvXZoWOm3XhbjBchiOf23jlrYCow1xiYEgHtzUqvu_d3HOS-A0U9Gl7uh7JUqngF9WuebA-sekLnaGaaDsVR53iq5ADca8Z4ElJbi0ByxPSPrpe-V0kzLuW6AHNSEUPERDsnbLgA1DZPL4g_qmD-jWVrWC0SAn";

async function getTopTracks() {
  const res = await fetch(`${baseUrl}${urlParams}`, {
    headers: {
      Authorization: `Bearer ${spotifyToken}`,
    },
  });
  const serializedRes = await res.json();
  console.log(serializedRes);
}

export default getTopTracks;
