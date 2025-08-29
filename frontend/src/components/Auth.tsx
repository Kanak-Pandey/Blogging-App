import type { SignupInput } from "@kanakpandey30/medium-common"
import { useState, type ChangeEventHandler } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth=({type}:{type:"signup"|"signin"})=>{
    const [postInputs,setPostInputs]=useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })
    const navigate=useNavigate(); 
    async function sendRequest(){
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type=="signup"?"signup":"signin"}`,postInputs);
            
            localStorage.setItem("token", response.data.jwt);
            navigate("/blogs");
        }catch(e){
            //alert 
            alert("Error while signing up")
        }
        
    }
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                    {type==="signin"?"Login to your account?":"Create an Account"}
                    </div>
                    <div className="text-slate-400">
                        {type==="signin"?"Dont have account?":"Create an Account"}
                        <Link className="pl-2 underline cursor-pointer"to={type=="signin"?"/signup":"/signin"}>
                        {type==="signin"?"Signup":"Login"}</Link>
                    </div>
                </div>
                
                <div className="pt-4">
                    {type==="signup"?<LabledInput label="Name" placeholder="Type Name..." onChange={(e)=>{
                        setPostInputs(c=>({
                            ...c,
                            name:e.target.value,
                        }))
                    }}/>:null}
                    <LabledInput label="Email" placeholder="Type email..." onChange={(e)=>{
                        setPostInputs(c=>({
                            ...c,
                            email:e.target.value,
                        }))
                    }}/>
                    <LabledInput label="Password" type={"password"}placeholder="Type password..." onChange={(e)=>{
                        setPostInputs(c=>({
                            ...c,
                            password:e.target.value,
                        }))
                    }}/>
                    <button onClick=
                    {sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">{type=="signin"?"Sign in" :"Sign Up"}</button>
                </div> 
            </div>
            
        </div>
        
    </div>
}

interface LabledInputType{
    label:string;
    placeholder:string;
    onChange:ChangeEventHandler<HTMLInputElement>;
    type?:string;
}
function LabledInput({label,placeholder,onChange,type}:LabledInputType){
    return <div>
            <label className="block mb-2 text-sm font-semibold pt-4 text-gray-900 dark:text-white">{label}</label>
            <input onChange={onChange} type={type ||"text"}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
}