import React from "react";
import { Container } from "react-bootstrap";
import ProfileImage from "@daym3l/react-profile-image";
const axios = require("axios").default;

const UserProfile = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  let userId = "";
  let userImg = "";
  if (user) {
    userId = user._id;
    userImg = user.image;
  }
  console.log(userId);

  const getImages = async (base64Image, fileImage) => {
    // Do something with the selected image)
    try {
      await axios
        .put(`http://localhost:3001/users/${userId}`, {
          image: base64Image,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((resp) => props.sendUserGetRequest());
       
      console.log(user.image);
    } catch (error) {
      console.log(error);
    }
    console.log(base64Image);
    console.log(fileImage);
  };
  return (
    <Container>
      <ProfileImage
        className="mt-5"
        camera
        returnImage={getImages}
        uploadBtnProps={{ variant: "contained", label: "Up" }}
      />
      <div className="myImg">
        <img src={userImg}></img>
      </div>
    </Container>
  );
};

export default UserProfile;
