import {Redirect} from 'react-router-dom';

const Github = (props) => {
    const id = props.routerProps.match.params.username;
    localStorage.setItem("username", id);
    return id!== 'undefined' ? <Redirect to={`/profile/${id}`} /> : "Loading";
}

export default Github;