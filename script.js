let imgs = [
"brass-3099922_1280.jpg",
"cello-7219171_1280.jpg",
"conductor-4373022_1920.jpg",
"guitar-bridge-5394863_1280.jpg",
"instruments-801271_1280.jpg",
"microphone-5046876_1920.jpg",
"mixer-4197733_1280.jpg",
"music-sheet-8386486_1280.jpg",
"piano-3505109_1280.jpg",
"figure-1009836_1280.jpg",
"pipe-organ-669589_1280.jpg",
"saxophone-3397023_1280.jpg",
"tape-6824489_1280.jpg",
"vinyl-1595847_1280.jpg"
];

let currentIndex = 0;

function render(){
    let contentRef = document.getElementById("album");
    contentRef.innerHTML = "";
    for (let index = 0; index < imgs.length; index++) {
        contentRef.innerHTML += getNotesTemplate(index);
    }
}

 function getNotesTemplate(i){
    return` <img class="image" src="./picmusic/${imgs[i]}" alt="Bild ${i +1}" onclick="openOverlay(${i})">`
}

function openOverlay(index) {
    currentIndex = index;
    updateOverlay(currentIndex);
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
    document.body.style.overflow = 'hidden';
}

function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    document.body.style.overflow = '';
}

function updateOverlay(index){
    let overlayImage = document.getElementById("overlayImage");
    let overlayTitle = document.getElementById("overlayTitle");
    let overlayCounter = document.getElementById("overlayCounter");

    overlayImage.src = `./picmusic/${imgs[index]}`;
    overlayTitle.textContent = imgs[index];
    overlayCounter.textContent = `${index+1}/${imgs.length}`;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % imgs.length;
    updateOverlay(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    updateOverlay(currentIndex);
}
