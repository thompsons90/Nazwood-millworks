import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Reviews = () => {
  const [Curb, setCurb] = useState([]);
  const [active, setActive] = useState(false);
  const [highlighted, setHighlighted] = useState(
    "https://i.imgur.com/cSl35wC.jpg"
  );
  const [image, setImage] = useState(null);
  async function getCalendarInfo() {
    const response = await fetch(
      "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/curb-appeal-thycd/service/get-display-images/incoming_webhook/getImages"
    );
    const json = await response.json();

    setCurb(json.Curb);
    console.log(Curb);
  }

  useEffect(() => {
    getCalendarInfo();
  }, []);
  const uploadImage = (e) => {
    var fileIn = e.target;
    var file = fileIn.files[0];
    if (file && file.size < 5e6) {
      const formData = new FormData();

      formData.append("image", file);
      fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
          Authorization: "Client-ID f46304c018d188d",
          Accept: "application/json",
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((response) => {
          e.preventDefault();
          console.log(response);
          console.log(response.data.link); // this is where the link is stored
          setImage(response.data.link);
        });
    }
  };

  const scheduleEvent = (e) => {
    e.preventDefault();
    let data = {
      image: image,
    };

    axios
      .post(
        "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/curb-appeal-thycd/service/schedule/incoming_webhook/scheduleEvent",
        data
      )
      .then(() => {
        alert("Thank you for your photo! ");
        setImage(null);
      });
  };

  if (Curb) {
    return (
      <div className="reviews">
        <p>
          Do you have a finished space using Nazwood Millworks? We'd love to see
          it!
        </p>
        <p>
          <Link to="/allphotos">
            See all photos
          </Link>
        </p>
        <div className="review-container">
        <div className="row">
          <div className="col-sm-5 review-box">
            <p></p>
            <img src={highlighted} alt="woodwork" className="img-fluid" />
          </div>
          <div className="col-sm-6">
            <div className="row">
              {Curb.slice(0, 6).map((Curb) => {
                return (
                  <div className="col-sm-4">
                    <img
                      src={Curb.image}
                      key={Curb._id}
                      className="review-image img-fluid"
                      alt="Review"
                      onClick={() => setHighlighted(Curb.image)}
                    ></img>
                    <p>{Curb.testimonials}</p>
                  </div>
                );
              })}{" "}
            </div>
          </div>
        </div>
        </div>
        <div>
          {" "}
          <p onClick={() => setActive(!active)} className="work-text pointer">
            Submit your own photo
          </p>
          <div className={active === true ? `text-center` : `hidden`}>
            <input
              type="file"
              id="image"
              name="First image"
              onChange={(e) => uploadImage(e)}
            ></input>
            <button
              className={image === null ? `hidden` : `yes`}
              onClick={(e) => scheduleEvent(e)}
            >
              Submit photo
            </button>
            <button>See all photos</button>
          </div>
        </div>
      </div>
    );
  } else if (Curb) {
    return (
      <div className="">
        Something's wrong with your internet connection if you see this for more
        than a couple seconds.
      </div>
    );
  }
};
