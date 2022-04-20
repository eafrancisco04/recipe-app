import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';


function Category() {
    return(
        <List>
            <NavLink to="/cuisine/italian">
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>

            <NavLink to="/cuisine/american">
                <FaHamburger />
                <h4>hamburgers</h4>
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