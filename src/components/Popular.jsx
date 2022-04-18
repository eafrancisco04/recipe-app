import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
    const [popular, setPopular] = useState([]);

    //Run function when component is loaded
    useEffect(() => {
        getPopular();

    }, []);

    const getPopular = async () => {
        // localstorage for storing recipes
        const check = localStorage.getItem("popular");

        if  (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKEY=${process.env.API_KEY}&number=9`
            );

            const data = await api.json();

            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }
    }

    return(
        <div>
            <Wrapper>
                <h3>Popular Recipes</h3>

                <Splide
                    options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "5rem",
                    }}
                >
                    {popular.map((recipe) => {
                        <SplideSlide>
                            <Card>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                            </Card>
                        </SplideSlide>
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
    margin: 4rem 0;
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 25px;
    overflow: hidden;
    position: relative;

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0);
        color: #eee;
        width: 100%;
        text-align: center;
        font-weight: bold;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            border-radius: 1rem;
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

    }
`;

export default Popular;