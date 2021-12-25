import { Container } from "./styles"

export default function MenuHover() {
  return (
    <Container>
      <ul>
        <li data-text="Home"><a href="/menuhover">Home</a></li>
        <li data-text="About"><a href="/menuhover">About</a></li>
        <li data-text="Services"><a href="/menuhover">Services</a></li>
        <li data-text="Portfolio"><a href="/menuhover">Portfolio</a></li>
        <li data-text="Team"><a href="/menuhover">Team</a></li>
        <li data-text="Contact"><a href="/menuhover">Contact</a></li>
      </ul>
    </Container>
  )
}