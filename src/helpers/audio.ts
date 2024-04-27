const audio = new Audio();

export const playAudio = (path: string) => {
    audio.setAttribute('src', `${window.location.origin}/sounds/${path}.mp3`)
    audio.play();
};

export const stopAudio = () => {
    audio.pause();
}