import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Cart } from 'react-bootstrap-icons'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Home = React.lazy(() => import('home/Home'))
const Search = React.lazy(() => import('search/Search'))
const Checkout = React.lazy(() => import('checkout/Checkout'))

const shared = require('@monorepo-nestjs-react-mfe/shared')

const HomeRoute = () => (
  <React.Suspense fallback={<div />}>
    <Home />
  </React.Suspense>
)
const SearchRoute = () => (
  <React.Suspense fallback={<div />}>
    <Search />
  </React.Suspense>
)
const CheckoutRoute = () => (
  <React.Suspense fallback={<div />}>
    <Checkout />
  </React.Suspense>
)

const Frame = ({ items = [] }) => (
  <Router>
    <Container>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/" style={{ color: 'gray', fontSize: '24px' }}>
            {shared.replaceString('Pokeshop Test', 'Test', 'Monorepo 2.0')}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" style={{ color: 'white', fontSize: '14px' }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/search" style={{ color: 'white', fontSize: '14px' }}>
                Search
              </Link>
            </Nav.Link>
          </Nav>
          <Link
            to="/checkout"
            style={{
              paddingLeft: 10,
              paddingBottom: 15
            }}
          >
            <Cart color="white" size={30} />
            <span style={{ color: 'white', fontWeight: 'bold', paddingLeft: 5, fontSize: '14px' }}>
              {items.reduce((a, { count }) => a + count, 0)}
            </span>
          </Link>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/" exact>
            <HomeRoute />
          </Route>
          <Route path="/search">
            <SearchRoute />
          </Route>
          <Route path="/checkout">
            <CheckoutRoute />
          </Route>
        </Switch>
      </Container>
    </Container>
  </Router>
)

export default connect(state => state)(Frame)
