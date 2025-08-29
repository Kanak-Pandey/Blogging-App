import axios from "axios";
import { Appbar } from "./AppBar"
import { BACKEND_URL } from "../config";
import { useState, type ChangeEvent, type EventHandler } from "react";
import { useNavigate } from "react-router-dom";

export const Publish=()=>{
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const navigate=useNavigate();
    return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full pt-8 px-4">
          <textarea onChange={(e)=>{
                setTitle(e.target.value)
          }}    
            id="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500 mb-2"
            placeholder="Title"
          ></textarea>
          <TextEdittor onChange={(e)=>{
            setDescription(e.target.value)
          }} />
           <button onClick={async ()=>{
                const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                    title,
                    content:description,
                },{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem("token")}`
                    }
                })
                navigate(`/blog/${response.data.id}`)
            }}type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-emerald-500 rounded-lg focus:ring-4 focus:ring-emerald-200 dark:focus:ring-emerald-800 hover:bg-emerald-600 shadow-md transition">Publish post
            </button>
        </div>
      </div>
    </div>
  );
}

function TextEdittor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=> void}){
    return <div>
   <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-600 border-gray-200">
        </div>
       <div className=" bg-white rounded-b-lg dark:bg-gray-800 w-full">
           <label className="sr-only">Publish post</label>
           <textarea onChange={onChange} id="editor" rows={9} className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 pl-2" placeholder="Write an article..." required ></textarea>
       </div>
   </div>
  
</div>

}