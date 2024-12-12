import React from 'react';

const ProfileContext = React.createContext();

const ProfileProvider = ({children}) => {
    //const children = props.children;

    const [profile, setProfile] = useState({
        name: "Cris Arias",
        age: 24,
        email: "crisalonso@estudiantec.cr",
    });

    return (
        <ProfileContext.Provider value = {{profile, setProfile}}>
        {children}
        </ProfileContext.Provider>
    );
};

export { ProfileProvider, ProfileContext };