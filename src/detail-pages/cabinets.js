import React from "react";
import { Link } from "react-router-dom";

export const Cabinets = () => {
    return (
        <div className="container-fluid">
<h3 className="work-text" >Our Cabinet work</h3>
<Link to="/" className="work-text">Back to home page</Link>
            <div className="row">
                
                <div className="col-sm-4">
                    <img src="/hisphotos/cabinets/cabinets1.jpg" className="img-fluid work-photo" alt="cabinets" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/cabinets/work10.jpg" className="img-fluid work-photo" alt="cabinets" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/cabinets/work11.jpg" className="img-fluid work-photo" alt="cabinets" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/cabinets/work12.jpg" className="img-fluid work-photo" alt="cabinets" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/cabinets/work13.jpg" className="img-fluid work-photo" alt="cabinets" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/cabinets/work14.jpg" className="img-fluid work-photo" alt="cabinets" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/cabinets/work15.jpg" className="img-fluid work-photo" alt="cabinets" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/cabinets/work16.jpg" className="img-fluid work-photo" alt="cabinets" />
                </div>
                <div className="col-sm-4">
                    <img src="/hisphotos/cabinets/work17.jpg" className="img-fluid work-photo" alt="cabinets" />
                </div>
                
            </div>
            <Link to="/" className="work-text">Back to home page</Link>

        </div>
    )
}