import cl from './friendList.module.css'

const FriendList = ({ friends }) => {
    return (
        <ul className={cl.list}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return <li key={id} className={cl.item}>
                    <span className={
                        isOnline ? `${cl.online}` : `${cl.offline}`
                            }></span>
                            <img className="avatar" src={avatar} alt="User avatar" width="48" />
                            <p className="name">{name}</p>
                        </li>
                        })}
        </ul>
            
    
  );
};

export default FriendList;