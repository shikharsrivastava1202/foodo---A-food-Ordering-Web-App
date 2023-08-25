import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1 className=" m-5 flex justify-center items-center">
          About Class Component
        </h1>
        <h2 className=" m-5 flex justify-center items-center">
          This is Namaste React Series
        </h2>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <div className="flex justify-center items-center">
          <UserClass name={"Defaut"} location={" Lucknow Class"} />
        </div>
      </div>
    );
  }
}

export default About;
