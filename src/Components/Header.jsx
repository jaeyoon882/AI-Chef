import chefIcon from "../Images/chef-icon.png"

export default function Header() {
  return (
    <header className="headerbar">
      <nav>
        <img src={chefIcon} alt="chef icon" />
        <h1>AI Chef</h1>
      </nav>
    </header>
  )
}