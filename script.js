const songs = [
    {
        id: 1,
        name: "The Man",
        title: "Taylor Swift",
        cover: "./images/The man - Taylor swifp.jpg",
        path: "./music/Taylor Swift - The Man (Official Video).mp3", // Namuna uchun
        asl: [
            { time: 5, text: "I would be complex" },
            { time: 8, text: "I would be cool" },
            { time: 10, text: "They'd say I played the fiel before I found someone to commit to" },
            { time: 14, text: "And that would be OK" },
            { time: 16, text: "For Me to do" },
            { time: 18, text: "Every conquest I had made would make Me more of a BOSS to YOU" },
            { time: 24, text: "I'd be fearless LEADER" },
            { time: 26, text: "I'd be an ALPHA type" },
            { time: 28, text: "When everyone believes ya" },
            { time: 31, text: "What's that like?" },
            { time: 32, text: "I'm so sick of running as fast as I can" },
            { time: 37, text: "Wondering If I'd get there quicker If I was a man" },
            { time: 41, text: "And I'm so sick of them coming at Me again" },
            { time: 45, text: "Cause if I was a man" },
            { time: 47, text: "Then I'd be The man" },
            { time: 49, text: "I'd be the man" },
            { time: 51, text: "" },
            { time: 53, text: "I'd be the man" },
            { time: 55, text: "" },
            { time: 58, text: "I'd be the man" },
            { time: 60, text: "" },
            { time: 63, text: "I'd be the man" },
            { time: 66, text: "They'd say I Hustled" },
            { time: 69, text: "Put in the work" },
            { time: 71, text: "They wouldn't shake Their heads questions how much of this I deserve" },
            { time: 75, text: "What I was wearing " },
            { time: 78, text: "If I was rude" },
            { time: 80, text: "Could all be separated from My good ideas and power moves" },
            { time: 85, text: "And They would toast to Me oh" },
            { time: 87, text: "let the players play" },
            { time: 90, text: "I'd be just like Leo" },
            { time: 92, text: "In SINT-TROPEZ" },
            { time: 93, text: "I'm so sick of running as fast as I can" },
            { time: 98, text: "Wondering if I'd get There Quicker if I was a man" },
            { time: 102, text: "And I'm so sick of Them coming at Me again" },
            { time: 106, text: "Cause if I was a Man" },
            { time: 108, text: "Then I'd be the Man" },
            { time: 112, text: "" },
            { time: 115, text: "I'd be the Man" },
            { time: 117, text: "" },
            { time: 119, text: "I'd be the Man" },
            { time: 121, text: "" },
            { time: 123, text: "I'd be the Man" },
            { time: 125, text: "" },
            { time: 127, text: "What's it like to brag about racing in dollars" },
            { time: 129, text: "And getting bitches and models" },
            { time: 132, text: "And it's all good if You're bad" },
            { time: 134, text: "And it's okay if you're mad if I was out flashing My dollars" },
            { time: 138, text: "I'd be a bitch, not a baller" },
            { time: 141, text: "They paint me out to be bad" },
            { time: 143, text: "So it's okay That I'm mad" },
            { time: 146, text: "I'm so sick of running as fast as I can" },
            { time: 150, text: "Wondering if I'd get There quicker if I was a Man" },
            { time: 154, text: "I'm so sick of Them coming at Me again (Coming at Me again)" },
            { time: 159, text: "Cause if I was a Man (If I was a Man)" },
            { time: 160, text: "Then I'd be the Man (I'd be the Man)" },
            { time: 163, text: "I'm so sick of running as fast as I can (as fast as I can)" },
            { time: 167, text: "wondering if I'd get there quicker (I was a Man)" },
            { time: 172, text: "And I'm so sick of Them coming at Me again (Coming at Me again)" },
            { time: 176, text: "'Cause if I was a Man (if I was a Man" },
            { time: 178, text: "Then I'd be the Man" },
            { time: 180, text: "I'd be the Man" },
            { time: 182, text: "" },
            { time: 184, text: "I'd be the Man" },
            { time: 186, text: "" },
            { time: 189, text: "I'd be the Man (Yeah)" },
            { time: 191, text: "" },
            { time: 192, text: "I'd be the Man" },
            { time: 195, text: "I'd be the Man" },
            { time: 198, text: "" },
            { time: 200, text: "If I was a Man" },
            { time: 204, text: "(I'd be the Man)" },
            { time: 207, text: "" },
            { time: 214, text: "Conversation" },
            { time: 227, text: "End..." },




        ],
        uzb: [
            { time: 5, text: "Men murakkab bo'lardim" },
            { time: 8, text: "Men sokin bo'lardim" },
            { time: 10, text: "Birov bilan boglanishdan oldin, tanlovlarim kop bo'lganini aytishardi" },
            { time: 14, text: "Va bu yaxshi bo'lardi" },
            { time: 16, text: "Men uchun" },
            { time: 18, text: "Men erishgan har bir g'alaba meni sizga koproq Xo'jayin qilib qo'yardi" },
            { time: 24, text: "Men jasur Leader bo'lardim" },
            { time: 26, text: "Men Alfa tipidan bo'lardim" },
            { time: 28, text: "Hamma menga ishonganda" },
            { time: 31, text: "Bu qanday" },
            { time: 32, text: "Qo'limdan kelgancha tez yugurishdan charchadim" },
            { time: 37, text: "Agar erkak bolganimda tezroq muvaffaqqiyatga erisharmidim deb o'ylayapman" },
            { time: 41, text: "Va yana ular meni tanqid qilaverishlaridan charchadim" },
            { time: 45, text: "Chunki agar men erkak bo'lganimda" },
            { time: 47, text: "Hurmat qilinadigan odam bo'lardim" },
            { time: 49, text: "Men erkak bo'lardim" },
            { time: 51, text: "" },
            { time: 53, text: "Men erkak bo'lardim" },
            { time: 55, text: "" },
            { time: 58, text: "Men erkak bo'lardim" },
            { time: 60, text: "" },
            { time: 63, text: "Men erkak bo'lardim" },
            { time: 66, text: "Ular aytishardi men qattiq harakat qilganimni" },
            { time: 69, text: "Mehnat qilganimni" },
            { time: 71, text: "Ular hayratlanib boshlarini chayqamas edilar va men bularning qanchasiga loyiq ekanligimni so'ramas edilar" },
            { time: 75, text: "Men nima kiyganimni baholashmas edi" },
            { time: 78, text: "Men qo'pol/qat'iy bo'lganimda" },
            { time: 80, text: "Ular mening yaxshi g'oyalarim va kuchli harakatlarimdan ajratib korishardi" },
            { time: 85, text: "va Ular meni olqishlashardi" },
            { time: 87, text: "O'yinchilarga o'ynashga ruhsat berilsin" },
            { time: 90, text: "Men huddi Leo kabi bo'lardim" },
            { time: 92, text: "SINT-TROPEZ ichidagi" },
            { time: 93, text: "Qo'limdan kelgancha tez yugurishdan charchadim" },
            { time: 98, text: "Agar erkak bolganimda tezroq muvaffaqqiyatga erisharmidim deb o'ylayapman" },
            { time: 102, text: "Va yana ular meni tanqid qilaverishlaridan charchadim" },
            { time: 106, text: "Chunki agar men erkak bo'lganimda" },
            { time: 108, text: "Hurmat qilinadigan odam bo'lardim" },
            { time: 112, text: "" },

        ]

    },
    {
        id: 2,
        name: "You Need Calm Down",
        title: "Taylor Swift",
        cover: "./images/images (2).jfif",
        path: "./music/Taylor Swift - You Need To Calm Down.mp3",
        asl: [
            { time: 5, text: "salom" },
        ],
        uzb: [
            { time: 5, text: "salom" },
        ],
    },
     {
        id: 3,
        name: "Style",
        title: "Taylor Swift",
        cover: "https://i1.sndcdn.com/artworks-3h6q6wfIgTTH-0-t500x500.jpg",
        path: "./music/Taylor Swift - Style.mp3",
        asl: [
            { time: 30 ,  text: "Midnight"  } ,
            { time: 33 , text: "You come and pick me up, no headlights" }, 
            { time: 28 , text: "" },
            { time: 40 , text: "Long drive "},
            { time: 43 , text: "Could end in burning flames or paradise"},
            { time: 50 , text: "Fade into view, oh"},
            { time: 53 , text: "It's been a while since I have even heard from you (Heard from you)"},
            { time: 61 , text: "I should just tell you to leave 'cause I"},
            { time: 64 , text: "Know exactly where it leads but I"} ,
            { time: 66 , text: "Watch us go 'round and 'round each time"},
            { time: 69 , text: "You got that James Dean daydream look in your eye"},
            { time: 74 , text: "And I got that red lip classic thing that you like"},
            { time: 79 , text: "And when we go crashing down we come back every time"},
            { time: 84 , text: "'Cause we never go out of style, we never go out of style"},
            { time: 89 , text: "You got that long hair, slicked back, white t-shirt"},
            { time: 94 , text: "And I got that good girl faith and a tight little skirt"},
            { time: 100 , text: "And when we go crashing down we come back every time"},
            { time: 105 , text: "'Cause we never go out of style, we never go out of style"},
            { time: 111 , text: "So it goes"},
            { time: 114 , text: "He can't keep his wild eyes on the road"},
            { time: 121 , text: "Takes me home"},
            { time: 124 , text: "Lights are off, he's taking off his coat"},
            { time: 130 , text: "I say 'I heard oh' "},
            { time: 133 , text: "That you've been out and about with some other girl, some other girl."},
            { time: 142 , text: "He says, 'What you've heard is true but I '"},
            { time: 144.83 , text: "Can't stop thinking about you.' And I ' "},
            { time: 147.40 , text: "I said, 'I've been there too a few times.' "},
            { time: 150.84 , text: "'Cause you got that James Dean daydream look in your eye"},
            { time: 155.81 , text: "And I got that red lip classic thing that you like"},
            { time: 160.83 , text: "And when we go crashing down we come back every time"},
            { time: 165.74 , text: "'Cause we never go out of style, we never go out of style"},
            { time: 170.95 , text: "You got that long hair, slicked back, white t-shirt"},
            { time: 175.94 , text: "And I got that good girl faith and a tight little skirt"},
            { time: 181.02 , text: "And when we go crashing down we come back every time"},
            { time: 186.16 , text: "'Cause we never go out of style, we never go out of style"},
            { time: 191.48 , text: "Take me home"},
            { time: 196.16 , text: "Just take me home, yeah"},
            { time: 201.29 , text: "Just take me home"},
            { time: 205.79 , text: ""},
            { time: 209.78 , text: "Out of style"},
            { time: 211.15 , text: "Oh, you got that James Dean daydream look in your eye"},
            { time: 216.39 , text: "And I got that red lip classic thing that you like"},
            { time: 221.44 , text: "And when we go crashing down we come back every time"},
            { time: 226.43 , text: "'Cause we never go out of style, we never go out of style"},
            { time: 230.93 , text: "" },
        ],
        uzb: [
            { time: 5, text: "salom" },
        ],


    }
];

let currentSongIndex = localStorage.getItem('lastSongIndex') || 0;
const audio = document.getElementById('mainAudio');
const playBtn = document.getElementById('playBtn');
const lyricsContent = document.getElementById('lyricsContent');
const langSelect = document.getElementById('langSelect');
const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")
const search = document.getElementById("searchBar")
const matn = document.querySelector(".option-h3")
function loadSong(index) {
    const song = songs[index];
    document.getElementById('songName').innerText = song.name;
    document.getElementById('songTitle').innerText = song.title;
    document.getElementById('cover').src = song.cover;
    audio.src = song.path;
    localStorage.setItem('lastSongIndex', index);
    renderLyrics();
}

function renderLyrics() {
    const lang = langSelect.value;
    const lyrics = songs[currentSongIndex][lang];
    lyricsContent.innerHTML = lyrics.map(l => `<p id="t-${l.time}">${l.text}</p>`).join('');
    // matn.textContent = "" ;
}

audio.addEventListener('timeupdate', () => {
    const currentTime = Math.floor(audio.currentTime);
    const lang = langSelect.value;
    const currentLyrics = songs[currentSongIndex][lang];

    currentLyrics.forEach(line => {
        if (currentTime === line.time) {
            document.querySelectorAll('.lyrics-content p').forEach(p => p.classList.remove('active-lyric'));
            const active = document.getElementById(`t-${line.time}`);
            if (active) {
                active.classList.add('active-lyric');
                active.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    // Timebar yangilash
    const progress = (audio.currentTime / audio.duration) * 100;
    document.getElementById('timeBar').value = progress || 0;
});

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "Pause";
        document.querySelector('.disk').style.animationPlayState = 'running';
    } else {
        audio.pause();
        playBtn.innerText = "Play";
        document.querySelector('.disk').style.animationPlayState = 'paused';
    }
});

// Playlistni yaratish
const playlistDiv = document.getElementById('playlist');
songs.forEach((song, index) => {
    const div = document.createElement('div');
    div.className = 'playlist-item';
    div.innerText = `${song.name} - ${song.title}`;
    div.onclick = () => { currentSongIndex = index; loadSong(index); audio.play(); };
    playlistDiv.appendChild(div);
});

langSelect.onchange = renderLyrics;
loadSong(currentSongIndex);

const volumeBar = document.getElementById('volumeBar');

volumeBar.addEventListener('input', (e) => {
    // Input 0-100 oralig'ida, audio.volume esa 0-1 oralig'ida bo'ladi
    audio.volume = e.target.value / 100;
});

const timeBar = document.getElementById('timeBar');

timeBar.addEventListener('input', (e) => {
    // Foizni vaqtga aylantirish
    const seekTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Qo'shiqning umumiy vaqtini ko'rsatish (Duration)
audio.addEventListener('loadedmetadata', () => {
    const durationMin = Math.floor(audio.duration / 60);
    const durationSec = Math.floor(audio.duration % 60);
    document.getElementById('durationTime').innerText =
        `${durationMin}:${durationSec < 10 ? '0' + durationSec : durationSec};`
});

// Joriy vaqtni matn ko'rinishida yangilab borish
audio.addEventListener('timeupdate', () => {
    const currentMin = Math.floor(audio.currentTime / 60);
    const currentSec = Math.floor(audio.currentTime % 60);
    document.getElementById('currentTime').innerText =
        `${currentMin}:${currentSec < 10 ? '0' + currentSec : currentSec};`
});

audio.addEventListener('ended', () => {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) currentSongIndex = 0;
    loadSong(currentSongIndex);
    audio.play();
});

// Keyingi qo'shiqqa o'tish funksiyasi
function nextSong() {
    currentSongIndex++;

    // Agar oxirgi qo'shiqdan o'tib ketsa, birinchisiga qaytadi
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex);
    playMusic();
}

// Oldingi qo'shiqqa o'tish funksiyasi
function prevSong() {
    currentSongIndex--;

    // Agar birinchi qo'shiqdan orqaga o'tsa, oxirgisiga qaytadi
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }

    loadSong(currentSongIndex);
    playMusic();
}

// Musiqani ijro etish va diskni aylantirishni boshqarish
function playMusic() {
    audio.play();
    playBtn.innerText = "Pause";
    document.querySelector('.disk').style.animationPlayState = 'running';
}

// Hodisalarni (Events) tinglash
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Qo'shiq tugaganda avtomatik keyingisiga o'tishi uchun
audio.addEventListener('ended', nextSong)

audio.addEventListener('timeupdate', () => {
    const currentTime = Math.floor(audio.currentTime);
    const lang = langSelect.value;
    const currentLyrics = songs[currentSongIndex][lang];

    currentLyrics.forEach((line, index) => {
        if (currentTime === line.time) {
            // Hamma qatorlardan aktivlikni olib tashlash
            const allLines = document.querySelectorAll('.lyrics-content p');
            allLines.forEach(p => p.classList.remove('active-lyric'));

            const activeLine = document.getElementById(`t-${line.time}`);
            if (activeLine) {
                activeLine.classList.add('active-lyric');

                // Matnni yuqoriga/pastga siljitish (Scroll effect)
                const containerHeight = document.querySelector('.lyrics-section').offsetHeight;
                const offset = activeLine.offsetTop - (containerHeight / 2) + (activeLine.offsetHeight / 2);

                // Lyrics-contentni yuqoriga suramiz
                document.getElementById('lyricsContent').style.transform = ` translateY(-${offset - 100}px)`;
            }
        }
    });

    // Timebar va vaqtlar kodi o'zgarishsiz qoladi...
});

const playlistContainer = document.querySelector('.playlist');
const searchInput = document.querySelector('#searchBar');

// 1. Qidiruv funksiyasi
searchInput.addEventListener('input', (e) => {
    let query = e.target.value;

    // Birinchi harfni katta qilish
    if (query.length > 0) {
        query = query.charAt(0).toUpperCase() + query.slice(1);
        e.target.value = query;
    }

    // Filtrlash
    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(query.toLowerCase()) ||
        song.title.toLowerCase().includes(query.toLowerCase())
    );

    // 2. Playlistni yangilash
    // Agar query bo'sh bo'lsa hamma qo'shiqlar, bo'lmasa filtrlanganlar chiqadi
    renderPlaylist(filteredSongs);
});

// 3. Ekranga chiqaruvchi funksiya (buni o'zingnikiga mosla)
function renderPlaylist(data) {
    playlistContainer.innerHTML = ''; // Clear old items

    data.forEach((song, index) => {
        const div = document.createElement('div');
        div.className = 'playlist-item';
        div.innerText = `${song.name} - ${song.title}`;

        // Attach click handler
        div.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(index);
            audio.play();
        });

        playlistContainer.appendChild(div);
    });

    // Optional back button
    if (searchInput.value !== "") {
        const backBtn = document.createElement('button');
        backBtn.textContent = "⬅ Back (All)";
        backBtn.style.marginBottom = "10px";
        backBtn.addEventListener('click', resetSearch);
        playlistContainer.insertBefore(backBtn, playlistContainer.firstChild);
    }
}


const showText = document.querySelector(".showtext")
const showPlay = document.querySelector(".showplay")
const playerBox = document.querySelector(".player-section")
const playlistBox = document.querySelector(".playlist-section")
const textBox = document.querySelector(".box-sect")
const showplayer = document.querySelector(".show-player")
showText.addEventListener("click", () => {
    playerBox.style.display = "none"
    textBox.style.display = "block"
    showplayer.style.display = "block"

});
showplayer.addEventListener("click", () => {
    playerBox.style.display = "block"
    textBox.style.display = "none"
    // showplayer.style.display = "none"

})
showPlay.addEventListener( "click" , () => {
     playerBox.style.display = "none"
     playlistBox.style.display = "block"
    // showplayer.style.display = "block"

})



function checkWindowSize() {
    if (window.innerWidth > 500) {
        playerBox.style.display = "block";
    }
}

// Run on page load
checkWindowSize();

// Run whenever the window is resized
window.addEventListener('resize', checkWindowSize);

const btnBack = document.querySelector("#back")

btnBack.addEventListener("click", () => {
    playerBox.style.display = "block"
    textBox.style.display = "none"
    playlistBox.style.display = "none"

    // showplayer.style.display = "none"

})



// ================= LOCAL STORAGE SAVE =================

// Song index numberga aylantirish (agar yuqorida bo'lmasa)
currentSongIndex = parseInt(localStorage.getItem('lastSongIndex')) || 0;

// Volume saqlash
volumeBar.addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
    localStorage.setItem('volume', audio.volume);
});

// Vaqt saqlash
audio.addEventListener('timeupdate', () => {
    localStorage.setItem('currentTime', audio.currentTime);
});

// Pause / Play holatini saqlash
audio.addEventListener('play', () => {
    localStorage.setItem('isPaused', false);
});

audio.addEventListener('pause', () => {
    localStorage.setItem('isPaused', true);
});

// Sahifadan chiqishda ham saqlash
window.addEventListener('beforeunload', () => {
    localStorage.setItem('currentTime', audio.currentTime);
    localStorage.setItem('volume', audio.volume);
    localStorage.setItem('isPaused', audio.paused);
});


// ================= LOCAL STORAGE RESTORE =================

audio.addEventListener('loadedmetadata', () => {

    const savedTime = localStorage.getItem('currentTime');
    const savedVolume = localStorage.getItem('volume');
    const isPaused = localStorage.getItem('isPaused');

    if (savedVolume !== null) {
        audio.volume = parseFloat(savedVolume);
        volumeBar.value = savedVolume * 100;
    }

    if (savedTime !== null) {
        audio.currentTime = parseFloat(savedTime);
    }

    if (isPaused === "false") {
        audio.play();
    }

}, { once: true });
