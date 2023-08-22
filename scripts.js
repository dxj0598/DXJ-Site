const musicBoxes = document.querySelectorAll('.music-box');

musicBoxes.forEach((box, index) => {
    const cover = box.querySelector('.album-cover');
    const audio = box.querySelector('.audio-element');

    cover.addEventListener('click', function() {
        // 停止所有其他的音乐和旋转动画
        musicBoxes.forEach((otherBox, otherIndex) => {
            if (index !== otherIndex) {
                const otherAudio = otherBox.querySelector('.audio-element');
                const otherCover = otherBox.querySelector('.album-cover');
                otherAudio.pause();
                otherAudio.currentTime = 0;
                otherCover.style.animation = 'none';
            }
        });

        // 播放或暂停当前的音乐并设置旋转动画
        if (audio.paused) {
            audio.play();
            cover.style.animation = 'spin 18s linear infinite';
        } else {
            audio.pause();
            cover.style.animation = 'none';
        }
    });
});
