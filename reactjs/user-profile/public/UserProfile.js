function UserProfile({ name }) {
  return (
    <div className="user-profile">
      <span className="profile-label">Current profile</span>
      <h2>{name || 'Unnamed user'}</h2>
      <p>Your profile name is displayed here.</p>
    </div>
  );
}

export default UserProfile;