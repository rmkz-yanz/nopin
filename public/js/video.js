document.getElementById('apiFormVideo').addEventListener('submit', function (e) {
    e.preventDefault();

    const videoUrl = document.getElementById('urlInputVid').value;
    const apiKey = '5d83f68d610a89a70c3c944d';
    const url = `https://api.lolhuman.xyz/api/ytvideo2?apikey=${apiKey}&url=${encodeURIComponent(videoUrl)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const result = data.result;
            document.getElementById('title-vid').textContent = result.title;
            document.getElementById('video-vid').src = result.link;
            document.getElementById('video-vid').style.display = 'block';
            document.getElementById('notip-vid').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching the data:', error);
        });
});