import Artikel from "../model/Artikel.js";

export const createArticle = async (req, res) => {
  try {
    const { judul, foto, deskripsi, cegah, obat } = req.body;

    const createArticle = await Artikel.create({
      title: judul,
      foto: foto,
      description: deskripsi,
      cegah : cegah,
      obat : obat,
    });

    res.status(201).json({ createArticle });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Add article failed");
  }
};

export const getArticle = async (req, res) => {
  try {
    const getArticle = await Artikel.find();
    res.status(200).json({ getArticle });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Add article failed");
  }
};

export const deleteArticle = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const deletedArticle = await Artikel.findByIdAndRemove({ _id: id });
    res.status(200).json({ deletedArticle });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
};

export const detailArticle = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const findArticleById = await Artikel.findById({ _id: id });
    res.status(200).json(findArticleById);
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
};
