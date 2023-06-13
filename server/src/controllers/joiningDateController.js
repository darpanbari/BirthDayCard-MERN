import joinDate from "../models/JoiningDateModel.js";

export const getJoiningDate = async (req, res) => {
  
  try {
    const fromDate = req.params.fromDate;
    const toDate = req.params.toDate;

    const data = await joinDate.find({
      joiningDate: {
        $gte: fromDate,
        $lte: toDate
      }
    });
    res.status(200).json({
      success: true,
      message: "Successfully get",
      data,
    });
  } 
  catch (error) {
    res.status(500).json({
      success: false,
      err: error.message,
    });
  }
};