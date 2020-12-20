import React, {useContext} from 'react';
import {SidebarContext} from '../contexts/SidebarContext';

function Home() { 

	const {sidebar, showSidebar} = useContext(SidebarContext)



	console.log(sidebar,)
  return (
    <div className={sidebar ? 'home home-active' : 'home'}>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
