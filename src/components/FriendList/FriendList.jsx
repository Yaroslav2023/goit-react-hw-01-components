import cl from './friendList.module.css'
import FriendListItem from '../FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <ul className={cl.list}>
            {friends.map(({ id, avatar, name, isOnline }) => {
               return (<li key={id} className={cl.item}>
                <FriendListItem 
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            /></li>)
                })}  
        </ul>);
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FriendList;