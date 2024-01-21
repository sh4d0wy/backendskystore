const user = require("../model/user");

const loginPostController = async (req, res) => {
  const givenName = req.body.username;
  const givenPassword = req.body.password;
  
  const foundUser = await user.find({ username: givenName });
  if (foundUser) {
    if (givenPassword === foundUser[0].password) {
      res.json({ message: "authenticated" }).status(200);
    } else {
      res.json({ message: "not authenticated" }).status(401);
    }
  } else {
    res.json({ message: "No user found" });
  }
};

module.exports = {loginPostController };
