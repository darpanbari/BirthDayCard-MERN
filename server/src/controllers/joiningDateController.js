import join from "../models/JoiningDateModel.js";

export const getJoiningDate = async (req, res) => {
  
  try {
    const joinDate = req.params.joinnDate;
    const birthdayList = await join.find({ joiningDate: joinDate });
    res.status(200).json({
      success: true,
      message: "Successfully get birthday list",
      data: birthdayList,
    });
  } 
  catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};