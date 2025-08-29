import { Link } from "react-router-dom";

interface BlogCardProps{
    authorname:string;
    title:string;
    content:string;
    publishedDate: string;
    id:string
}
export const BlogCard=({
    authorname,
    title,
    content,
    publishedDate,
    id
}:BlogCardProps)=>{
    return <Link to={`/blog/${id}`}> 
    <div className="p-4 border-b-1pb-4 min-w-md cursor-pointer">
         <div className="flex m-1"> 
            <div className="flex justify-center flex-col pl-2">
                <Avatar name={authorname} />
            </div>
            <div className="text-xs font-thin text-slate-400 pl-2 flex justify-center flex-col">
                &#x2022;
            </div>
            <div className="font-thin pl-2 text-sm flex justify-center flex-col">
                {authorname}
            </div>
            <div className="text-xs font-thin text-slate-400 pl-2 flex justify-center flex-col">
                &#x2022;
            </div>
            <div className="font-extralight text-slate-500 pl-2 text-sm flex justify-center flex-col">
                {publishedDate} 
            </div>
         </div>
         <div className="text-xl font-semibold ">
            {title}
         </div>
         <div className="text-md font-thin ">
            {content.slice(0,100)+"..."}
         </div>
         <div className="text-slate-500 text-sm font-extralight pt-2">
            {`${Math.ceil(content.length/100)} minute(s) read`}
         </div>
         
    </div></Link>
    
}

export const Avatar=({name,size=6}:{name:string,size?:number})=>{
     return <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-700 rounded-full dark:bg-gray-600`}>
        <span className="font-sm  text-white dark:text-gray-300">{name[0]}</span>
    </div>
}