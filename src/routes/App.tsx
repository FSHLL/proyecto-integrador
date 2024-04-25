import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Outlet } from "react-router-dom";

export const App = () => {

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          Header
        </Header>
        <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Made with ❤ by CodeCraft Team
        </Footer>
      </Layout>
    </>
  )
}

export default App
