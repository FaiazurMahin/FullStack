import {React,useState, useEffect} from 'react'
import {Link} from 'react-router-dom'



 
const UserListPage = () => {

 const [users,setUsers] = useState([])
          useEffect(()=>{
              const fetchuser = async ()=>{
                  try{
                      const response = await fetch('/users');
                  const data = [
    {
        id: 2, name: "abc"
    },
    {
        id: 3, name: "def"
    }
]
                  setUsers(data);
                  }
                  catch(err){
                      console.log("Error",err)
                  }
      
              }
              fetchuser();
          },[]);

  return (
    <>
    <div>
    <ul>
        {users.map(user=><li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>)}
    </ul>
    </div>

    </>
  )
}

export default UserListPage