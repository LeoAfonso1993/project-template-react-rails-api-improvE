import { useContext } from 'react';
import { UserContext} from '../../../contexts/UserContext'

function MyTraining() {
    const {user} = useContext(UserContext);

    const welcome = user == null ? `User disconected`:`Welcome ${user.name}`

    return(
        <>
            <h1>My Trainings</h1>
            {welcome}
        </>
    )
    
}

export default MyTraining;