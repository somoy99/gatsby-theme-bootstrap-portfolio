import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "gatsby";
import BrLogo from "../../assets/br_icon.svg";
const layout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                    collapseOnSelect
                    expand="lg"
                    fixed="top"
                    role="navigation">
                    <Navbar.Brand>
                        <Link
                            style={{
                                boxShadow: `none`,
                                textDecoration: "none",
                                color: "gray",
                            }}
                            to="/"
                        >
                            <BrLogo
                                width="46"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="ml-auto"
                            style={{ color: "#273C75", fontFamily: "roboto", fontSize: "24px" }}
                        >
                            <Nav.Link>
                                <Link
                                    style={{
                                        boxShadow: `none`,
                                        textDecoration: "none",
                                        color: "gray",
                                    }}
                                    to="work"
                                >
                                    Work
            </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link
                                    style={{
                                        boxShadow: `none`,
                                        textDecoration: "none",
                                        color: "gray",
                                    }}
                                    to="blog"
                                >
                                    Blog
            </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <main>{children}</main>
            <footer className="text-center" style={{ padding: "14px" }}>
                © {new Date().getFullYear()}, Md. Tahmid Shahriar Khan. All rights reserved.
            </footer>
        </>
    )
}

export default layout
