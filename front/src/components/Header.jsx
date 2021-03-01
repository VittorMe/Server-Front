import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const Header = () => {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className=" mb-4  navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand text-white  " >

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-text" viewBox="0 0 16 16">
            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
          </svg>
          <b>Restaurant Finder</b>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#!" className="nav-link " role="button" aria-expanded="false" onClick={handleShow} >Sobre</a>
              <Modal show={show} onHide={handleClose} backdrop="static"keyboard={false}>
                <Modal.Header closeButton >
                  <Modal.Title>Trabalho de Banco de Dados</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>O objetivo do trabalho foi fazer um <b>CRUD</b> com um banco de dados de restaurantes e poder dar reviews para o mesmo.</p>
                  <p>Principais ferramentas utilizadas:</p>
                  <ul>
                    <li>PostgreSQL</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
};


export default Header;