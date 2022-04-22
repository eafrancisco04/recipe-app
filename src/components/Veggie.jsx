import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    //Run function when component is loaded
    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        // localstorage for storing recipes
        const check = localStorage.getItem("veggie");

        if  (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
            );

            const data = await api.json();

            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(data.recipes);
        }
    }

    return(
        <div>
            <Wrapper>
                <h2>Vegetarian</h2>
                <p>No meat? No problem.</p>


                <Splide
                    options={{
                        perPage: 4,
                        arrows: true,
                        pagination: false,
                        drag: "free",
                        gap: "5rem",
                    }}
                >
                    {veggie.map((recipe) => {
                        return(
                            <SplideSlide>
                            <Card>
                                <Link to={"/recipe/" + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                </Link>
                            </Card>
                        </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
    margin: auto;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 70vw;
    
`;

const Card = styled.div`
  height: 25rem;
  width: 80px;

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: #000;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    height: 40%;

    display: flex;
    align-items: center;
    justify-content: center;
    
  }

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    height: 90%;
    box-shadow: 5px 5px #7E5727;
    
  }
`;

export default Veggie;