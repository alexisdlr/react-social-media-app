import { pool } from "../connect.js";
import jwt from 'jsonwebtoken'
export const getPosts = async (req, res) => {
  try {
    let id 
    const token = req.cookies.accessToken;
    if(!token) return res.status(500).json('not logged in')
  
    jwt.verify(token, 'secretkey', (err, userInfo) => {
      if(err) return res.status(403).json('token invalid')
      id = userInfo.id
    } )
    const q = `SELECT p.*, u.id as userId, name, profilePic FROM posts AS p JOIN users as u ON (u.id = p.userId) JOIN relationships AS r ON (p.userId = followedUser AND followerUser = ?)`;
    const [rows] = await pool.query(q, [id]);
    return res.status(200).json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
};
