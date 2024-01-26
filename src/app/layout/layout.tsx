import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import { Content, Header } from 'antd/es/layout/layout';
import styles from './layout.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import Main from '../main/main';
import { SIDEBAR_ITEM } from './layout.const';

export const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const openedMenu = SIDEBAR_ITEM.find((item) => item.key.toLowerCase() === pathname?.split('/')[1]?.toLowerCase());
  
  const internalOnClickLogo = () => {
    navigate('/');
  };

  return (
    <Layout style={{ minHeight: '100vh' }} className={styles['app-layout']}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ padding: '0px 8px' }}>
        <div className={styles['sider-logo']} onClick={internalOnClickLogo}>LOGO</div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={[openedMenu?.key ?? '']}
          onClick={(e) => {
            navigate(e.key);            
          }}
          items={SIDEBAR_ITEM}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64
            }}
          />
        </Header>
        <Breadcrumb
          style={{
            padding: '24px 24px 0',
          }}
          items={[
            {
              title: openedMenu?.label
            }
          ]}
        />
        <Content style={{
          margin: '24px 16px',
          padding: 24,
          background: colorBgContainer,
          borderRadius: borderRadiusLG
        }}>
          <Main />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
