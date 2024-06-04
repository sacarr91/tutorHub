const thumbnailEl = document.getElementById('thumbnail-preview-tutor');
const chooseImageEl = document.getElementById('choose-profile-image-tutor')

const selectImage = (profileImage) => {
    profileImage = chooseImageEl.value;
    thumbnailEl.setAttribute("src", `./assets/images/Instrument-Icons/${profileImage}.png`);
}

chooseImageEl.addEventListener("selection", selectImage);