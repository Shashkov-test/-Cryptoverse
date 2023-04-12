import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, FundOutlined, MenuOutlined, BulbOutlined } from '@ant-design/icons';
import icon from '../images/icon.png';


const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize)

        handleResize();

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if(screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize])

  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size='large' />
            <Typography.Title level={2} className='logo'>
                <Link to='/'>
                    Cryptoverse
                </Link>
            </Typography.Title>
            <Button onClick={() => setActiveMenu(!activeMenu)} className='menu-control-container'>
                <MenuOutlined />
            </Button>
        </div>
            {activeMenu && (
                <Menu theme='dark'>
                    <Menu.Item key='01' icon={<HomeOutlined />}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>

                    <Menu.Item key='02' icon={<FundOutlined />}>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>

                    <Menu.Item key='03' icon={<BulbOutlined />}>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                </Menu>
            )}
    </div>
  )
}

export default Navbar