const getController = (req, res) => {
  const { query, body, params } = req;
  res.status(200).json({ query: query, body: body, params: params });
};

const postController = (req, res) => {
  const { query, body, params } = req;
  res.status(200).json({ query: query, body: body, params: params });
};

module.exports = {
  getController,
  postController,
};
