import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const ImageReview = () => {
  const [Curb, setCurb] = useState([]);
  const [image, setImage] = useState(null);
  async function getCalendarInfo() {
    const response = await fetch(
      "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/curb-appeal-thycd/service/getEvents/incoming_webhook/getEvents"
    );
    const json = await response.json();

    setCurb(json.Curb);
    
  }

  useEffect(() => {
    getCalendarInfo();
  }, []);

const setTheImage = () => {
 setImage(Curb.image);
}
  const sendImage = (image) => {
 setImage(image)
    let data = {
     
      image: image,
    };

    axios
      .post(
        "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/curb-appeal-thycd/service/add-display-image/incoming_webhook/add-image",
        data,
        console.log(image)
      )
      .then(() => {
        console.log("s'all gud")
        
        
      });
    
  
  }
  const deleteImage = (_id) => {
    axios
      .delete(
        `https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/curb-appeal-thycd/service/delete-image/incoming_webhook/delete?_id=${_id}`
      )
      .then(() => {
        console.log("deleted");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //let stringTime = new Date().toString();
  if (Curb) {
    return (
      <div className="calendarPage">
        <Link to="/">Back to front page </Link>
        <div onClick={(e) => sendImage(e)}>Submit the photo</div>
        <h1 className="text-center">
          Here you can approve or delete images.
        </h1>
        {Curb.map((Curb) => {
          return (
            <div className="container-fluid">
              <div className="yes" key={Curb.Name}>
                <div className="col-sm-4">
                  <img
                    src={Curb.image}
                    className="img-fluid"
                    alt="Customer "
                  ></img>
                </div>
              </div>
              <button
                onClick={(_id) => deleteImage(Curb._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
              <button
                onClick={(image) => sendImage(Curb.image)}
                
                className="btn btn-success"
              >
                Display this image
              </button>
             
            </div>
          );
        })}
      </div>
    );
  } else if (Curb) {
    return (
      <div className="calendarPage">
        Something's wrong with the data or your internet connection if you see
        this for more than a couple seconds.
      </div>
    );
  }
};

/* 
exports = async function(payload, response) {

  if (payload.body) {
      const body =  EJSON.parse(payload.body.text());
      const reviews = context.services.get("mongodb-atlas").db("Curb").collection("Customer_event");
      
      const reviewDoc = {
          
       _id: BSON.ObjectId(payload.query._id)
          
      };
  
      return await reviews.insertOne(reviewDoc);
  }

  return  {};
};
*/