import React, { useContext } from 'react';
import { Context } from "../index";
import {Navbar, Nav, Button, Container} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {observer} from 'mobx-react-lite'
import { useNavigate } from "react-router-dom";

const NavBar = observer( () => {
	const {user} = useContext(Context)
	const navigate = useNavigate()

	const logOut = () => {
		user.setUser({})
		user.setIsAuth(false)
	}

	return (
		<>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
					{
						user.isAuth ? 
							<Nav className="ml-auto" style={{color: 'white', margin: '0 0 0 auto'}}>
								<Button variant="outline-light" onClick={() => navigate(ADMIN_ROUTE)}>
									Админ Панель
								</Button>
								<Button variant="outline-light" onClick={() => logOut()} style={{marginLeft: '4px'}}>
									Выйти
								</Button>
							</Nav>
							:
							<Nav className="ml-auto" style={{color: 'white', margin: '0 0 0 auto'}}>
							
								<Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>
									Авторизация
								</Button>
							</Nav>
					}
				</Container>
				
				
			</Navbar>
		</>
		
	);
});

export default NavBar;