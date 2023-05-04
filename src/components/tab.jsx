import { Radio, Space, Tabs } from 'antd';
import { useState, useEffect } from 'react';
import Projects from '../../../admin/src/components/projects';
const { TabPane } = Tabs;

function Tab() {

 const [screenSize, setScreenSize] = useState(window.innerWidth);

 useEffect(() => {
   const handleResize = () => setScreenSize(window.innerWidth);
   window.addEventListener('resize', handleResize);

   // cleanup function to remove event listener
   return () => window.removeEventListener('resize', handleResize);
 }, []);

 const tabPosition = screenSize < 700 ? 'top' : 'left';

  return (
    <>
      <Tabs tabPosition={tabPosition} style={{padding: '20px',width: "300px", height: '100vh', fontWeight:"600"}}>
      <TabPane tab="Projects" key="1">
        <Projects />
      </TabPane>
      {/* <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane> */}
    </Tabs>
    </>
  )
}

export default Tab
