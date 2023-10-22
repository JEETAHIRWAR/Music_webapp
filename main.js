

const music = new Audio('songs/1.mp3');

const songs = [
    {
        id: 1,
        songName: `Zara Sa Jhoom Loon Main <br>
        <div class="subtitle">Asha Bhosle, Abhijeet Bhattacharya</div>`,
        poster: "img/1.jpeg"
    },
    {
        id: 2,
        songName: `Jaati Hoon Main <br>
        <div class="subtitle">Kumar Sanu, Alka Yagnik </div>`,
        poster: "img/2.jpeg"
    },
    {
        id: 3,
        songName: `Zara Tasveer Se Tu Nikal ke Saamne A...	 <br>
        <div class="subtitle">Kumar Sanu, Alka Yagnik</div>`,
        poster: "img/3.jpeg"
    },
    {
        id: 4,
        songName: `Dil Laga Liya Maine Tumse Pyaar Kark...	 <br>
        <div class="subtitle">Alka Yagnik & Udit Narayan</div>`,
        poster: "img/4.jpeg"
    },
    {
        id: 5,
        songName: `Aksar Iss Duniya Mein <br>
        <div class="subtitle">Alka Yagnik & Vinod Nigam</div>`,
        poster: "img/5.jpeg"
    },
    {
        id: 6,
        songName: `Ho Gaya Hai Tujhko <br>
        <div class="subtitle">Lata Mangeshkar & Udit Narayan</div>`,
        poster: "img/6.jpeg"
    },
    {
        id: 7,
        songName: `Aankhein Khuli ho ya <br>
        <div class="subtitle">Lata Mangeshkar, Udit Narayan</div>`,
        poster: "img/7.jpeg"
    },
    {
        id: 8,
        songName: `Mera Dil Jis Dil Pe Fida Hai Ek Dilruba <br>
        <div class="subtitle">Udit Narayan, Shravan Rathod</div>`,
        poster: "img/8.jpeg"
    },
    {
        id: 9,
        songName: `Dil Ne Yeh Kaha (Love Song) <br>
        <div class="subtitle">Alka Yagnik, Kumar Sanu</div>`,
        poster: "img/9.jpeg"
    },
    {
        id: 10,
        songName: `Tumsa Koi Pyaara <br>
        <div class="subtitle">Kumar Sanu, Alka Yagnik</div>`,
        poster: "img/10.jpeg"
    },
    {
        id: 11,
        songName: `Hamein Tumse Hua hai pyar <br>
        <div class="subtitle">Udit Narayan, Alka Yagnik</div>`,
        poster: "img/11.jpeg"
    },
    {
        id: 12,
        songName: `Aaye Ho Meri Zindagi ... <br>
        <div class="subtitle">Udit Narayan</div>`,
        poster: "img/12.jpeg"
    },
    {
        id: 13,
        songName: `Ab Tere Dil Mein Hum ... <br>
        <div class="subtitle">Kumar Sanu & Alka Yagnik</div>`,
        poster: "img/13.jpeg"
    },
    {
        id: 14,
        songName: `Dil Hai Ke Manta Nahin <br>
        <div class="subtitle">Anuradha Paudwal and Kumar Sanu</div>`,
        poster: "img/14.jpeg"
    },
    {
        id: 15,
        songName: `Dil Ki Tanhaieko Kumar Sanu Chaahat ...<br>
        <div class="subtitle">Kumar Sanu</div>`,
        poster: "img/15.jpeg"
    },
    {
        id: 16,
        songName: `Meri Mehbooba ...<br>
        <div class="subtitle">Kumar Sanu, Alka Yagnik</div>`,
        poster: "img/16.jpeg"
    },
    {
        id: 17,
        songName: `Kitaben Bahut ...<br>
        <div class="subtitle">Asha Bhosle, Vinod Rathod</div>`,
        poster: "img/17.jpeg"
    },
    {
        id: 18,
        songName: `Hum To Deewane Huye Yaar	...<br>
        <div class="subtitle">Alka Yagnik, Abhijeet Bhattacharya</div>`,
        poster: "img/18.jpeg"
    },
    {
        id: 19,
        songName: `Heavy Ghagra	...<br>
        <div class="subtitle">Ajay Hooda, S Surila _ Sakshi</div>`,
        poster: "img/19.jpeg"
    },
    {
        id: 20,
        songName: `GYPSY...<br>
        <div class="subtitle">(Balam Thanedar) _ Dinesh Golan _ Pranjal Dahiya _ GD Kaur _ Anishh _ Haryanvi</div>`,
        poster: "img/20.jpeg"
    },
    {
        id: 21,
        songName: `Jale	...<br>
        <div class="subtitle">Sapna Choudhary</div>`,
        poster: "img/21.jpeg"
    },
    {
        id: 22,
        songName: `Laad piya ke ...<br>
        <div class="subtitle">Sapna Choudhary</div>`,
        poster: "img/22.jpeg"
    },
    {
        id: 23,
        songName: `Ye jo teri paylon...<br>
        <div class="subtitle">Alka Yagnik, Abhijeet Bhattacharya</div>`,
        poster: "img/23.jpeg"
    },
    {
        id: 24,
        songName: `Bandook...<br>
        <div class="subtitle">Alka Yagnik, Abhijeet Bhattacharya</div>`,
        poster: "img/24.jpeg"
    },
    {
        id: 25,
        songName: `Coca Cola Le Aayo...<br>
        <div class="subtitle">Ruchika Jangid, Kay D</div>`,
        poster: "img/25.jpeg"
    },
    {
        id: 26,
        songName: `Jaati Hoon Main	...<br>
        <div class="subtitle">Kumar Sanu & Alka Yagnik</div>`,
        poster: "img/26.jpeg"
    },
    {
        id: 27,
        songName: `Dil Laga Liya Maine Tumse Pyaar Karke..<br>
        <div class="subtitle">Alka Yagnik, Udit Narayan</div>`,
        poster: "img/27.jpeg"
    },
    {
        id: 28,
        songName: `Tumsa Koi Pyaara...<br>
        <div class="subtitle"> Kumar Sanu _ Alka Yagnik</div>`,
        poster: "img/28.jpeg"
    },
    {
        id: 29,
        songName: `kitaben bahut...<br>
        <div class="subtitle">Asha Bhosle, Vinod Rathod</div>`,
        poster: "img/29.jpeg"
    },
    {
        id: 30,
        songName: `Hum To Deewane Huye Yaar	...<br>
        <div class="subtitle">Alka Yagnik, Abhijeet Bhattacharya</div>`,
        poster: "img/30.jpeg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
let cassette = document.getElementsByClassName('cassette')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        cassette.classList.add('rotateImage');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        cassette.classList.remove('rotateImage');
    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'linear-gradient(to bottom, rgba(15, 44, 89, 0.0), rgba(17, 57, 70, 0.0))';
        el.style.transform = 'translateX(0px)';
    })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `songs/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        cassette.classList.add('rotateImage');


        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "linear-gradient(to bottom, rgba(73, 89, 15, 0.7), rgba(17, 57, 70, 0.7))";
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.transform = "translateX(-20px)";

        makeAllplays();
        wave.classList.add('active1');
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');


        changeCassetteImage(index - 1);
    });
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src = `songs/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    cassette.classList.add('rotateImage');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "linear-gradient(to bottom, rgba(73, 89, 15, 0.7), rgba(17, 57, 70, 0.7))";
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.transform = "translateX(-20px)";

    makeAllplays();
    wave.classList.add('active1');
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');


    // Update the cassette image
    changeCassetteImage(index);
});


next.addEventListener('click', () => {
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }

    music.src = `songs/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    cassette.classList.add('rotateImage');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "linear-gradient(to bottom, rgba(73, 89, 15, 0.7), rgba(17, 57, 70, 0.7))";
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.transform = "translateX(-20px)";

    makeAllplays();
    wave.classList.add('active1');
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');

    // Update the cassette image
    changeCassetteImage(index);
});



const cassetts = [
    {
        cassets: "casset/01.jpeg"
    },
    {
        cassets: "casset/02.jpeg"
    },
    {
        cassets: "casset/03.jpeg"
    },
    {
        cassets: "casset/04.jpeg"
    },
    {
        cassets: "casset/05.jpeg"
    },
    {
        cassets: "casset/06.jpeg"
    },
    {
        cassets: "casset/07.jpeg"
    },
    {
        cassets: "casset/08.jpeg"
    },
    {
        cassets: "casset/09.jpeg"
    },
]

const cassetteImage = document.getElementById('cassetteImage');

// Function to change the cassette image
function changeCassetteImage(index) {
    const cassetteIndex = index % cassetts.length; // Ensure the index loops back to the beginning
    cassetteImage.src = cassetts[cassetteIndex].cassets;
}



function previewFile() {
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}
$(function () {
    $('#profile-image1').on('click', function () {
        $('#profile-image-upload').click();
    });
});


// Get references to the icon and the popupAlertContainer
const personCircleIcon = document.querySelector('.bi-person-circle');
const popupAlertContainer = document.querySelector('#popupAlertContainer');

// Add a click event listener to the personCircleIcon
personCircleIcon.addEventListener('click', function () {
    // Show the popupAlertContainer
    popupAlertContainer.style.display = 'block';
});

// You can also add code to close the popup when the close button (x) is clicked
const closePopupButton = document.querySelector('#close-popup');
closePopupButton.addEventListener('click', function () {
    // Hide the popupAlertContainer
    popupAlertContainer.style.display = 'none';
});


const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const popupContainer = document.getElementById("popupContainer");

signUpButton.addEventListener("click", () => {
    popupContainer.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
    popupContainer.classList.remove("right-panel-active");
});


// <!-- Happy-Hacking -->