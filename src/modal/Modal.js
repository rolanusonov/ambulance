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
                    <a href="tel:+996501482929">
                        <img src={group2} alt=""/>
                    </a>

                </div>
                <div className="lob2">
                    <a href=" https://wa.me/+996501482929">
                        <img src={group3} alt=""/>
                    </a>

                </div>

            </div>
        </div>
    );
};

export default Modal;