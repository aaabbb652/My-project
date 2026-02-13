const songs = [
    {
        id: 1,
        name: "The Man",
        title: "Taylor Swift",
        cover: "./images/The man - Taylor swifp.jpg",
        path: "./music/Taylor Swift - The Man (Official Video).mp3", // Namuna uchun
        asl: [
            { time: 5, text: "I would be complex" },
            { time: 8, text:"I would be cool" },
            { time: 10, text: "They'd say I played the fiel before I found someone to commit to"},
            { time: 14, text: "And that would be OK"},
            { time: 16, text: "For Me to do"},
            { time: 18, text: "Every conquest I had made would make Me more of a BOSS to YOU"},
            { time: 24, text: "I'd be fearless LEADER"},
            { time: 26, text: "I'd be an ALPHA type"},
            { time: 28, text: "When everyone believes ya"},
            { time: 31, text: "What's that like?"},
            { time: 32, text: "I'm so sick of running as fast as I can"},
            { time: 37, text: "Wondering If I'd get there quicker If I was a man"},
            { time: 41, text: "And I'm so sick of them coming at Me again"},
            { time: 45, text: "Cause if I was a man"},
            { time: 47, text: "Then I'd be The man"},
            { time: 49, text: "I'd be the man"},
            { time: 51, text: ""},
            { time: 53, text: "I'd be the man"},
            { time: 55, text: ""},
            { time: 58, text: "I'd be the man"},
            { time: 60, text: ""},
            { time: 63, text: "I'd be the man"},
            { time: 66, text: "They'd say I Hustled"},
            { time: 69, text: "Put in the work"},
            { time: 71, text: "They wouldn't shake Their heads questions how much of this I deserve"},
            { time: 75, text: "What I was wearing "},
            { time: 78, text: "If I was rude"},
            { time: 80, text: "Could all be separated from My good ideas and power moves"},
            { time: 85, text: "And They would toast to Me oh"},
            { time: 87, text: "let the players play"},
            { time: 90, text: "I'd be just like Leo"},
            { time: 92, text: "In SINT-TROPEZ"},
            { time: 93, text: "I'm so sick of running as fast as I can"},
            { time: 98, text: "Wondering if I'd get There Quicker if I was a man"},
            { time: 102, text: "And I'm so sick of Them coming at Me again"},
            { time: 106, text: "Cause if I was a Man"},
            { time: 108, text: "Then I'd be the Man"},
            { time: 112, text: ""},
            { time: 115, text: "I'd be the Man"},
            { time: 117, text: ""},
            { time: 119, text: "I'd be the Man"},
            { time: 121, text: ""},
            { time: 123, text: "I'd be the Man"},
            { time: 125, text: ""},
            { time: 127, text: "What's it like to brag about racing in dollars"},
            { time: 129, text: "And getting bitches and models"},
            { time: 132, text: "And it's all good if You're bad"},
            { time: 134, text: "And it's okay if you're mad if I was out flashing My dollars"},
            { time: 138, text: "I'd be a bitch, not a baller"},
            { time: 141, text: "They paint me out to be bad"},
            { time: 143, text: "So it's okay That I'm mad"},
            { time: 146, text: "I'm so sick of running as fast as I can"},
            { time: 150, text: "Wondering if I'd get There quicker if I was a Man"},
            { time: 154, text: "I'm so sick of Them coming at Me again (Coming at Me again)"},
            { time: 159, text: "Cause if I was a Man (If I was a Man)"},
            { time: 160, text: "Then I'd be the Man (I'd be the Man)"},
            { time: 163, text: "I'm so sick of running as fast as I can (as fast as I can)"},
            { time: 167, text: "wondering if I'd get there quicker (I was a Man)"},
            { time: 172, text: "And I'm so sick of Them coming at Me again (Coming at Me again)"},
            { time: 176, text: "'Cause if I was a Man (if I was a Man"},
            { time: 178, text: "Then I'd be the Man"},
            { time: 180, text: "I'd be the Man"},
            { time: 182, text: ""},
            { time: 184, text: "I'd be the Man"},
            { time: 186, text: ""},
            { time: 189, text: "I'd be the Man (Yeah)"},
            { time: 191, text: ""},
            { time: 192, text: "I'd be the Man"},
            { time: 195, text: "I'd be the Man"},
            { time: 198, text: ""},
            { time: 200, text: "If I was a Man"},
            { time: 204, text: "(I'd be the Man)"},
            { time: 207, text: ""},
            { time: 214, text: "Conversation"},
            { time: 227, text: "End..."},


            
            
        ],
        uzb: [
            { time: 5, text: "Men murakkab bo'lardim" },
            { time: 8, text: "Men sokin bo'lardim" },
            { time: 10, text: "Birov bilan boglanishdan oldin, tanlovlarim kop bo'lganini aytishardi"},
            { time: 14, text: "Va bu yaxshi bo'lardi"},
            { time: 16, text: "Men uchun"},
            { time: 18, text: "Men erishgan har bir g'alaba meni sizga koproq Xo'jayin qilib qo'yardi"},
            { time: 24, text: "Men jasur Leader bo'lardim"},
            { time: 26, text: "Men Alfa tipidan bo'lardim"},
            { time: 28, text: "Hamma menga ishonganda"},
            { time: 31, text: "Bu qanday"},
            { time: 32, text: "I'm so sick of running as fast as I can"},
            { time: 37, text: "Wondering If I'd get there quicker If I was a man"},
            { time: 41, text: "And I'm so sick of them coming at Me again"},
            { time: 45, text: "Cause if I was a man"},
            { time: 47, text: "Then I'd be The man"},
            { time: 49, text: "I'd be the man"},
            { time: 51, text: ""},
            { time: 53, text: "I'd be the man"},
            { time: 55, text: ""},
            { time: 58, text: "I'd be the man"},
            { time: 60, text: ""},
            { time: 63, text: "I'd be the man"},
            { time: 66, text: "They'd say I Hustled"},
            { time: 69, text: "Put in the work"},
            { time: 71, text: "They wouldn't shake Their heads questions how much of this I deserve"},
            { time: 75, text: "What I was wearing "},
            { time: 78, text: "If I was rude"},
            { time: 80, text: "Could all be separated from My good ideas and power moves"},
            { time: 85, text: "And They would toast to Me oh"},
            { time: 87, text: "let the players play"},
            { time: 90, text: "I'd be just like Leo"},
            { time: 92, text: "In SINT-TROPEZ"},
            { time: 93, text: "I'm so sick of running as fast as I can"},
            { time: 98, text: "Wondering if I'd get There Quicker if I was a man"},
            { time: 102, text: "And I'm so sick of Them coming at Me again"},
            { time: 106, text: "Cause if I was a Man"},
            { time: 108, text: "Then I'd be the Man"},
            { time: 112, text: ""},
       
        ]

    },
    {
        id: 2, 
        name: "You Need Calm Down" ,
        title:"Taylor Swift",
        cover: "./images/images (2).jfif" ,
        path: "./music/Taylor Swift - You Need To Calm Down.mp3",
        asl:[
            { time: 5 , text: "salom"},
        ],
        uzb:[
             { time: 5 , text: "salom"},
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
        `${durationMin}:${durationSec < 10 ? '0'+durationSec : durationSec};`
});

// Joriy vaqtni matn ko'rinishida yangilab borish
audio.addEventListener('timeupdate', () => {
    const currentMin = Math.floor(audio.currentTime / 60);
    const currentSec = Math.floor(audio.currentTime % 60);
    document.getElementById('currentTime').innerText = 
        `${currentMin}:${currentSec < 10 ? '0'+currentSec : currentSec};`
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
    playlistContainer.innerHTML = ''; // Oldingilarini tozalash

    data.forEach(song => {
        const songHTML = `
            <div class="playlist-item">
                
                <span>${song.name} - ${song.title}</span>
            </div>
        `;
        playlistContainer.insertAdjacentHTML('beforeend', songHTML);

      
    });

    




    

    // 4. Orqaga qaytish (Agar search bo'sh bo'lmasa, birinchi bo'lib "Hamma qo'shiqlar" tugmasini qo'shish)
    if (searchInput.value !== "") {
        const backBtn = `<button onclick="resetSearch()" style="margin-bottom: 10px;">⬅ Back (All)</button>`;
        playlistContainer.insertAdjacentHTML('afterbegin', backBtn);
    }
}


const showText = document.querySelector(".showtext")
const showPlay = document.querySelector("showplay")









