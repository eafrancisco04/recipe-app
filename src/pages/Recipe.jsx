import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useSTate({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}
        /information?apiKey=${process.env.REACT_APP_API_KEY}`)
    };

    const detailData =  await data.json();
    setDetails(detailData);
    console.log(detailData);

    useEffect(() => {
        fetchDetails();
    }, [params,name]);

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
                        <h3 dangerouslySetInnerHTML={{}}></h3>
                    </div>
                )}

            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = style.dic`
    margin: 10rem 0 5rem;
    dispaly: flex;

    .active {
        background-image: linear-gradient(35deg, #494949, #333);
        color: #fff;
    }

    h2 {
        margin-bottom: 2rem;
    }

    ul {
        margin-top: 2rem;
    }
`

const Button = styled.div`
    padding: 1rem;
    color: #333;
    background-color: white;
    border: 2px solid #000;
    margin-right: 2 rem;
    font-weight: cold;
`
const Info = styled.div`
    margin: 1rem;
`

export default Recipe;