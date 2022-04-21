import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';
import { GiChickenOven, GiNoodles, GiBokChoy, GiTacos, GiSushis, GiHamburger } from 'react-icons/gi';


function Category() {
    return(
        <List>
            <NLink to="/cuisine/american">
                <GiHamburger size={30}/>
                <h4>American</h4>
            </NLink>

            <NLink to="/cuisine/chinese">
                <GiNoodles size={30}/>
                <h4>Chinese</h4>
            </NLink>

            <NLink to="/cuisine/mexican">
                <GiTacos size={30}/>
                <h4>Mexican</h4>
            </NLink>

            <NLink to="/cuisine/italian">
                <FaPizzaSlice size={30}/>
                <h4>Italian</h4>
            </NLink>

            <NLink to="/cuisine/sushi">
                <GiSushis size={30}/>
                <h4>Japanese</h4>
            </NLink>

            <NLink to="/cuisine/european">
                <GiChickenOven size={30}/>
                <h4>European</h4>
            </NLink>
        </List>
    )
}

const List =  styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    background-image: url("../img/bg-food.jpg");
`
const NLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 2rem;
    color: #3C3431;

    :hover {
        color: #705446;
    }

`
export default Category;