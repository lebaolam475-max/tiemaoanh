(function () {

    const params  = new URLSearchParams(window.location.search);
    const albumID = params.get("album");

    const titleEl   = document.getElementById("albumPageTitle");
    const galleryEl = document.getElementById("albumPageGallery");

    if (!titleEl || !galleryEl) return;

    const album = albums[albumID];

    if (!album) {
        titleEl.textContent = "Không tìm thấy album";
        return;
    }

    titleEl.textContent = album.title;
    document.title = album.title + " - Tiệm Ảo Ảnh Studio";
    const back = document.getElementById("albumBack");
    if (back && album.back) {
    back.href = album.back;
    back.textContent = "← " + album.backText;
}
    album.images.forEach((src, index) => {

        const item = document.createElement("div");
        item.className = "album-page-item";
        item.style.animationDelay = (index * 0.08) + "s";
        const img = document.createElement("img");
        img.src = src;
        img.alt = `${album.title} - ${index + 1}`;
        img.loading = "lazy";
        img.onerror = function () {
            this.onerror = null;
            this.src = "images/placeholder.svg";
        };

        item.appendChild(img);

        item.addEventListener("click", () => {
            openLightbox(album.images, index);
        });

        galleryEl.appendChild(item);
    });

})();