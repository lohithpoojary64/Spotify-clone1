let audio = new Audio("songs/Tu Hai To Mujhe Phir Aur Kya Chahiye(PagalWorld.com.pe).mp3");
let songIndex = 0;

let myProgress = document.getElementById('myProgressBar');
let masterPlay = document.getElementById('play');
let gif = document.getElementById('gif');
let bottomName = document.getElementById('bottomName');
let songItems  = Array.from(document.getElementsByClassName('songs'));



songs = [
   {songName:"Heeriyee", filePath:"./songs/Heeriyee.mp3",coverPath:"covers/heeriyee.jpg" },
   {songName:"Lofi", filePath:"./songs/lofi.mp3",coverPath:"covers/lofi.jpg" },
   {songName:"Falak Tak Chal Sath Mere", filePath:"songs/Falak.mp3",coverPath:"covers/falak tak.jpg" },
   {songName:"Kahani", filePath:"./songs/Kahani Suno.mp3",coverPath:"covers/kahani.jpg" },
   {songName:"Deva Deva", filePath:"./songs/Deva Deva.mp3",coverPath:"covers/Dev.jpg" },
]
//song moving bar

audio.addEventListener('timeupdate', () => {
  progress = parseInt((audio.currentTime/audio.duration)*100);
  console.log(progress);
  myProgress.value = progress;
});

masterPlay.addEventListener('click', ()=>{
   if(audio.paused || audio.currentTime<=0){
    audio.play();
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
    gif.style.opacity = 1;
   }else{
      audio.pause();
      masterPlay.classList.remove('fa-pause');
      masterPlay.classList.add('fa-play');
      gif.style.opacity = 0;
   }
   
});

//change

myProgress.addEventListener('change', ()=>{
   audio.currentTime = (myProgress.value *audio.duration)/100;

})

songItems.forEach( (ele,i)=> {
   console.log(ele,i);
  ele.getElementsByTagName('img')[0].src = songs[i].coverPath;
  ele.getElementsByClassName('songItems')[0].innerText = songs[i].songName; 
});

const makeAllPlays = ()=> {
   Array.from(document.getElementsByClassName('songPlay')).forEach( (element)=>{
       element.classList.remove('fa-pause');
       element.classList.add('fa-play');
       
    
   })
}


Array.from(document.getElementsByClassName('songPlay')).forEach( (element)=>{
   element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    console.log(songIndex);
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    
  
    audio.src  = `songs/${songIndex}.mp3`;
    bottomName.innerText = songs[songIndex].songName;
    audio.currentTime = 0;
    audio.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
      masterPlay.classList.add('fa-pause');
    
   })
})

document.getElementById('next').addEventListener('click',()=>{
   if (songIndex>=4){
      songIndex = 0;
   }else{
      songIndex+=1;
   }
   
   audio.src  = `songs/${songIndex}.mp3`;
   bottomName.innerText = songs[songIndex].songName;
    audio.currentTime = 0;
    audio.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
      masterPlay.classList.add('fa-pause');
     
    
})

document.getElementById('previous').addEventListener('click',()=>{
   if (songIndex<=0){
      songIndex = 0;
   }else{
      songIndex-=1;
   }
  
   audio.src  = `songs/${songIndex}.mp3`;
   bottomName.innerText = songs[songIndex].songName;
    audio.currentTime = 0;
    audio.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
      masterPlay.classList.add('fa-pause');
    
})

