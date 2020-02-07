const isValid = async ({ schema, data }) => {
  if (!schema || !data) return false;
  return await schema.validate(data, { abortEarly: false });
};

module.exports = {
  isValid
};
