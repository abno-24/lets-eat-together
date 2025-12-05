import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex flex-col justify-center items-center text-black ">
        <span className="text-lg font-medium">Let's eat</span>
        <h2 className="uppercase font-bold -mt-2">Together</h2>
      </div>
      <div className="flex justify-center items-center gap-8">
        <ul className="flex items-center gap-8 font-semibold">
          <li className="cursor-pointer">Home</li>
          <li>About</li>
          <li>Order</li>
          <li>Contact</li>
          <li>Account</li>
        </ul>
        <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full px-4 py-2 cursor-pointer">Login</Button>
      </div>
    </header>
  )
}

export default Header