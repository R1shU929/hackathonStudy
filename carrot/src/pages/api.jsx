import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Api = () =>{

    const [posts,setPosts] = useState([]);
    const [click,setClick] = useState(true);

    const onClickButton1 = ()=>{
        TestFunction(),
        setClick(false)
    }

    const onClickButton2 = ()=>{
        setPosts([]),
        setClick(true)
    }

    const TestFunction = async() => {
        try{
            await axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response=>{ // 통신하는 데이터명이 리스폰스가 댐
                setPosts(response.data);
        })
    } 
    catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <div>
        {click ? <button onClick={onClickButton1}>
            통신하기
        </button>
        :
        <button onClick={onClickButton2}>
            통신한거 리-셋!
        </button>
}
</div>
        <ul>
        {posts.length !==0 && posts.map(post => (
                    <li key={post.id}>
                        <div>{post.title}</div>
                        <div>
                            <img src={post.thumbnailUrl} />
                        </div>
                    </li>
                ))}
    </ul>
    </div>
    )
}

export default Api;