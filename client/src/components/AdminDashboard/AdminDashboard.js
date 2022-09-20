import SideBar from "../SideBar/SideBar"

function Dashboard({user}) {

    const welcome = `Welcome ${user.name}`
    return (
        <>
            <h1>Admin Dash</h1>
            {welcome}
        </>
    )
}

export default Dashboard;