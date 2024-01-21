const user = require("../model/user");

const loginPostController = async (req, res) => {
  const givenName = req.body.username;
  const givenPassword = req.body.password;

  const foundUser = await user.find({ username: givenName });
  if (foundUser.length>0) {
    console.log(foundUser);
    if (givenPassword === foundUser[0].password) {
      res.status(200).json({ message: "authenticated" });
    } else {
      res.status(401).json({ message: "not authenticated" });
    }
  } else {
    res.json({ message: "No user found" });
  }
};

module.exports = {loginPostController };
