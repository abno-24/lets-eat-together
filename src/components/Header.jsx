export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex flex-col justify-center items-center text-black">
        <span className="text-lg font-medium">Let's eat</span>
        <h2 className="text-xl font-bold -mt-2">Together</h2>
      </div>
      <ul className="flex gap-8">
        <li className="hover:font-medium cursor-pointer">Home</li>
        <li>About</li>
        <li>Order</li>
        <li>Contact</li>
        <li>Account</li>
      </ul>
    </header>
  )
}