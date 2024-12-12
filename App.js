import { useContext, useState } from "react";
import "./profileContext.js";
import { ProfileProvider, ProfileContext } from "./profileContext.js";

function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <p>{/* */}</p>
        </div>
    );
}

function ProfileCard() {
    const {profile } = useState(ProfileContext);
    return(
        <div>
            <h2>Profile Card</h2>
            <div  style = {{display: "flex", flexDirection: "row"}}>
            <p>{profile.name}</p>
            <p>{profile.age}</p>
            <p>{profile.email}</p>
            </div>
        </div>
    )
}

function Banner() {
    const { profile } = useContext(ProfileContext);
    return (
        <div>
            <h2>Bienvenido {profile.name}</h2>
            <p>{/* */}</p>
        </div>
    );
}

function App() {
    //
    return(
        <div className="App">
        <ProfileProvider>
            <Profile />
            <Banner />
        </ProfileProvider>
        </div>
      );
}