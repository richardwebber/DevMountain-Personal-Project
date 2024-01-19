import React from "react"
import './Footer.css'


export default function Footer()  {
    return (
        <footer className="page-footer font-small blue pt-4 footer-style" >
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    
                    <div className="col-md-3 mt-md-0 mt-3">
                        <ul className="list-unstyled ul-link">
                            <li><a className='footer-link' href="#!">Blog</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mt-md-0 mt-3">
                        <ul className="list-unstyled ul-link">
                            <li><a className='footer-link' href="#!">Returns</a></li>
                        </ul>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" style={{color: 'black'}}/>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <ul className="list-unstyled ul-link">
                            <li><a className='footer-link' href="/qa">Q&A</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <ul className="list-unstyled ul-link">
                            <li><a className='footer-link' href="/admin">Admin</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3 copyright-div">© 2023 Copyright:
                <a className='footer-link' href="https://www.linkedin.com/in/richard-webber-b1a052276/"> RAW.HOUSECOLLECTIVE</a>
            </div>

        </footer>
    );
}
