import { React, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Spinner from './Spinner';


const UserDetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchid = async () => {
            try {
                const response = await fetch(`/user/${id}`)
                if (!response.ok) {
                    throw new Error('Fetching Failed');
                }
                const data = {
    id: 2, name: "abc", age: 10
}
                setUser(data);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchid();
    }, [id]);


    if (loading) {
        return <Spinner />
    }
    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            <p>Name:{user.name} </p>
            <p>Age: {user.age} </p>
            <p>ID: {user.id}</p>
            <button onClick={() => { setUser(prev => ({ ...prev, age: prev.age + 1 })) }}> Increase</button>
            <button onClick={() => { setUser(prev => ({ ...prev, age: prev.age - 1 })) }}> Decrease</button>
            <button onClick={() => { setUser(prev => ({ ...prev, age: 0 })) }}> Reset</button>
            <button onClick={() => navigate('/users')}>Go back</button>
        </div>
    )
}

export default UserDetailPage