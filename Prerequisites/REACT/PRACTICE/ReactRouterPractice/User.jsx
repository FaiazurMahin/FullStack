import React from 'react'
import { Link} from 'react-router-dom'

const participants = [
    {name: 'A', age:20, id:1},
    {name:'B',age:25, id:2},
    {name:'C',age:22, id:3},
    {name:'D',age:27, id:4},
]
const User = () => {
  return (
    <div>
        
        <ul>
          {participants.map(p=>(<li key={p.id}><Link to={`/participants/${p.id}`}>{p.name}</Link></li>))}
        </ul>
    </div>
  )
}

export default User