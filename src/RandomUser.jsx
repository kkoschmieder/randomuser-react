import React from 'react'

const RandomUser = ({user}) => {
    let dateMinimized = user?.dob.date.slice(0, -14);
    return (
        <div className='userCard'>
            <img className='userPicture' src={user?.picture.large} />
            <div className='userData'>
                <h2 className='bright'>{user?.name.title} {user?.name.first} {user?.name.last}, {user?.nat}</h2>
                <h2 className='bright'>{dateMinimized}, {user?.dob.age}</h2>
                <h2 className='bright'>{user?.email}</h2>
                <h2 className='bright'>{user?.phone}</h2>
            </div>
        </div>
    );
};

export default RandomUser;