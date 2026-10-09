const sharp = require("sharp"), fs = require("fs"), path = require("path");

async function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) { await walk(p); continue; }
    if (!/\.jpe?g$/i.test(f) || /-thumb\./.test(f)) continue;

    // chiều rộng tối đa theo loại ảnh
    let w = 1600;
    if (/doitac/i.test(p)) w = 400;               // logo đối tác
    if (/bia|logohos|logobia/i.test(f)) w = 1920; // ảnh bìa trang

    const buf = await sharp(p).rotate()
      .resize({ width: w, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    fs.writeFileSync(p, buf);

    // tạo ảnh nhỏ cho ảnh bìa album (a1)
    if (/^a1\.jpe?g$/i.test(f)) {
      await sharp(buf).resize({ width: 800 }).jpeg({ quality: 78, mozjpeg: true })
        .toFile(path.join(dir, "a1-thumb.jpg"));
    }
  }
}
walk("images").then(() => console.log("Xong"));