let btn_play = document.querySelector('#btn_play');
let video_play = document.querySelector('.videoPlayer');


// menu mobile home
btn_play.addEventListener('click', function () {
  video_play.classList.toggle('active_video');
  btn_play.style.display = 'none';
});

document.addEventListener('click', function (event) {
  // Verifica se o clique foi fora do vídeo e do botão de play
  if (!video_play.contains(event.target) && event.target !== btn_play) {
    video_play.classList.remove('active_video');
    btn_play.style.display = 'block';
  }
});
