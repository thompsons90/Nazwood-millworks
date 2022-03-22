import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const ImageReview = () => {
    const [Curb, setCurb] = useState([]);
    const [today, setToday] = useState(new Date())
    const [image, setImage] = useState(null)
      async function getCalendarInfo() {
        const response = await fetch(
          "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/curb-appeal-thycd/service/getEvents/incoming_webhook/getEvents"
        );
        const json = await response.json();
        
        setCurb(json.Curb);
      //console.log(Curb)
      }
    
    
     useEffect(() => {
       getCalendarInfo()
       
     }, [])
    
     const selectImage = (e) => {
setImage(e)
console.log(image)
     }
     const scheduleEvent = () => {
     
  
      axios.post(
        "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/curb-appeal-thycd/service/add-display-image/incoming_webhook/add-image",
        image
      );
      alert('Success! We will contact you shortly')
     
        
      
    };
    const deleteImage = (_id) => {
      axios
        .delete(
          `https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/curb-appeal-thycd/service/delete-image/incoming_webhook/delete?_id=${_id}`
        )
        .then(() => {
          console.log('deleted')
        })
        .catch((error) => {
          console.log(error);
        });
      }
    //let stringTime = new Date().toString();
      if (Curb ) {
        return (
          
          <div className="calendarPage">

            <Link to='/'>Back to front page </Link>
            <div onClick={(e) => scheduleEvent(e)}>Submit the photo</div>
            <h1 className="text-center">Here you can approve or delete images. If you like them hit "Submit" if not, "Delete"</h1>
            {Curb.map((Curb) => {
                return (
                  <div className="container-fluid">
                    <div className="yes" key={Curb.Name}>
                   
                 
                  
                    <div className="col-sm-4">
                   <img src={Curb.image} className="img-fluid" alt="Customer "></img>
                   </div></div>
                  <button onClick={(_id) =>deleteImage(Curb._id)} className="btn btn-danger">Delete</button>
                  <button onClick={(e) => scheduleEvent(e)} className="btn btn-success">Display this image</button>
                  <button onClick={() => selectImage(Curb.image)} className="btn btn-warning">Select this </button>
                  </div>
                );
              })}
            
          </div>
        );
      } else if (Curb) {
        return (
         
          <div className="calendarPage">
           Something's wrong with the data or your internet connection if you see this for more than a couple seconds. 
          </div>
        );
      } 
    }