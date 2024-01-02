import {Navigate, Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';

export function PrivateRoute() {
    const {userInfo} = useSelector((state) => state.auth);

    return userInfo ? <Outlet/> : <Navigate to='/auth' replace/>;
}