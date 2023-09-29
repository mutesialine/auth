import {useState,useEffect} from 'react'
import {Redirect} from "react-router-dom"

export default function UserProfile() {
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000//user");
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  if (!user) {
    return <Redirect to="/login" />;
  }


  return (
    <h2>Welcome, {user.email}</h2>
  )
}

