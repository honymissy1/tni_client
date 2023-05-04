
import {AudioOutlined, DownCircleFilled, DeleteOutlined, PlusOutlined, EditFilled, CalendarOutlined,SwapRightOutlined } from '@ant-design/icons';
import { Card,Button, Space, Input, Select, Modal, DatePicker, } from 'antd';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const showModal = () =>{
    setOpen(true);
  }
  const hideModal = () => {
    setOpen(false);
  };

  useEffect(() =>{
    const project = async() =>{
      try{

        const data = await fetch(`https://tni-server.vercel.app/projects`);
        const result = await data.json()
        setProjects(result);
        console.log(result);
      }catch(err){
        console.log(err)
      }

    }
    project()
  }, [])

   console.log(projects);

  const onSearch = async (value) => {
    const sendProject = await fetch(`https://tni-server.vercel.app/projects?search=${value}`)
    const result = await sendProject.json()
    console.log(value)
    setProjects(result)
  };


  return(
    <div className='container' id="project">
      <Space direction="vertical" 
        style={{zIndex: '5',margin: '20px auto', width: '100%', position: 'sticky', top: '10px', marginBottom: '20px'}}>
        <Search
          placeholder="Search Project"
          allowClear
          enterButton="Search"
          size="large"
          className="search"
          onSearch={onSearch}
        />
    
      </Space>
      {
        projects.length < 1 && (<h3 style={{textAlign: 'center'}}>Project Not Found</h3>)
      }
      {
        projects.map((ele, index) =>(
          <>
            <Card
          key={index}
            onClick={showModal}
            size="large"
            title={<b style={{color: 'green', fontWeight: 700}}>{ele.title}</b>}
            className="project-item"
            style={{
              minWidth: '250px',
              width: 'max-content',
              maxWidth: '300px',
              height: '220px',
              position: 'relative'
            }}
        >
          <p style={{fontSize: '15px'}}>Duration</p>
          {/* <p style={{marginBottom: '10px'}}><i><CalendarOutlined /></i> {ele.starting_date} <SwapRightOutlined /> {ele.ending_date}</p> */}
          <p style={{marginBottom: '10px'}}><i><CalendarOutlined /></i> {ele.starting_date} <SwapRightOutlined /> {ele.ending_date}</p>

          <p className='line-clamp'>{ele.description}</p>
          <p style={{position: 'absolute', bottom: '0px', right: '0px', padding: '5px'}}>Posted: { dayjs(ele.createAt).fromNow()}</p>
          
            </Card>

            <Modal
        title={ele.title}
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText=""
 
      >
      
        <b>{ele.starting_date} <SwapRightOutlined /> {ele.ending_date}</b>


        <p><span style={{fontWeight: '700'}}>Description:</span> {ele.description}</p>
        <p style={{position: 'absolute', bottom: '0px', left: '0px', padding: '20px'}}>Posted: { dayjs(ele.createAt).fromNow()}</p>

      </Modal>
          </>
        ))
      }



    </div>
)};
export default ProjectCard;