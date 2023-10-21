const allowedOrigins = ["localhost","nodejs-boilerplate-103-226-138-127.nip.io"];

module.exports = (req, res, next) => {
  let isDomainAllowed = allowedOrigins.indexOf(req.hostname) !== -1;
  if (!isDomainAllowed) return res.status(403).json({ message: "RESTRICTED" });
  next();
};
