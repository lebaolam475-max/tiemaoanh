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
   MENU: TRONG SUỐT Ở ĐẦU TRANG, NỀN TRẮNG KHI ĐÃ CUỘN
   ========================================================= */

const menuWrapper = document.querySelector(".menu-wrapper");

function updateMenuBackground() {
    if (!menuWrapper) return;

    if (window.scrollY > 10) {
        menuWrapper.classList.add("scrolling");
    } else {
        menuWrapper.classList.remove("scrolling");
    }
}

window.addEventListener("scroll", updateMenuBackground);
updateMenuBackground(); // chạy 1 lần khi tải trang (phòng khi tải lại giữa trang)



function makeImages(folder, count, ext = "jpg") {
    const list = [];
    for (let i = 1; i <= count; i++) list.push(`${folder}/a${i}.${ext}`);
    return list;
}

/* =========================================================
   DỮ LIỆU ALBUM
   ========================================================= */

const albums = {

    "sp-01": {
    title: "MỸ PHẨM",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/1.gombut", 6)   // 8 ảnh a1..a8
    },
    "sp-02": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/2.sachum.b", 9)
    },
    "sp-03": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/3.ruocnuimuong_quatet.c", 12)
    },
    "sp-04": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/4.anti_honax.d", 9)
    },
    "sp-05": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/5.quatet.e", 8)
    },
    "sp-06": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/6.gel.f", 9)
    },
    "sp-07": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/san-pham/7.binh.g", 8)
    },
    "sp-08": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/8.bo_san_pham", 8)
    },
    "sp-09": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/san-pham/9.giay_an.i", 11)
    },
    "sp-10": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/10.gombut.k", 12)
    },
    "sp-11": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/11.miengrong.l", 4)
    },
    "sp-12": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/12.mindecor.m", 13)
    },
    "sp-13": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/13.ngocson.n", 4)
    },
    "sp-14": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/14.ruouvang.o", 7)
    },
    "sp-15": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/15.ngam_tuong", 11)
    },
    "sp-16": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/16.thuc_phamcora", 6)
    },
    "sp-17": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/17.thuoc", 7)
    },
    "sp-18": {
    title: "TRANG SỨC",
    back: "sanpham.html",
    backText: "Ảnh sản phẩm",
    images: makeImages("images/sanpham/18.trang_suc", 8)
    },



    "dr-01": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/1.dauluotvan", 5)
    },
    "dr-02": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/2.bio", 24)
    },
    "dr-03": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/3", 15)
    },
    "dr-04": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/4", 14)
    },
    "dr-05": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/5", 10)
    },
    "dr-06": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/6", 9)
    },
    "dr-07": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/7", 23)
    },
    "dr-08": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/8", 7)
    },
    "dr-09": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/9", 11)
    },
    "dr-10": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/10", 9)
    },
    "dr-11": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/11", 10)
    },
    "dr-12": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/12", 9)
    },
    "dr-13": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/13",6)
    },
    "dr-14": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/14", 13)
    },
    "dr-15": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/15", 10)
    },
    "dr-16": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/16", 5)
    },
    "dr-17": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/17", 8)
    },
    "dr-18": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/18", 5)
    },
    "dr-19": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/19", 11)
    },
    "dr-20": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/20", 10)
    },
    "dr-21": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/21", 15)
    },
    "dr-22": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/22", 6)
    },
    "dr-23": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/23", 9)
    },
    "dr-24": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/24", 5 )
    },
    "dr-25": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/25", 7)
    },
    "dr-26": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/26", 8)
    },
    "dr-27": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/27", 4)
    },
    "dr-28": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/28", 9)
    },
    "dr-29": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/29", 4)
    },
    "dr-30": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/30", 5)
    },
    "dr-31": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/31", 7)
    },
    "dr-32": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/32", 9)
    },
    "dr-33": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/33", 5)
    },
    "dr-34": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/34", 9)
    },
    
    "dr-35": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/35", 11)
    },
    "dr-36": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/36", 13)
    },
    "dr-37": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/37", 15)
    },
    "dr-38": {
    title: "MOONCAKE 01",
    back: "food.html",
    backText: "Mooncake",
    images: makeImages("images/food&drink/38", 4)
    },
    
   

    "dn-01": {
    title: "DỰ ÁN 01",
    back: "doanh-nghiep.html",
    backText: "Ảnh doanh nghiệp",
    images: makeImages("images/doanh-nghiep/du-an-1", 12)
},

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

/* Chọn: slide | fade | zoom | blur | flip | rotate | drop | random */
const LIGHTBOX_EFFECT = "zoom";

const EFFECTS = {
    slide: (d) => ({
        out: [{ opacity: 1, transform: "translateX(0)" }, { opacity: 0, transform: `translateX(${-d * 120}px)` }],
        in:  [{ opacity: 0, transform: `translateX(${d * 120}px)` }, { opacity: 1, transform: "translateX(0)" }]
    }),
    fade: () => ({
        out: [{ opacity: 1 }, { opacity: 0 }],
        in:  [{ opacity: 0 }, { opacity: 1 }]
    }),
    zoom: () => ({
        out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(1.18)" }],
        in:  [{ opacity: 0, transform: "scale(.8)" }, { opacity: 1, transform: "scale(1)" }]
    }),
    blur: () => ({
        out: [{ opacity: 1, filter: "blur(0)" }, { opacity: 0, filter: "blur(24px)" }],
        in:  [{ opacity: 0, filter: "blur(24px)" }, { opacity: 1, filter: "blur(0)" }]
    }),
    flip: (d) => ({
        out: [{ opacity: 1, transform: "perspective(1200px) rotateY(0)" }, { opacity: 0, transform: `perspective(1200px) rotateY(${-d * 80}deg)` }],
        in:  [{ opacity: 0, transform: `perspective(1200px) rotateY(${d * 80}deg)` }, { opacity: 1, transform: "perspective(1200px) rotateY(0)" }]
    }),
    rotate: (d) => ({
        out: [{ opacity: 1, transform: "translateX(0) rotate(0)" }, { opacity: 0, transform: `translateX(${-d * 160}px) rotate(${-d * 10}deg)` }],
        in:  [{ opacity: 0, transform: `translateX(${d * 160}px) rotate(${d * 10}deg)` }, { opacity: 1, transform: "translateX(0) rotate(0)" }]
    }),
    drop: () => ({
        out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(80px)" }],
        in:  [{ opacity: 0, transform: "translateY(-80px)" }, { opacity: 1, transform: "translateY(0)" }]
    })
};

let slideToken = 0;

function updateLightbox(direction = 0) {
    if (!lightboxImage || currentImages.length === 0) return;

    const newSrc = currentImages[currentIndex];
    const token = ++slideToken;

    if (lightboxThumbs) {
        lightboxThumbs.querySelectorAll("img").forEach((thumb, idx) => {
            thumb.classList.toggle("active-thumb", idx === currentIndex);
            if (idx === currentIndex) {
                thumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            }
        });
    }

    // Lần mở đầu tiên: không có hiệu ứng chuyển
    if (!direction || !lightboxImage.getAttribute("src")) {
        lightboxImage.src = newSrc;
        return;
    }

    let name = LIGHTBOX_EFFECT;
    if (name === "random" || !EFFECTS[name]) {
        const keys = Object.keys(EFFECTS);
        name = keys[Math.floor(Math.random() * keys.length)];
    }
    const fx = EFFECTS[name](direction);

    const out = lightboxImage.animate(fx.out, { duration: 240, easing: "ease-in", fill: "forwards" });

    const pre = new Image();
    const ready = new Promise((r) => { pre.onload = pre.onerror = r; });
    pre.src = newSrc;

    Promise.all([out.finished, ready]).then(() => {
        if (token !== slideToken) return;
        lightboxImage.src = newSrc;
        lightboxImage.getAnimations().forEach((a) => a.cancel());
        lightboxImage.animate(fx.in, { duration: 360, easing: "cubic-bezier(.2,.8,.2,1)" });
    }).catch(() => {});
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
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateLightbox(-1);
}

function nextImage() {
    if (currentImages.length === 0) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateLightbox(1);
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

window.addEventListener('scroll', function() {
    const menuWrapper = document.querySelector('.menu-wrapper');
    
    // Nếu cuộn xuống quá 50px thì thêm class scrolling, ngược lại thì xóa đi
    if (window.scrollY > 50) {
        menuWrapper.classList.add('scrolling');
    } else {
        menuWrapper.classList.remove('scrolling');
    }
});
/* ===== HIỆU ỨNG CHUYỂN TRANG ===== */
document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');

    // Bỏ qua: link ảnh lightbox, anchor (#), link ngoài, mở tab mới
    if (
        link.classList.contains('lightbox') ||
        !href || href.startsWith('#') ||
        href.startsWith('http') || href.startsWith('mailto:') ||
        link.target === '_blank'
    ) return;

    link.addEventListener('click', (e) => {
        if (e.ctrlKey || e.metaKey || e.shiftKey) return;
        e.preventDefault();
        document.body.classList.add('page-leaving');
        setTimeout(() => { window.location.href = href; }, 380);
    });
});

// Quay lại bằng nút Back thì không bị kẹt ở trạng thái mờ
window.addEventListener('pageshow', () => {
    document.body.classList.remove('page-leaving');
});