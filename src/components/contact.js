import React, {useState} from "react";
import axios from "axios";

export const Contact = () => {
    const [customerName, setCustomerName] = useState(null);
    const [address, setAddress] = useState(null);
    const [phone, setPhone] = useState(null);
    const [today, setToday] = useState(new Date());
    const [work, setWork] = useState(null);
    const [date, setDate] = useState(new Date());
    const [image1, setImage1] = useState(null);
    
    let stringTime = new Date(date).toString();
   
  
   
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
                  setImage1(response.data.link)
              });
      } 
  }

    let userData = [
      {
        Name: customerName,
        address: address,
        workType: work,
        time: date,
        imageOne: image1
      },
    ];
  
 
    /* submitting the data */
    const scheduleEvent = (e) => {
      e.preventDefault();
  
      axios.post(
        "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/curb-appeal-thycd/service/schedule/incoming_webhook/scheduleEvent",
        userData[0]
      );
      alert('Success!')
      setTimeout(() => {
        window.location.reload();
  return false;
      }, 500)
      
    }
    // f46304c018d188d Client ID
    // client secret ef028328cd3b8eb42f32b5f9fafbad3b820e3f77
    /* end of submission*/
    /* change the bar animations */

    return (
        <div className="container-fluid">
           <div className="contact">Contact us
           
           
           
           </div>
        </div>
    )
}