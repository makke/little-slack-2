import React from 'react'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    render() {
        return(
          <div>
            <h1>Welcome to the Little Slack Website!</h1>
            <h2>HELLO</h2>
            <p>Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est, eget rhoncus nibh
            metus nec massa. Maecenas hendrerit laoreet augue
            nec molestie. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus.</p>
          </div>
        );
    }
}

export default Home;
