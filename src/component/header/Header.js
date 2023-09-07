
const Header = () => {
  return (
    <div className="flex bg-blue-500 h-12">
        <div className="text-white text-2xl italic mt-2 ml-32 ">Flipkart</div>
        <div>
            <input className="mt-2 mx-5 w-96 h-8  pl-3" type="text" placeholder="search for products,brands and more"></input>
        </div>
        <div className="flex">
            <button className="bg-white text-blue-500 w-">Login</button>
            <a href="">Become a seller</a>
            <select name="More">
                <option value="">More</option>
                <option value="">Notification Preferences</option>
                <option value="">24x7 Customer Care</option>
                <option value="">Advertise</option>
                <option value="">Download App</option>
            </select>
            <div>Cart</div>
        </div>
    </div>
  )
}

export default Header