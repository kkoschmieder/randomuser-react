import React from 'react'

const RandomUser = ({user}) => {
    let dateMinimized = user?.dob.date.slice(0, -14);
    return (
        <div className='userCard'>
            <img className='userPicture' src={user?.picture.large} />
            <div className='userData'>
                <h2 className='bright'>Name: {user?.name.title} {user?.name.first} {user?.name.last}</h2>
                <h2 className='dark'>Gender: {user?.gender}</h2>
                <h2 className='bright'>Date of Birth: {dateMinimized}</h2>
                <h2 className='dark'>Age: {user?.dob.age}</h2>
                <h2 className='bright'>Phone: {user?.phone}</h2>
            </div>
        </div>
    );
};

export default RandomUser;