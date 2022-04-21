import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import { SiCodechef } from 'react-icons/si';

function App() {
    return(
        <div className="App">
            <Router>
                <Nav>
                    <Logo to="/">
                        <SiCodechef size={70}/> Code Cooker
                    </Logo>
                </Nav>

                <Category />
                <Pages />
            </Router>
        </div>

    )
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
`

const Nav = styled.div`
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        padding: 1rem;
    }
`


export default App; 