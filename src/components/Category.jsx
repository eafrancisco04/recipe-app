import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';
import { GiCupcake, GiNoodles, GiBokChoy, GiTacos, GiButterToast, GiKnifeFork } from 'react-icons/gi';


function Category() {
    return(
        <List>
            <NLink to="/cuisine/dessert">
                <GiCupcake size={30}/>
                <h4>Dessert</h4>
            </NLink>

            <NLink to="/cuisine/asian">
                <GiNoodles size={30}/>
                <h4>East Asian</h4>
            </NLink>

            <NLink to="/cuisine/mexican">
                <GiTacos size={30}/>
                <h4>Mexican</h4>
            </NLink>

            <NLink to="/cuisine/italian">
                <FaPizzaSlice size={30}/>
                <h4>Italian</h4>
            </NLink>

            <NLink to="/cuisine/vegetarian">
                <GiBokChoy size={30}/>
                <h4>Vegetarian</h4>
            </NLink>

            <NLink to="/cuisine/breakfast">
                <GiButterToast size={30}/>
                <h4>Breakfast</h4>
            </NLink>
        </List>
    )
}

const List =  styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
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