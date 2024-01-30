
// video loading
function Play() {
  var video = document.getElementById("video");
  var mp4 = document.getElementById('mp4')
  mp4.src = "../../assets/images/Y2mate.Is - This Is Egypt-Mfxqy5a Ths-720P-1692625573 (Online-Video-Cutter.Com) (1)-1.m4v";
  var butt = document.getElementById('myButton')
  butt.style.display = "none";
  video.controls = true;
  video.load();
  video.play();
}

function PlayIGV() {
  var video = document.getElementById("video");
  var mp4 = document.getElementById('mp4')
  mp4.src = "../../assets/images/iGV/eps/y2mate.is - 6 weeks in Egypt - AIESEC Global Volunteering-yPwBx-FHmAM-720p-1694208637.mp4";
  var butt = document.getElementById('myButton')
  butt.style.display = "none";
  video.controls = true;
  video.load();
  video.play();
}

function PlayIGTa() {
  var video = document.getElementById("video");
  var mp4 = document.getElementById('mp4')
  mp4.src = "../../assets/images/iGTa/y2mate.is - Egypt Promotional Ad - AIESEC Egypt-Abrj6KXVrus-720p-1695126469.mp4";
  var butt = document.getElementById('myButton')
  butt.style.display = "none";
  video.controls = true;
  video.load();
  video.play();
}

function PlayIGTe() {
  var video = document.getElementById("video");
  var mp4 = document.getElementById('mp4')
  mp4.src = "../../assets/images/iGTe/y2mate.is - AIESEC Egypt GT teaching-s8UBQh5yeB0-720p-1695126625.mp4";
  var butt = document.getElementById('myButton')
  butt.style.display = "none";
  video.controls = true;
  video.load();
  video.play();
}

// faq
const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});




let cards = document.querySelectorAll('.card-btn');

[...cards].forEach((card) => {
  card.addEventListener('click', () => {
    document.querySelector(`.vid${card.dataset.id}`).classList.remove('hide-video');
  });
});

let blockers = document.querySelectorAll('.blocker');
[...blockers].forEach((blocker) => {
  blocker.addEventListener('click', () => {
    document.querySelector(`.vid${blocker.dataset.id}`).classList.add('hide-video');
    let video = document.querySelector(`.video${blocker.dataset.id}`);
    video.currentTime = 0;
    video.pause();
  })
});


function playCard(vid_id) {
  let video = document.querySelector(`.video${vid_id}`);
  let mp4 = document.getElementById(`mp4_${vid_id}`)
  let butt = document.getElementById(`myButton${vid_id}`);
  mp4.src = `../../assets/images/whyEgyptHero/videos/${butt.dataset.dist}.m4v`;
  butt.style.display = "none";
  video.controls = true;
  video.load();
  video.play();
}


window.onload = function(){
  //hide the preloader
  document.querySelector(".pre-loader").style.display = "none";
}


let mobNav = document.querySelector('#dropdown-head-mob');
let mobNav_menu = document.getElementById('mob-dropdown');
let cover = document.querySelector('.list-cover');
mobNav.addEventListener('click', () => {
  if(cover.style.transform == "translateY(1px)")cover.style.transform = "translateY(110px)"
  else cover.style.transform = "translateY(1px)"
  
})

let hamburger = document.querySelector('.hamburger');
let mob = document.querySelector('.mobile-nav')
hamburger.addEventListener('click', () => {
  if(mob.style.display == "none"){
    mob.style.display = "block"; 
    setTimeout(() => {document.querySelector('.nav-content').style.transform= "translateX(100%)";}, 100)
  }
  else {
    setTimeout(() => {document.querySelector('.nav-content').style.transform= "translateX(-100%)";}, 100)
    mob.style.display = "none";
  }
})
document.querySelector('.nav-blocker').addEventListener('click', () => {
  setTimeout(() => {document.querySelector('.nav-content').style.transform= "translateX(-100%)";}, 100)
  mob.style.display = "none"
})
