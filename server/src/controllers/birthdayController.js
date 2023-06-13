import Birthday from "../models/birthdayModel.js";
import JWT from "jsonwebtoken"

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

export const loginController = async (req, res) => {
  try {
    const { name } = req.body;
    
    const user = await Birthday.findOne({ name });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "name is not registerd",
      });
    }
   
    //token
    const token = await JWT.sign({ name: user.name }, process.env.JWT_SECRET, {expiresIn: "7d",});

    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        birthdate: user.birthdate,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};