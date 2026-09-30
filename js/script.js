/* =========================================================
   MENU MOBILE
   ========================================================= */

const menuButton = document.getElementById("mobileBurger");
const mainNav = document.getElementById("mainNav");

if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });
}


/* =========================================================
   MENU TRONG SUỐT KHI CUỘN
   ========================================================= */

const menuWrapper = document.querySelector(".menu-wrapper");
let scrollTimer = null;

if (menuWrapper) {

    window.addEventListener("scroll", () => {

        menuWrapper.classList.add("scrolling");

        clearTimeout(scrollTimer);

        scrollTimer = setTimeout(() => {
            menuWrapper.classList.remove("scrolling");
        }, 700);

    });

}


/* =========================================================
   DỮ LIỆU ALBUM
   ========================================================= */

const albums = {

    "album-01": {
        title: "FOOD & BEVERAGE 01",

        images: [
            "images/food&drink/men/a1.jpg",
            "images/food&drink/men/a2.jpg",
            "images/food&drink/men/a3.jpg",
            "images/food&drink/men/a4.jpg",
            "images/food&drink/men/a5.jpg",
            "images/food&drink/men/a6.jpg",
            "images/food&drink/men/a7.jpg",
            "images/food&drink/men/a8.jpg"
        ]
    },

    "album-02": {
        title: "FOOD & BEVERAGE 02",

        images: [
            "images/food&drink/concept/a1.jpg",
            "images/food&drink/concept/a2.jpg",
            "images/food&drink/concept/a3.jpg",
            "images/food&drink/concept/a4.jpg",
            "images/food&drink/concept/a5.jpg",
            "images/food&drink/concept/a6.jpg",
        ]
    },

    "album-03": {
        title: "FOOD & BEVERAGE 03",

        images: [
            "images/food&drink/nuoc/a1.jpg",
            "images/food&drink/nuoc/a2.jpg",
            "images/food&drink/nuoc/a3.jpg",
            "images/food&drink/nuoc/a4.jpg",
            "images/food&drink/nuoc/a5.jpg",
            "images/food&drink/nuoc/a6.jpg",
        ]
    }

};


/* =========================================================
   ALBUM ELEMENT
   ========================================================= */

const albumModal = document.getElementById("albumModal");
const albumTitle = document.getElementById("albumTitle");
const albumGallery = document.getElementById("albumGallery");
const albumClose = document.getElementById("albumClose");


/* =========================================================
   LIGHTBOX ELEMENT (Bổ sung thêm lightboxThumbs)
   ========================================================= */

const lightboxModal = document.getElementById("lightboxModal");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxThumbs = document.getElementById("lightboxThumbs"); // Thêm dòng này

const closeLightboxButton = document.querySelector(".close-lightbox");
const prevLightboxButton = document.querySelector(".prev-lightbox");
const nextLightboxButton = document.querySelector(".next-lightbox");

let currentImages = [];
let currentIndex = 0;


/* =========================================================
   HÀM CẬP NHẬT GIAO DIỆN LIGHTBOX (Ảnh chính + Thumbnail active)
   ========================================================= */

function updateLightbox() {
    if (!lightboxImage || currentImages.length === 0) return;

    // Cập nhật ảnh chính
    lightboxImage.src = currentImages[currentIndex];

    // Cập nhật trạng thái active cho danh sách thumbnail nếu có
    if (lightboxThumbs) {
        const thumbItems = lightboxThumbs.querySelectorAll("img");
        thumbItems.forEach((thumb, idx) => {
            if (idx === currentIndex) {
                thumb.classList.add("active-thumb");
                // Tự động cuộn thanh thumbnail đến ảnh đang chọn
                thumb.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
            } else {
                thumb.classList.remove("active-thumb");
            }
        });
    }
}


/* =========================================================
   MỞ LIGHTBOX
   ========================================================= */

function openLightbox(images, index) {
    if (!lightboxModal || !lightboxImage) return;
    if (!images || images.length === 0) return;

    currentImages = images;
    currentIndex = (index + currentImages.length) % currentImages.length;

    // Tạo danh sách các ảnh nhỏ (thumbnails) bên trong lightbox
    if (lightboxThumbs) {
        lightboxThumbs.innerHTML = "";
        currentImages.forEach((imgSrc, idx) => {
            const thumbImg = document.createElement("img");
            thumbImg.src = imgSrc;
            thumbImg.alt = `Thumbnail ${idx + 1}`;
            
            // Khi click vào 1 ảnh nhỏ trong danh sách -> chuyển đến ảnh đó
            thumbImg.addEventListener("click", (event) => {
                event.stopPropagation();
                currentIndex = idx;
                updateLightbox();
            });

            lightboxThumbs.appendChild(thumbImg);
        });
    }

    updateLightbox();
    lightboxModal.classList.add("active");
    document.body.style.overflow = "hidden";
}


/* =========================================================
   ĐÓNG LIGHTBOX
   ========================================================= */

function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove("active");
    document.body.style.overflow = "";
}


/* =========================================================
   ẢNH TRƯỚC
   ========================================================= */

function previousImage() {
    if (currentImages.length === 0) return;
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }
    updateLightbox();
}


/* =========================================================
   ẢNH SAU
   ========================================================= */

function nextImage() {
    if (currentImages.length === 0) return;
    currentIndex++;
    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }
    updateLightbox();
}


/* =========================================================
   MỞ ALBUM
   ========================================================= */

function openAlbum(albumID) {

    const album = albums[albumID];

    if (!album) {

        console.error(
            "Không tìm thấy album:",
            albumID
        );

        return;
    }

    if (!albumModal || !albumTitle || !albumGallery) {

        console.error(
            "Thiếu albumModal / albumTitle / albumGallery"
        );

        return;
    }


    console.log("Đang mở:", albumID);


    albumTitle.textContent =
        album.title;

    albumGallery.innerHTML = "";


    album.images.forEach((image, index) => {

        const item =
            document.createElement("div");

        item.className =
            "album-gallery-item";


        const img =
            document.createElement("img");

        img.src = image;

        img.alt =
            `${album.title} - ${index + 1}`;


        img.onerror = function () {

            console.error(
                "Không tìm thấy ảnh:",
                image
            );

            this.src =
                "images/placeholder.svg";
        };


        item.appendChild(img);

        albumGallery.appendChild(item);


        /* Click ảnh trong album */

        item.addEventListener("click", () => {

            openLightbox(
                album.images,
                index
            );

        });

    });


    albumModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   CLICK ẢNH COVER
   ========================================================= */

const albumLinks =
    document.querySelectorAll(".album-link");

albumLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const albumID =
            link.getAttribute("data-album");

        openAlbum(albumID);

    });

});


/* =========================================================
   LIGHTBOX THƯỜNG
   ========================================================= */

const normalLightboxLinks =
    Array.from(
        document.querySelectorAll(".lightbox")
    );

if (normalLightboxLinks.length > 0) {

    const normalImages =
        normalLightboxLinks.map((link) => {

            return link.getAttribute("href");

        });


    normalLightboxLinks.forEach(
        (link, index) => {

            link.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();

                    openLightbox(
                        normalImages,
                        index
                    );

                }
            );

        }
    );

}


/* =========================================================
   NÚT LIGHTBOX
   ========================================================= */

closeLightboxButton?.addEventListener(
    "click",
    closeLightbox
);


prevLightboxButton?.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        previousImage();

    }
);


nextLightboxButton?.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        nextImage();

    }
);


/* =========================================================
   CLICK RA NGOÀI LIGHTBOX
   ========================================================= */

lightboxModal?.addEventListener(
    "click",
    (event) => {

        if (event.target === lightboxModal) {

            closeLightbox();

        }

    }
);


/* =========================================================
   ĐÓNG ALBUM
   ========================================================= */

albumClose?.addEventListener(
    "click",
    () => {

        albumModal.classList.remove("active");

        document.body.style.overflow = "";

    }
);


/* =========================================================
   CLICK RA NGOÀI ALBUM
   ========================================================= */

albumModal?.addEventListener(
    "click",
    (event) => {

        if (event.target === albumModal) {

            albumModal.classList.remove("active");

            document.body.style.overflow = "";

        }

    }
);


/* =========================================================
   BÀN PHÍM
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            lightboxModal &&
            lightboxModal.classList.contains("active")
        ) {

            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowLeft") {
                previousImage();
            }

            if (event.key === "ArrowRight") {
                nextImage();
            }

            return;
        }


        if (
            albumModal &&
            albumModal.classList.contains("active")
        ) {

            if (event.key === "Escape") {

                albumModal.classList.remove("active");

                document.body.style.overflow = "";

            }

        }

    }
);


/* =========================================================
   SWIPE ĐIỆN THOẠI
   ========================================================= */

let touchStartX = 0;

lightboxModal?.addEventListener(
    "touchstart",
    (event) => {

        touchStartX =
            event.changedTouches[0].screenX;

    }
);


lightboxModal?.addEventListener(
    "touchend",
    (event) => {

        const touchEndX =
            event.changedTouches[0].screenX;

        const distance =
            touchEndX - touchStartX;


        if (distance < -50) {
            nextImage();
        }

        if (distance > 50) {
            previousImage();
        }

    }
);