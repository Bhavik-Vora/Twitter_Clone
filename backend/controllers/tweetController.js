import { Tweet } from "../models/tweetSchema.js";
import { User } from "../models/userSchema.js";

export const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    if (!description || !id) {
      res.status(401).json({
        message: "All Fields are required",
        success: false,
      });
    }

    await Tweet.create({
      description,
      userId: id,
    });
    return res.status(201).json({
      message: "Tweet created Successfully",
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Tweet Deleted Successfully",
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};

export const likeOrDislike = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.paramas.id;
    const tweet = await Tweet.findById(tweetId);
    if (tweet.like.includes(loggedInUserId)) {
      await Tweet.findByIdandUpdate({
        tweetId,
        $pull: { like: loggedInUserId },
      });
      return res.status(201).json({
        message: "User Dislike Your Tweet",
      });
    } else {
      await Tweet.findByIdandUpdate({
        tweetId,
        $push: { like: loggedInUserId },
      });
      return res.status(201).json({
        message: "User Like Your Tweet",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const getAllTweet = async (req, res) => {
  //loggedinuser + following persons tweets
  try {
    const id = req.params.id;
    const loggedInUserId = await User.findById(id);
    const loggedInUserTweets = await Tweet.find({userId: id });
    const followingUserTweets = await Promise.all(
      loggedInUser.following.map((otherUsersId) => {
        return Tweet.find({ userId: otherUsersId });
      })
    );
    return res.response(200).json({
      tweets:loggedInUserTweets.concat(...followingUserTweets)
     });
  }catch (error) {
    console.log(error);
  }
  
};

export const getfollowingTweets = async(req,res)=>{
  try {
    const id = req.params.id;
    const loggedInUserId = await User.findById(id);
    const followingUserTweets = await Promise.all(
      loggedInUser.following.map((otherUsersId) => {
        return Tweet.find({ userId: otherUsersId });
      })
    );
    return res.response(200).json({
      tweets:[].concat(...followingUserTweets)
   });
  }catch (error) {
    console.log(error);  
  }
}
