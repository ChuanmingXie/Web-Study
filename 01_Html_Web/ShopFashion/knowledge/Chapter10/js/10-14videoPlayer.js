
var myvideo = document.getElementById('myvideo');
var videoPlayer = document.getElementById('videoPlayer');
var videoRange = document.getElementById('videoRange');
var videoInfo = document.getElementById('videoInfo');
var videoVoice = document.getElementById('videoVoice');
/* 播放与暂停按钮切换 */
videoPlayer.onclick = function () {
    if (myvideo.paused) {
        myvideo.play();
        videoPlayer.value = '暂停播放';
    } else {
        myvideo.pause();
        videoPlayer.value = '开始播放';
    }
}
/* 无声播放和有声播放切换 */
videoVoice.onclick = function () {
    if (!myvideo.muted) {
        videoVoice.value = '有声播放';
        myvideo.muted = true;
    } else {
        videoVoice.value = '静音播放';
        myvideo.muted = false;
    }
}

/* 视频播放,滚动条同步 */
myvideo.ontimeupdate = function () {
    var currentTime = Math.round(myvideo.currentTime * Math.pow(10, 2) / Math.pow(10, 2));
    var taotalTime = Math.round(myvideo.duration * Math.pow(10, 2) / Math.pow(10, 2));
    videoInfo.value = currentTime + "/" + taotalTime;
    videoRange.value = (currentTime / taotalTime) * 100;
    if (myvideo.ended) {
        videoRange.value = 0;
    }
}
videoRange.onmousedown = function () {
    myvideo.pause();
}
videoRange.onmouseup = function () {
    myvideo.currentTime = myvideo.duration * (videoRange.value / videoRange.max);
    myvideo.play();
}