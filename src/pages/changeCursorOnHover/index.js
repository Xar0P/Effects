import { useRef, useEffect } from 'react';

import { Container } from "./styles";

export default function ChangeCursorOnHover() {
  const cursorElement = useRef();

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      cursorElement.current.style.cssText = `left: ${e.pageX}px; top: ${e.pageY}px;`
    })
  },[])

  return (
    <Container>
      <ul>
        <li><a href="/changecursoronhover">Home</a></li>
        <li><a href="/changecursoronhover">About</a></li>
        <li><a href="/changecursoronhover">Portfolio</a></li>
        <li><a href="/changecursoronhover">Team</a></li>
        <li><a href="/changecursoronhover">Contact</a></li>
        <div className="cursor" ref={cursorElement}></div>
      </ul>
    </Container>
  )
}