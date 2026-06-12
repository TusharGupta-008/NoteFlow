const authMiddleware = async (req, res, next) => {
  console.log("test for middleware");
  next();
};

export default authMiddleware;
