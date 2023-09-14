import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(){
    return(
        <>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="header fixed-top" data-scrollto-offset="0" style={{ background: '#ffffff' }}>
                {/* <div style={{ display: 'flex', alignItems: 'center' ,backgroundColor:'#ffffff'}}>
                    <img src={process.env.PUBLIC_URL + '/Images/IIT_logo.png'} alt="First Image" style={{ marginTop:'10px', width: '4%', animation: 'pulse 2s infinite',marginLeft:'50px'}}  />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ margin: '10px 20px 0 20px', fontSize: '18px',color:'#737373',fontWeight:'bold' }}>IIT Jodhpur</span>
                        {/* <span style={{ margin: '0 20px', fontSize: '15px' ,color:'#543359',fontWeight:'bold'}}>INDIAN INSTITUTE OF TECHNOLOGY JODHPUR</span> */}
                    {/* </div> */}
                    {/* <img src={process.env.PUBLIC_URL + '/Images/chem_logo.png'} style={{ width: '10%', animation: 'pulse 2s infinite' }} /> */}
                {/* </div>} */}
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link aria-current="page" to="/"><span style={{ fontWeight: 'bold' }}>Home</span></Link></li>
                            <li className="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Faculty & Staff<i className="bi bi-chevron-down dropdown-indicator"></i></span></Link>
                                <ul>
                                    <li class="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Faculty & Advisors</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                                        <ul>
                                        <li><Link aria-current="page" to="/regularFaculty">Regular Faculty</Link></li>
                                        <li><Link aria-current="page" to="/scholarsResidence">Scholars-in-Residence</Link></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Staff</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                                        <ul>
                                        <li><Link aria-current="page" to="/technicalStaff">Technical Staff</Link></li>
                                        <li><Link aria-current="page" to="/adminStaff">Administrative Staff</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Academics<i className="bi bi-chevron-down dropdown-indicator"></i></span></Link>
                                <ul>
                                    <li class="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>UnderGraduate</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                                        <ul>
                                        <li><Link aria-current="page" to="/ugAcads">UnderGraduate Program</Link></li>
                                        <li><Link aria-current="page" to="/ugPlacement">Placements for UG Students</Link></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>PostGraduate</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                                        <ul>
                                        <li><Link aria-current="page" to="/pgAcads">PostGraduate Programs</Link></li>
                                        <li><Link aria-current="page" to="/pgPlacement">Placements for PG Students</Link></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Doctoral</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                                        <ul>
                                        <li><Link aria-current="page" to="/doctoralAcads">Doctoral Programs</Link></li>
                                        <li><Link aria-current="page" to="/phDPlacement">Placements for PhD Students</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Research<i className="bi bi-chevron-down dropdown-indicator"></i></span></Link>
                                <ul>
                                    <li><Link aria-current="page" to="/researchArea">Research Areas & Labs</Link></li>
                                    <li class="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Projects</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                                        <ul>
                                        <li><Link aria-current="page" to="/currProjects">Ongoing Projects</Link></li>
                                        <li><Link aria-current="page" to="/completedProjects">Completed Projects</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link aria-current="page" to="https://iitj.irins.org/faculty/index/Department+of+Chemical+Engineering" target="_blank" rel="noopener noreferrer">Publications</Link></li>
                                    <li><Link aria-current="page" to="/sponsorsColabs">Sponsors & Collaborators</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>News & Events<i className="bi bi-chevron-down dropdown-indicator"></i></span></Link>
                                <ul>
                                    <li><Link aria-current="page" to="/webinars">Webinars</Link></li>
                                    <li><Link aria-current="page" to="/newsLetter">News & Newsletter</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Resources<i className="bi bi-chevron-down dropdown-indicator"></i></span></Link>
                                <ul>
                                    <li><Link aria-current="page" to="/infoComp">Info for Companies</Link></li>
                                    <li><Link aria-current="page" to="/corpBrochure">Corporate Relations</Link></li>
                                    <li><Link aria-current="page" to="/donate">Donate</Link></li>
                                </ul>
                            </li>
                            <li><Link aria-current="page" to="/contact"><span style={{ fontWeight: 'bold' }}>Contact</span></Link></li>
                            <li><Link aria-current="page" to="/faq"><span style={{ fontWeight: 'bold' }}>FAQ</span></Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle d-none"></i>
                    </nav>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </header>
        </>
    )
}
