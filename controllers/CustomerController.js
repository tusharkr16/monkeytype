const { registerUser, findUserByUsername, comparePassword, generateToken } = require('../services/CustomerService.js');


exports.signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await findUserByUsername(username);
    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const newUser = await registerUser(username, password);
    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error registering user" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await findUserByUsername(username);
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

   
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    
    const token = generateToken(user._id);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error logging in user" });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    console.log(req.userId,"userid"); 
    const user = await findUserByUsername(req.userId);
    console.log(user,"user###user");
    res.json(user);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching user details" });
  }
};
