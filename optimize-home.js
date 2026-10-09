const sharp = require("sharp"), fs = require("fs"), path = require("path");
const dir = "images/trangchu";

(async () => {
  for (const f of fs.readdirSync(dir)) {
    if (!/^a\d+\.jpe?g$/i.test(f)) continue;
    const name = f.replace(/\.[^.]+$/, "");
    await sharp(path.join(dir, f)).rotate()
      .resize({ width: 700, withoutEnlargement: true })
      .jpeg({ quality: 72, mozjpeg: true })
      .toFile(path.join(dir, name + "-m.jpg"));
    console.log("OK:", name);
  }
  console.log("XONG");
})();``