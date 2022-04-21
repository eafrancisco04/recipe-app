import Popular from '../components/Popular';
import Veggie from '../components/Veggie';
import styled from 'styled-components';

function Home() {
    return(
        <div>
            <div className="cover">
                <p>Time for </p><h1>Cooking!</h1>
            </div>
            <Popular />
            <Veggie />
        </div>

    )
}


export default Home;