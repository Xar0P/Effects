import { Route, Routes as Switch } from 'react-router-dom';

import MenuHover from '../pages/menuHover';
import ChangeCursorOnHover from '../pages/changeCursorOnHover';
import HoverEffect from '../pages/hoverEffect';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/menuHover" element={<MenuHover />} />
      <Route exact path="/changeCursorOnHover" element={<ChangeCursorOnHover />} />
      <Route exact path="/hoverEffect" element={<HoverEffect />} />
    </Switch>
  )
}