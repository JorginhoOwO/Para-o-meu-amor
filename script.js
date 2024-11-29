    const button = document.getElementById('open-message');
    const text = document.getElementById('text');
    const subtext = document.getElementById('subtext');
    const body = document.body;

    function createFlower(x) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = `${x}px`;

    const stem = document.createElement('div');
    stem.className = 'stem';
    flower.appendChild(stem);

    const leafLeft = document.createElement('div');
    leafLeft.className = 'leaf left';
    const leafRight = document.createElement('div');
    leafRight.className = 'leaf right';
    flower.appendChild(leafLeft);
    flower.appendChild(leafRight);

    for (let i = 0; i < 6; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.animationDelay = `${i * 0.2}s`;
        flower.appendChild(petal);
    }

    const center = document.createElement('div');
    center.className = 'center';
    flower.appendChild(center);

    body.appendChild(flower);
    }

    function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    body.appendChild(heart);
    setTimeout(() => body.removeChild(heart), 3000);
    }

    button.addEventListener('click', () => {
    button.style.display = 'none';
    text.style.display = 'block';
    subtext.style.display = 'block';

    for (let i = 0; i < 8; i++) {
        const x = i * 120 + 60;
        createFlower(x);
    }

    setInterval(createHeart, 500);
    });