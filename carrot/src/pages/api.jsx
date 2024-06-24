import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Api = () =>{

    const [posts,setPosts] = useState([]);

    const TestFunction = async() => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
            setPosts(response.data);
        } 
        
        catch(error){
            console.log(error)
        }
    }
    
    useEffect( ()=> {
        TestFunction();
        // axios({
        //     method:'GET',
        //     url:'https://jsonplaceholder.typicode.com/photos'
        // }).then(response => setPosts(response.data))

        // axios.get('https://jsonplaceholder.typicode.com/photos')
        // .then(response => setPosts(response.data))
    });

    return(
    <ul>
        {posts.map(post=>(
            <li key={post.id}>
                <div>{post.title}</div>
                <div><img src={post.thumbnailUrl}/></div>
                </li>
        ))}
    </ul>
    )
}

export default Api;