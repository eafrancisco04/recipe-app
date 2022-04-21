import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';
import { GiCupcake, GiNoodles, GiBokChoy, GiTacos, GiButterToast, GiKnifeFork } from 'react-icons/gi';


function Category() {
    return(
        <List>
            <NavLink to="/cuisine/dessert">
                <GiCupcake />
                <h4>Dessert</h4>
            </NavLink>

            <NavLink to="/cuisine/asian">
                <GiNoodles />
                <h4>East Asian</h4>
            </NavLink>

            <NavLink to="/cuisine/mexican">
                <GiTacos />
                <h4>Mexican</h4>
            </NavLink>

            <NavLink to="/cuisine/italian">
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>

            <NavLink to="/cuisine/vegetarian">
                <GiBokChoy />
                <h4>Vegetarian</h4>
            </NavLink>

            <NavLink to="/cuisine/breakfast">
                <GiButterToast />
                <h4>Breakfast</h4>
            </NavLink>
        </List>
    )
}

const List =  styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`

export default Category;