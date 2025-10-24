function extractVideoId(url) {
    // Extracts YouTube video ID from a typical URL
    const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function setVideo(type) {
    let url, iframeId;
    if (type === 'primary') {
        url = document.getElementById('primaryUrl').value;
        iframeId = 'primaryVideo';
    } else {
        url = document.getElementById('secondaryUrl').value;
        iframeId = 'secondaryVideo';
    }
    const videoId = extractVideoId(url);
    if (videoId) {
        document.getElementById(iframeId).src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
    } else {
        alert('Please enter a valid YouTube URL.');
    }
}

// Security: Disable right-click and drag on video if desired
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('iframe').forEach(frame => {
        frame.addEventListener('contextmenu', e => e.preventDefault());
        frame.setAttribute('draggable', 'false');
    });
});
