export const getSettings = (req, res) => {
  res.status(200).json({
    allowedIps: ["::ffff:127.0.0.1"],
  });
};
