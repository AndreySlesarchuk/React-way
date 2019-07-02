import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p160x160/20375969_2123357487891108_7861845126847512805_n.jpg?_nc_cat=111&_nc_oc=AQm-AdUM7bQpERJlKFfUaP9WZrAK3mZZq5ErrhgJFCeT6NnijdBGHQk240fLZbDvbO8&_nc_ht=scontent-frx5-1.xx&oh=7f0e401ff816a57acae0a6421ac8f2d9&oe=5DAF13D6',
                    followed: true,
                    fullname: 'Andrey',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p160x160/20375969_2123357487891108_7861845126847512805_n.jpg?_nc_cat=111&_nc_oc=AQm-AdUM7bQpERJlKFfUaP9WZrAK3mZZq5ErrhgJFCeT6NnijdBGHQk240fLZbDvbO8&_nc_ht=scontent-frx5-1.xx&oh=7f0e401ff816a57acae0a6421ac8f2d9&oe=5DAF13D6',
                    followed: false,
                    fullname: 'Bogdan',
                    status: 'I am a boss',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://pp.userapi.com/vcYmvWu65RQR8ThH4H4onUQTCDkPQH3--Ma9Iw/gJkvd0aS6Jg.jpg?ava=1',
                    followed: true,
                    fullname: 'Valya',
                    status: 'I am a boss',
                    location: {city: 'Moskow', country: 'Russia'}
                },
                {
                    id: 4,
                    photoUrl: 'https://pp.userapi.com/c629115/v629115031/45724/HIYYl-pdsfA.jpg?ava=1',
                    followed: true,
                    fullname: 'Mike',
                    status: 'I am a boss',
                    location: {city: 'Pinsk', country: 'Belarus'}
                }
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;