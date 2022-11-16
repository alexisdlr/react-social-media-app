import "./Profile.scss";

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Posts from "../../components/Posts/Posts";
import { makeRequest } from "../../axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import defaultPic from "../../assets/userPicDefault.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = useLocation().pathname.split("/")[2];
  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      makeRequest.get("/users/find/" + userId).then((res) => {
        return res.data;
      }),
  });
  console.log(data);

  return (
    isLoading ? 'loading' : 
    <div className="profile">
      <div className="images">
        <img
          src={
            data.coverPic === null
              ? "https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              : data.coverPic
          }
          alt=""
          className="cover"
        />
        <img
          src={data.profilePic === null ? defaultPic : data.profilePic}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="medium" />
            </a>
          </div>
          <div className="center">
            <span> {data.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{data.city}</span>
              </div>
              <div className="item">
                <span>{data.website}</span>
              </div>
            </div>
            { 
              currentUser.id === data.id ?  <button>Update</button> : 
              <button>follow</button>
              }
          </div>
          <div className="right">
            <EmailOutlinedIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
