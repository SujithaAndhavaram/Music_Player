const songs = [
  { title: "Dreamscape", artist: "Luna Waves", file: "song1.mp3" },
  { title: "Echoes", artist: "Neon Sunset", file: "song2.mp3" },
  { title: "Skyline", artist: "Electric City", file: "song3.mp3" },
  { title: "Ocean Breath", artist: "Chill Horizon", file: "song4.mp3" },
  { title: "Starlight", artist: "Synth Vibes", file: "song5.mp3" },
  { title: "Midnight Drive", artist: "Night Cruisers", file: "song6.mp3" },
  { title: "Aurora", artist: "Cosmic Drift", file: "song7.mp3" },
  { title: "Waves of Time", artist: "Deep Skies", file: "song8.mp3" },
  { title: "Neon Mirage", artist: "Digital Echo", file: "song9.mp3" },
  { title: "Lunar Lounge", artist: "Astral Beats", file: "song10.mp3" }
];

let currentSong = 0;
let isPlaying = false;

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const songNumber = document.getElementById("song-number");

function loadSong(index) {
  const song = songs[index];
  audio.src = song.file;
  title.textContent = song.title;
  artist.textContent = song.artist;
  songNumber.textContent = `Song ${index + 1} of ${songs.length}`;
  playBtn.textContent = "▶️";
  isPlaying = false;
}

function playSong() {
  audio.play();
  playBtn.textContent = "⏸️";
  isPlaying = true;
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶️";
  isPlaying = false;
}

function togglePlayPause() {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  playSong();
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  playSong();
}

// Event Listeners
playBtn.addEventListener("click", togglePlayPause);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Load first song
loadSong(currentSong);
