import cl from './friendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline}) => {
    return <li className={cl.item}>
                <span className={ isOnline ? `${cl.online}` : `${cl.offline}`}></span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>

};

export default FriendListItem;