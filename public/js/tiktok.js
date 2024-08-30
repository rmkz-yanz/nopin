document.getElementById('apiFormTiktok').addEventListener('submit', function (e) {
    e.preventDefault();

    const query = document.getElementById('urlInputTik').value;
    const apiKey = '5d83f68d610a89a70c3c944d';
    const url = `https://api.lolhuman.xyz/api/tiktok?apikey=${apiKey}&url=${encodeURIComponent(query)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const result = data.result;
            document.getElementById('avatar-tik').src = result.author.avatar;
            document.getElementById('avatar-tik').style.display = 'block';
            document.getElementById('title-tik').textContent = result.title;
            document.getElementById('link-tik').src = result.link;
            document.getElementById('link-tik').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching the data:', error);
        });
});