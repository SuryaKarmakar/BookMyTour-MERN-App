exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "tours get successfully",
    data: {},
  });
};

exports.getSingleTour = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "tour get successfully",
    data: {},
  });
};

exports.createNewTour = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "tour created successfully",
    data: {},
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "tour update successfully",
    data: {},
  });
};

exports.deleteTour = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "tour deleted successfully",
    data: {},
  });
};
