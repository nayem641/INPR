import Titlebar from "../Components/Titlebar";
import Navigationbar from "../Components/Navigationbar";
import CreatePost from "../Components/CreatePost";
import Story from "../Components/Story";
import Posts from "../Components/Posts";
import { useEffect } from "react";

function HomePage() {
  // useEffect(()=>{
  //   const user_id=JSON.parse(localStorage.getItem("user_id"))
  //   if(!user_id){
  //     localStorage.removeItem("user_id")
  //     window.location.href="/login"
  //   }  
  // },[])
  return (
    <div className="homepage">
      <Titlebar />
      <Navigationbar />
      <CreatePost />
      <Story />
      <Posts />
    </div>
  );
}

export default HomePage;
