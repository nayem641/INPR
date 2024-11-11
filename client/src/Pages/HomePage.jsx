import Titlebar from "../Components/Titlebar";
import Navigationbar from "../Components/Navigationbar";
import CreatePost from "../Components/CreatePost";
import Story from "../Components/Story";
import Posts from "../Components/Posts";

function HomePage() {
  

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
