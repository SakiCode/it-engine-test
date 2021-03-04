document.getElementById('play-video').addEventListener('click', function() {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/FgEoCn-vG5w';
    iframe.width = '640';
    iframe.height = '360';
    iframe.setAttribute('allowfullscreen', '');
    this.parentNode.replaceChild(iframe, this);
});