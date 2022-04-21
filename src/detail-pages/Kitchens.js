import React from "react";
import { Link } from "react-router-dom";

export const Kitchens = () => {
    return (
        <div className="container-fluid">
<h3 className="work-text" >Our kitchen work</h3>
<Link to="/" className="work-text">Back to home page</Link>
            <div className="row">
                
                
                <div className="col-sm-4">
                    <img src="/hisphotos/kitchens/kitchen2.jpg" className="img-fluid work-photo" alt="kitchen" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/kitchens/kitchen3.jpg" className="img-fluid work-photo" alt="kitchen" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/kitchens/kitchen4.jpg" className="img-fluid work-photo" alt="kitchen" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/kitchens/kitchen8.jpg" className="img-fluid work-photo" alt="kitchen" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/kitchens/kitchen10.jpg" className="img-fluid work-photo" alt="kitchen" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/kitchens/kitchen14.jpg" className="img-fluid work-photo" alt="kitchen" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/kitchens/kitchen38.jpg" className="img-fluid work-photo" alt="kitchen" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/kitchens/kitchen45.jpg" className="img-fluid work-photo" alt="kitchen" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/kitchens/kitchen46.jpg" className="img-fluid work-photo" alt="kitchen" />
                </div>
            </div>
            <Link to="/" className="work-text">Back to home page</Link>

        </div>
    )
}