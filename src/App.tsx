import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

import { MenuProvider } from './hooks/menuContextHook';

export function App() {
  return (
    <MenuProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <SideBar />
        <Content />

      </div>
    </MenuProvider>
  )
}