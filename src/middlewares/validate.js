const { validationHelper } = require("../helpers");

module.exports = schema => async (req, res, next) => {
  try {
    if (!schema)
      return res.status(500).send({ error: "Validation schema not defined" });
    await validationHelper.isValid({ schema, data: req.body });
    return next();
  } catch (error) {
    if (error) {
      const errors = error.inner.map(e => {
        return { field: e.path, type: e.type, message: e.message };
      });
      return res.status(422).send({ errors });
    }
  }
};
