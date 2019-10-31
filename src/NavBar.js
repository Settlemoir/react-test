import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <h1>This is the Nav Bar Component</h1>
                <p>Navigation menu may go here</p>
                <p>Note that each component can only have 1 top level tag, so all of these tags are wrapped in a div</p>
            </div>
        )
    }
}

export default NavBar;