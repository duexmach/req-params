const notFound = (req, res) => {
  res.status(404).json({ status: 404, msg: "invalid endpoint" });
};

module.exports = notFound;
