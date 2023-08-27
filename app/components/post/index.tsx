'use client'

import { getAllComments } from "@/app/api/apiPosts";
import { useEffect, useState } from "react";
import PostDeatilCard from "./postDetail";

export default function Post({ id }: { id: number }) {
    const [postInfo, setPostInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);  
      getAllComments((isOk, data) => {
          if(!isOk){
              console.log("Give a post information un successful", data);
              setLoading(false);  
            } else {
                const tempList: any = [];
                for (let i=0;i<data.data.length;i+=1) {
                    if (id === data.data[i].postId) tempList.push(data.data[i])
                }
                // console.log(tempList);
                setPostInfo(tempList);
                setLoading(false);
            }
        })
    }, []);
    if(loading) return <div>Loading...</div>
    return (
        <div className="flex items-center justify-center mt-4">
            <PostDeatilCard postInfo={postInfo} />
        </div>
    )
  }