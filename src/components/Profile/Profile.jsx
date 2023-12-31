import cl from './profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={cl.profile}>
            <div className={cl.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={cl.avatar}
                    width="100"
                />
                <p className={cl.name}>{username}</p>
                <p className={cl.tag}>@{tag}</p>
                <p className={cl.location}>{location}</p>
            </div>
            <ul className={cl.stats}>
                <li className={cl.items}>
                    <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li className={cl.items}>
                    <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li className={cl.items}>
                    <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
 
}

export default Profile;
