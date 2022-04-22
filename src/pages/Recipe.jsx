import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)

        const detailData =  await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

    useEffect(() => {
        fetchDetails();
    },
    // eslint-disable-next-line 
    [params.name, ]);

    return(
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>

            <Info>
                <Button 
                    className={activeTab === "instructions" ? "active" : "" }
                    onClick={() => setActiveTab("instructions")}
                    >
                    
                    Instructions</Button>

                <Button
                    className={activeTab === "ingredients" ? "active" : "" }
                    onClick={() => setActiveTab("ingredients")}
                >
                    Ingredients</Button>
                
                {activeTab === "instructions" && (
                    <div>
                        <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                    </div>
                )}

                {activeTab === "ingredients" && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>

                        ))}
                    </ul>
                )}

            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    margin: auto;
    width: 100%;
    padding: 5em;
    display: flex;
    justify-content: center;
    align-content: center;

    div {
        width: 80%;
    }

    .active {
        background-image: linear-gradient(35deg, #494949, #333);
        color: #F4EBE8;
    }

    h2 {
        margin-bottom: 2rem;
    }

    ul {
        margin-top: 2rem;
    }

    li {
        font-size: 1.25rem;
        line-height: 2;
    }
`

const Button = styled.button`
    padding: 1rem;
    color: #333;
    background-color: transparent;
    border: 3px solid #000;
    margin-right: 2 rem;
    font-weight: bold;
`
const Info = styled.div`
    margin: 1rem;
    padding: 2rem;
`

export default Recipe;