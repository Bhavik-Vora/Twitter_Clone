import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const TOKEN_SECRET="adcdfwwewrg";

export const Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    // basic validation
    if (!name || !username || !email || !password) {
      return res.status(401).json({
        message: "All fields are required.",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "User already exist.",
        success: false,
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 16);

    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      message: "Account created successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
      const { email, password } = req.body;
      if (!email || !password) {
          return res.status(401).json({
              message: "All fields are required.",
              success: false
          })
      };
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(401).json({
              message: "Incorrect email or password",
              success: false
          })
      }
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
          return res.status(401).json({
              message: "Incorect email or password",
              success: false
          });
      }
      const tokenData = {
          userId: user._id
      }
      const token = await jwt.sign(tokenData, TOKEN_SECRET, { expiresIn: "1d" });
      return res.status(201).cookie("token", token, { expiresIn: "1d", httpOnly: true }).json({
          message: `Welcome back ${user.name}`,
          user,
          success: true
      })
  } catch (error) {
      console.log(error);
  }
}

export const logout = async (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
    message: "user logout successfully",
    success: true,
  });
};

export const bookmarks = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.paramas.id;
    const user = await User.findById(loggedInUserId);
    if (user.bookmarks.includes(tweetId)) {
      await User.findByIdAndUpdate(loggedInUserId, {
        $pull: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "Bookmarked removed",
      });
    } else {
      await User.findByIdAndUpdate(loggedInUserId, {
        $push: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "Bookmarked Saved",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findbyId(id).select(-password);
    return res.status(200).json({
      user,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getotherUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const otherUsers = await User.find({ _id: { $ne: id } });
    if (!otherUsers) {
      return res.status(401).json({
        message: "Currenlty not user to show hear",
      });
    }
    return res.status(201).json({
      otherUsers,
    });
  } catch (error) {
    console.log(error);
  }
};


export const follow = async(req,res)=>{
    try{
            const loggedInUserId = req.body.id; //patel
            const userId = req.params.id; //keshav
            const loggedInUser = await User.findById(loggedInUserId);
            const user = await User.findById(userId);
            if(!user.followers.includes(loggedInUserId)){
                await user.updateOne({$push:{followers:loggedInUserId}})
                await loggedInUser.updateOne({$push:{following:userId}})
            }else{
                return res.status(400).json({
                    message:`User Already followed to ${user.name}`
                })
            }
            return res.status(200).json({
                message:`${loggedInUser.name} User just followed to ${user.name}`,
                success:true,
            })
    }catch(error){
        console.log(error)
    }
}

export const unfollow = async(req,res)=>{
  try {
    const loggedInUserId = req.body.id; //patel
            const userId = req.params.id; //keshav
            const loggedInUser = await User.findById(loggedInUserId);
            const user = await User.findById(userId);
            if(loggedInUser.following.includes(userId)){
                await user.updateOne({$pull:{followers:loggedInUserId}})
                await loggedInUser.updateOne({$pull:{following:userId}})
            }else{
                return res.status(400).json({
                    message:`User not followed to yet`
                })
            }
            return res.status(200).json({
                message:`${loggedInUser.name} User just Unfollowed to ${user.name}`,
                success:true,
            })
  }catch (error) {
    console.log(error)
  }
}
  
