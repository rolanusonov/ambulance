import React from 'react';
import group from '../img/Group.png';
import group2 from '../img/Group 51.png';
import group3 from '../img/Group 52.png';

const Modal = () => {
    return (
        <div>
            <div className=" Modal">
                <label className="Modal__lab" htmlFor="modal" >
                    <img src={group} alt=""/>
                 </label>
                <input style={{display:"none"}} id="modal" type="checkbox"/>

                <div className="lob">
                    <img src={group2} alt=""/>
                </div>
                <div className="lob2">
                    <img src={group3} alt=""/>
                </div>

            </div>
        </div>
    );
};

export default Modal;