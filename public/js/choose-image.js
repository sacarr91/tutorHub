const thumbnailEl = document.getElementById('thumbnail-preview');
const chooseImageEl = document.getElementById('choose-profile-image')

const selectImage = () => {
    thumbnailEl.setAttribute("src", `./assets/images/Profile-Icons/${chooseImageEl.value}.png`);
}

chooseImageEl.addEventListener("change", selectImage);

