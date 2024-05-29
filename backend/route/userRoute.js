import express from "express";
import { Register,Login,logout, bookmarks, getotherUsers, follow,getMyProfile, unfollow } from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";
const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").post(logout);
router.route("/bookmarks/:id").put(isAuthenticated,bookmarks);
router.route("/profile/:id").get(isAuthenticated,getMyProfile);
router.route("/otheruser/:id").get(isAuthenticated,getotherUsers);
router.route("/follow/:id").post(isAuthenticated,follow);
router.route("/unfollow/:id").post(isAuthenticated,unfollow);

export default router;
