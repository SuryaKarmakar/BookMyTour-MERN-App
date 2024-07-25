exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "users get successfully",
    data: {},
  });
};

exports.getSingleUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "user get successfully",
    data: {},
  });
};

exports.createNewUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "user created successfully",
    data: {},
  });
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "user update successfully",
    data: {},
  });
};

exports.deleteUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "user deleted successfully",
    data: {},
  });
};
