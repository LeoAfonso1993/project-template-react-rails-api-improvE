import { useContext } from 'react';
import { UserContext} from '../../../contexts/UserContext'

function MyTraining() {
    const {user} = useContext(UserContext);

    const welcome = user == null ? `User disconected`:`Welcome ${user.name}`
    const userId = user == null ? `User disconected` : `${user.id}`

    return(
        <>
            <h1>My Trainings</h1>
            {welcome}
            {userId}
        </>
    )
    
}

export default MyTraining;