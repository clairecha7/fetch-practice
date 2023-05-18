const User = ({ user }) => {
  console.log(user);
  return (
    <div>
      <img
        src={`https://robohash.org/${user.name}.png?set=set4`}
        alt={user.name}
        width="200px"
      />
      <h1>{user.name}</h1>

      <h3>{user.email}</h3>

      <h3>{user.username}</h3>
    </div>
  );
};

export default User;
