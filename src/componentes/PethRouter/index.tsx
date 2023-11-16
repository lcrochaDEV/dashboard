import { Outlet } from 'react-router-dom';
import MenuAdmin from 'componentes/MenuAdmin';


const PethRouterAdmin = () => {
    return (
        <>
            <MenuAdmin/>
            <Outlet />
        </>
    );
}

export default PethRouterAdmin;