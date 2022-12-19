import React from 'react';


const MangelCard = ({ mangel: {id, type, status, username, usermail, user, description, image, location } }) => {
    

    return (
        <div className="mangel" key={id}>
            <div>
                <p> {type} </p>
            </div>

            <div>
                ImagePlaceholder
                {/* <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} /> */}
            </div>

            <div>
                <span> {status}</span>
                <h3> {description}</h3>
                <h3> {location}</h3>
            </div>
        </div>
    );
}

export default MangelCard;
