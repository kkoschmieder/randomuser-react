import React from 'react'

const RandomUser = ({user}) => {
    return (
        <div className='userCard'>
            <img className='userPicture' src={user?.picture.large} />
            <div className='userData'>
                <h2>Name: {user?.name.title} {user?.name.first} {user?.name.last}</h2>
                <h2>Gender: {user?.gender}</h2>
                <h2>Date of Birth: {user?.dob.date}</h2>
                <h2>Age: {user?.dob.age}</h2>
                <h2>Phone: {user?.phone}</h2>
            </div>
        </div>
    );
};

export default RandomUser;