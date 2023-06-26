const multer = require("multer")
const jimp = require("jimp")
const uuid = require("uuid")

const multerOptions = {
    storage: multer.memoryStorage(),
    fileFilter: (req, file, next) => {
        let allowed = ["image/jpeg", "image/jpg", "image/png"]
        if (allowed.includes(file.mimetype)) return next(null, true)
        next({message: "arquivo não suportado"}, false)
    }
}

exports.upload = multer(multerOptions).single("photo")

exports.resize = async (req, res, next) => {
    if (!req.file) return next()

    let ext = req.file.mimetype.split("/")[1]
    let filename = `${uuid.v4()}.${ext}`
    req.body.avatar = filename
    
    await jimp.read(req.file.buffer)
    .then(img => {
        return img
        .resize(800, jimp.AUTO)
        .write(`./public/assets/avatars/${filename}`)
    }).catch(() => {
        res.status(500).send({ message: "Não foi possível fazer upload da imagem. Tente novamente em alguns instantes." })
    })
    
    next()
}