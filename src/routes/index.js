import { Route, Routes as Switch } from 'react-router-dom';

import MenuHover from '../pages/menuHover';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/menuHover" element={<MenuHover />} />
    </Switch>
  )
}