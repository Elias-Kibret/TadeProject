import { createContext, useState } from 'react';
export const ToggleNavBar = createContext(false);


const ToggleNavBarProvider = (props) => {
    // this state will be shared with all components 
const [show, setShow] = useState(true);
const value=[show]
// console.log(show)

return (
            // this is the provider providing state
    <ToggleNavBar.Provider value={{show,setShow}}>
        {props.children}
    </ToggleNavBar.Provider>
);
};

export default ToggleNavBarProvider;
