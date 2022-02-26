import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faComment, faQuestion, faCog, faLock, faSignOut } from '@fortawesome/free-solid-svg-icons';

import { Container, WrapperElement } from './styles';

function NavigationDrawer() {
  const [navigation, setNavigation] = useState();

  useEffect(() => {
    setNavigation(document.querySelector('.navigation'));
  }, [navigation])

  function handleOpen(e) {
    e.currentTarget.classList.toggle('active');
    navigation.classList.toggle('active');
  }

  return (
    <Container>
      <div className="container">
        <div className="navigation">
          <ul>
            <WrapperElement>
              <div>
                <a href="#a">
                  <span className="icon"><FontAwesomeIcon icon={faHome} /></span>
                  <span className="title">Home</span>
                </a>
                <div className="content">
                  <h2>Lorem ipsum silor dolor amet</h2>
                  <p>Opa carai Opa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa carai</p>
                </div>
              </div>
            </WrapperElement>
            <WrapperElement>
              <div>
                <a href="#a">
                  <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
                  <span className="title">Profile</span>
                </a>
                <div className="content">
                  <h2>Lorem ipsum silor dolor amet</h2>
                  <p>Opa carai Opa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa carai</p>
                </div>
              </div>
            </WrapperElement>
            <WrapperElement>
              <div>
                <a href="#a">
                  <span className="icon"><FontAwesomeIcon icon={faComment} /></span>
                  <span className="title">Message</span>
                </a>
                <div className="content">
                  <h2>Lorem ipsum silor dolor amet</h2>
                  <p>Opa carai Opa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa carai</p>
                </div>
              </div>
            </WrapperElement>
            <WrapperElement>
              <div>
                <a href="#a">
                  <span className="icon"><FontAwesomeIcon icon={faQuestion} /></span>
                  <span className="title">Help</span>
                </a>
                <div className="content">
                  <h2>Lorem ipsum silor dolor amet</h2>
                  <p>Opa carai Opa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa carai</p>
                </div>
              </div>
            </WrapperElement>
            <WrapperElement>
              <div>
                <a href="#a">
                  <span className="icon"><FontAwesomeIcon icon={faCog} /></span>
                  <span className="title">Setting</span>
                </a>
                <div className="content">
                  <h2>Lorem ipsum silor dolor amet</h2>
                  <p>Opa carai Opa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa carai</p>
                </div>
              </div>
            </WrapperElement>
            <WrapperElement>
              <div>
                <a href="#a">
                  <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
                  <span className="title">Password</span>
                </a>
                <div className="content">
                  <h2>Lorem ipsum silor dolor amet</h2>
                  <p>Opa carai Opa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa carai</p>
                </div>
              </div>
            </WrapperElement>
            <WrapperElement>
              <div>
                <a href="#a">
                  <span className="icon"><FontAwesomeIcon icon={faSignOut} /></span>
                  <span className="title">Sign Out</span>
                </a>
                <div className="content">
                  <h2>Lorem ipsum silor dolor amet</h2>
                  <p>Opa carai Opa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa caraiOpa carai</p>
                </div>
              </div>
            </WrapperElement>
          </ul>
        </div>
        <div className="toggle" onClick={handleOpen}></div>
      </div>

    </Container>
  );
}

export default NavigationDrawer;