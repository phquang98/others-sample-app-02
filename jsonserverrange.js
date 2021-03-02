// this add the middleware to modify the res to have content-range header, so that ra-simple-rest can use for pagination
module.exports = (req, res, next) => {
  res.header("Content-Range", "studentData 0-5/5");
  next();
};
