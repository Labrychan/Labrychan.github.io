// /assets/js/season.js

function setSeasonalTheme() {
  var month = new Date().getMonth() + 1;
  var hour = new Date().getHours();

  var bgImage;
  var seasonMusic = [];

  if (month >= 3 && month <= 5) {
    // 春天
    bgImage = '/images/haru-bg.png';
    seasonMusic = [
      { name: '春泥棒', artist: 'ヨルシカ', url: '/music/春泥棒.mp3', cover: '/music/cover/春泥棒.jpg' }
    ];
  } else if (month >= 6 && month <= 8) {
    // 夏天
    if (hour >= 5 && hour < 24) {
      bgImage = '/images/natsu-am-bg.jpg';
    } else {
      bgImage = '/images/natsu-pm-bg.jpg';
    }
    seasonMusic = [
      { name: '夏霞', artist: 'あたらよ', url: '/music/夏霞.mp3', cover: '/music/cover/夏霞.jpg' }
    ];
  } else if (month >= 9 && month <= 11) {
    // 秋天
    bgImage = '/images/aki-bg.png';
    seasonMusic = [
      { name: '秋うらら', artist: '月詠み', url: '/music/秋うらら.mp3', cover: '/music/cover/秋うらら.jpg' }
    ];
  } else {
    // 冬天
    bgImage = '/images/fuyu-bg.jpg';
    seasonMusic = [
      { name: '遠雷', artist: 'tayori', url: '/music/遠雷.mp3', cover: '/music/cover/遠雷.jpg' }
    ];
  }

  // 切换背景
  if (bgImage) {
    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
  }

  // 切换歌单
  if (typeof ap !== 'undefined' && ap && seasonMusic.length > 0) {
    ap.list.clear();
    ap.list.add(seasonMusic);
    ap.list.switch(0);
  }
}

window.addEventListener('DOMContentLoaded', setSeasonalTheme);