import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

function Dashboard({user}) {

    const welcome = `Welcome ${user.name}`
    return (
        <div>
        <Sidebar.Pushable as={Segment} style={{minHeight: '100vh'}}>
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
                <Icon name='user' />
                    Users
                </Menu.Item>
                <Menu.Item as='a'>
                <Icon name='book' />
                    Trainings
                </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
                <Segment basic>
                    <Header as='h3'>Admin Dash</Header>
                    <Image src='/images/wireframe/paragraph.png' />
                    {welcome}
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
    )
}

export default Dashboard;