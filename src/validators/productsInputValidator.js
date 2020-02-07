const Yup = require("yup");

module.exports = Yup.object().shape({
  search: Yup.string().required(),
  limit: Yup.number()
    .min(0)
    .notRequired()
});
