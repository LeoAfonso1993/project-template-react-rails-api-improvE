import React from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

function AdminSidebar() {
    return(
        <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          vertical
          visible
          width='thin'
        >
          <Menu.Item as='a'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='camera' />
            Channels
          </Menu.Item>
        </Sidebar>
    
      </Sidebar.Pushable>
    )
}



export default AdminSidebar;