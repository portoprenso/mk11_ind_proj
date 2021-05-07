import React from 'react';

const roasterContext = React.createContext()
// const INIT_STATE = {
//     roasterData: [],
//     productsData: [],
//     fighterInfo: {},
//     productInfo: {},
// }
//
// const reducer = (state=INIT_STATE, action) => {
//     switch (action.type) {
//
//     }
// }
//
let value = {

}

const RoasterContextProvider = ({children}) => {

    // const getRoasterData = async (history) => {
    //
    // }


    return (
        <roasterContext.Provider value={value}>
            {children}
        </roasterContext.Provider>
    );
};

export default RoasterContextProvider;