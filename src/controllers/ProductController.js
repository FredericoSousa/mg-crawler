const { MLCrawler } = require("../crawlers");

const getProducts = async (req, res) => {
  try {
    const { search, limit } = req.body;
    const data = await MLCrawler.getProducts({
      limit,
      search
    });
    return res.json({ length: data.length, data });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = { getProducts };
