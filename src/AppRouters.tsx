import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserContext from 'componentes/ContextApi';
import PethRouter from 'componentes/PethRouter';

import Login from 'componentes/Login';
import AreaAdmin from 'componentes/AreaAdmin';
import Produtos from 'componentes/Produtos';
import Erro404 from 'componentes/Erro404';

function AppRoutes() {
  return (
        //ROTA PARA ÁREA ADMINISTRATIVA
        <UserContext.Provider value={{user: 'Lucas Rocha'}}>
          <BrowserRouter>
              <Routes>
              <Route  path={'/'} element={<Login/>}/>
              <Route  path={'/admincoisle'} element={<PethRouter/>}>
                <Route  path={'/admincoisle/admin'} element={<AreaAdmin/>}/>
                <Route  path={'/admincoisle/produtos'} element={<Produtos/>}/>
              </Route>
              <Route  path='*' element={<Erro404 />}/>
              </Routes>
          </BrowserRouter>
        </UserContext.Provider>
  );
}

export default AppRoutes;
