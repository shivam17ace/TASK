import React from "react";
import {DiGithubFull} from "react-icons/di";
import{DiGithubBadge} from "react-icons/di";
import "./styles.css";
function Heading(){
    return(
        <div className="pullHeading">
            <DiGithubFull className="h-icon" size={50}/>
        <h2>Pull Requests of Neovim Repository..</h2>
        <DiGithubBadge size={30}/>
        </div>
         );
}
export default Heading;