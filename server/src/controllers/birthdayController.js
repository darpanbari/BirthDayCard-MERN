import Birthday from "../models/birthdayModel.js";

export const getAllBirthdayList = async (req, res) => {
  
  try {
    const fromDate = req.params.fromDate;
    const toDate = req.params.toDate;

    const data = await Birthday.find({
      birthdate: {
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
      error,
    });
  }
};