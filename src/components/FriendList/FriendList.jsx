import cl from './friendList.module.css'
import FriendListItem from '../FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <ul className={cl.list}>
            {friends.map(({ avatar, name, isOnline, id}) => {
                return <FriendListItem 
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />})}  
        </ul>
            
    
  );
};

FriendListItem.prototype = {
    key: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}


export default FriendList;