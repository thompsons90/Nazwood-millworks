import React, { useState, useEffect } from "react";
import axios from "axios";

export const Reviews = () => {
  const [Curb, setCurb] = useState([]);
  const [active, setActive] = useState(false);
  const [image, setImage] = useState(null);
  async function getCalendarInfo() {
    const response = await fetch(
      "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/curb-appeal-thycd/service/get-display-images/incoming_webhook/getImages"
    );
    const json = await response.json();

    setCurb(json.Curb);
    //console.log(Curb)
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
    
  
  }

  /*  pets webhook
exports = async function(payload, response) {

  if (payload.body) {
      const body =  EJSON.parse(payload.body.text());
      const reviews = context.services.get("mongodb-atlas").db("pets").collection("my_pets");
      
      const reviewDoc = {
          pet: body.pet,
          breed: body.breed,
          user: body.user,
         image: body.image,
          desc: body.desc,
          
      };
  
      return await reviews.insertOne(reviewDoc);
  }

  return  {};
};
*/
  if (Curb) {
    return (
      <div className="reviews">
        <h3 className="work-text">Our past work</h3>

        <div className="row" >
          {Curb.map((Curb) => {
            return (
              <div className="">
                <div className="col-sm-4" key={Curb._id}>
                  <img
                    src={Curb.image} 
                    className="img-fluid"
                    alt="Review"
                  ></img>
                </div>
              </div>
            );
          })}{" "}
        </div>
        <div>
          {" "}
          <h3 onClick={() => setActive(!active)} className="work-text pointer">
            Submit your own photo
          </h3>
          <div className={active === true ? `text-center` : `hidden`}>
            <input
              type="file"
              id="image"
              name="First image"
              onChange={(e) => uploadImage(e)}
            ></input>
            <button className={image === null ? `hidden` : `yes`} onClick={(e) => scheduleEvent(e)}>
              Submit photo
            </button>
            {/* {image === null ? `hidden` : `yes`} */}
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
