import User from "./User";
//import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div className="about">      
      <h1>About Page</h1>
      <User />
      <div className="flex">
        LoggedIn User
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
    </div>
  );
};

export default About;