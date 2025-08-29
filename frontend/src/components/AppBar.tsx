import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
export const Appbar=()=>{
    return <div className="flex justify-between px-10 shadow-lg py-3 bg-slate-300 ">
        <div className="font-serif font-bold text-2xl flex justify-center flex-col cursor-pointer">
            <Link to={"/blogs"}>Medium</Link>
        </div>
        <div>
            <Link to={`/publish`}>
            <button type="button" className="mr-4 text-white bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-emerald-800 shadow-lg shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">New Blog</button>
            </Link>
            
            <Avatar size={10} name="Kanak"></Avatar>
        </div>

    </div>
}