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
            <div>
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
                            <div>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                            </div>
                        </SplideSlide>
                    })}
                </Splide>
            </div>
        </div>
    );
}

export default Popular;