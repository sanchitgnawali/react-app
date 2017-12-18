import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
        <div>
            <h1>Info</h1>
            <p>the info is : {props.info}</p>
        </div>

);

const withAdminWarning = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private message. Please don't share.</p>}

            <WrappedComponent {...props} />
        </div>
    );

};

const AdminInfo = withAdminWarning(Info);

const withAuthenticationWarning = (WrappedComponent) => {
    return (props) => {
        if(props.isAuthenticated) {
            return <WrappedComponent {...props}/>
        } else  {
            return (<div><p>YOu must be logged in to see this message</p></div>);
        }
    }
};

const AuthWarning = withAuthenticationWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info='Sanchit Gnawali is the popular web dev'/>,document.getElementById('app'));
ReactDOM.render(<AuthWarning isAuthenticated={false} info="sanchit gnawali is popular web developer"/>,document.getElementById('app'));