document.getElementById('apiFormAudio').addEventListener('submit', function (e) {
    e.preventDefault();

    const query = document.getElementById('urlInput').value;
    const apiKey = '5d83f68d610a89a70c3c944d';
    const url = `https://api.lolhuman.xyz/api/ytplay2?apikey=${apiKey}&query=${encodeURIComponent(query)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const result = data.result;
            document.getElementById('thumbnail-aud').src = result.thumbnail;
            document.getElementById('thumbnail-aud').style.display = 'block';
            document.getElementById('title-aud').textContent = result.title;
            document.getElementById('audio-aud').src = result.audio;
            document.getElementById('audio-aud').style.display = 'block';
            document.getElementById('notip-aud').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching the data:', error);
        });
});