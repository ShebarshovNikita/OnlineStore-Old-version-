import React, { useContext } from 'react';
import { Context } from "../index";
import {Navbar, Nav, Button, Container} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import {observer} from 'mobx-react-lite'

const NavBar = observer( () => {
	const {user} = useContext(Context)

	return (
		<>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
					{
						user.isAuth ? 
							<Nav className="ml-auto" style={{color: 'white', margin: '0 0 0 auto'}}>
								<Button variant="outline-light">
									Админ Панель
								</Button>
								<Button variant="outline-light" style={{marginLeft: '4px'}}>
									Войти
								</Button>
							</Nav>
							:
							<Nav className="ml-auto" style={{color: 'white', margin: '0 0 0 auto'}}>
							
								<Button variant="outline-light" onClick={() => user.setIsAuth(true)}>
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