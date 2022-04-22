import Popular from '../components/Popular';
import Veggie from '../components/Veggie';

function Home() {
    return(
        <div>
            <div className="cover">
                <p>Time for </p><h1>Cooking!</h1>
            </div>
            <Popular />

            <div className="cover two">
                <p>Discover more </p><h1>Recipes</h1>
            </div>
            <Veggie />
        </div>

    )
}


export default Home;