const Sector = require("../Models/sectorsModel");
const User = require("../Models/usersModel");

exports.createSectors = async (req, res) => {
  try {
    const { sectors } = req.body;

    const sector = await Sector.create({ sectors });

    res.status(200).json({
      status: "Success",
      sector,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.getSectors = async (req, res) => {
  try {
    const sectors = await Sector.find();
    res.status(200).json({
      status: "Success",
      sectors,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "Success",
      users,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};


exports.createUser = async (req, res) => {
  console.log("got here")

  try {
    const { name, selectedSector } = req.body;
    if (!name || !selectedSector) {
      throw new Error("All fields are required");
    }

    if (name.length < 3) {
      throw new Error("Name must be more than 3 characters");
    }


      const user = await User.create({
        name,
        selectedSector,
      
      });
console.log(user)
      res.status(200).json({
        status: "Success",
        user,
      });

  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params.id;

    const update = await User.findByIdAndUpdate(id, req.body);

    res.status(200).json({
      status: "Success",
      update,
    });
  } catch (err) {}
};
