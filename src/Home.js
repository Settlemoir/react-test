import React from 'react';
import HomeTable from './HomeTable';
import HomeViewAdmin from './HomeViewAdmin';
import HomeViewManager from './HomeViewManager';

class Home extends React.Component {
    
    // The Home component would be made up of all of the components we might see on the Home page:
    // the table, the admin field view, the manager field view

    render() {
        return (
            <div>
                <HomeTable></HomeTable>
                <HomeViewAdmin></HomeViewAdmin>
                <HomeViewManager></HomeViewManager>
            </div>
        )
    }
}

export default Home;