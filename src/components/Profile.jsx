import { useEffect,useState } from "react";

const Profile = () => {
    let userid = JSON.parse(localStorage.getItem('user'));
    const id = userid.id;
    const [user,setUser] = useState(null);

    useEffect(()=>{
        fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(data =>{
            setUser(data);
            // console.log(data);
        })
        .catch(err =>
            console.log(err)
        );
    },[id])    

    if(!user) return <div>Data loading...</div>
  return (
    <div className="profile">
      <img src={user?.image} alt="user" />
      <p>Name: {user?.firstName} {user?.lastName}</p>
      <p>Username: {user?.username}</p>
      <p>Email: {user?.email}</p>
      <p>Id: {user?.id}</p>
      <p>Phone: {user?.phone}</p>
      <p>BirthDate: {user?.birthDate}</p>
      <p>Age: {user?.age}</p>
      <p>Gender: {user?.gender}</p>
      <h2>Address:</h2>
      <p>{user?.address?.address},{user?.address?.city},{user?.address?.state},{user?.address?.postalCode}</p>
      <h2>Company: {user?.company?.name}</h2>
      <p>Department: {user?.company?.department}</p>
      <p>Title: {user?.company?.title}</p>
    </div>
  )
}

export default Profile;
