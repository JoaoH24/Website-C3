const ProfileImage = ({ type, description, path, className = "" }) => {
  if (type == "profile") {
    return (
      <img
        className={`w-40 rounded-full ${className}`}
        src={path}
        alt={description}
      />
    );
  } else if (type == "logo") {
    return (
      <img
        className={`w-18 rounded-full ${className}`}
        src={path}
        alt={description}
      />
    );
  }
};

export default ProfileImage;
