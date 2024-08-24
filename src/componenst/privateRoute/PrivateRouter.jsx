
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';


const PrivateRouter = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className='loading loading-spinner text-primary'/>
    }

    if(user){
        return children;
    }

    return (
        <Navigate to="/login" />
    );
};


PrivateRouter.propTypes = {
    children:PropTypes.object
};


export default PrivateRouter;
