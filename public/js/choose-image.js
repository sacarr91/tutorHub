const thumbnailEl = document.getElementById('thumbnail-preview-tutor');
const chooseImageEl = document.getElementById('choose-profile-image-tutor')

const selectImage = () => {
    thumbnailEl.setAttribute("src", `./assets/images/Instrument-Icons/${chooseImageEl.value}.png`);
}

chooseImageEl.addEventListener("change", selectImage);