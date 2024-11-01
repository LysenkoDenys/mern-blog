import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Comment = ({ comment }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [comment]);

  return (
    <div className="flex p-4 border-b dark:border-gray-600 text-sm">
      <div className="flex-shrink-0 mr-3">
        <img
          src={user.profilePicture}
          alt={user.username}
          className="w-10 h-10 rounded-full bg-gray-200"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <span className="font-bold mr-1 text-xs truncate">
            {user ? `@${user.username}` : 'anonymous'}
          </span>
          <span className="text:xs text-gray-500">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
        <p className="pb-2 text-gray-500">{comment.content}</p>
      </div>
    </div>
  );
};

// Add PropTypes to validate the `postId` prop
Comment.propTypes = {
  comment: PropTypes.string.isRequired, // Require postId to be a string
};

export default Comment;
