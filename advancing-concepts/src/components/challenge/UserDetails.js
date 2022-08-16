const UserDetails = ({props}) => {
  return (
    <div>
      <p key={props.id}>Name: <strong>{props.name}</strong></p>
      <p key={props.id}>Age: <strong>{props.age}</strong></p>
      <p key={props.id}>Role: <strong>{props.role}</strong></p>
    </div>
  );
};

export default UserDetails;
