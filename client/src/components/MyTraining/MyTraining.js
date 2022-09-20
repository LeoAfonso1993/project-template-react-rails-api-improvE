function MyTraining({user}) {

    const welcome = `Welcome ${user.name}`
    return(
        <>
            <h1>My Trainings</h1>
            {welcome}
        </>
    )
    
}

export default MyTraining;