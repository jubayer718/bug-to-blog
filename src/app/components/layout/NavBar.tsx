

const NavBar = () => {
  return (
    <nav className=" sticky top-0 border-b z-50 bg-white">
      <div  className="flex justify-between items-center gap-8">
      <div>
        <div>Icon</div>
        <div>Bug To Blog</div>
        </div>
        <div>Search</div>
      <div>
        <div>theme</div>
        <div>Notification</div>
        <div>UserMenu</div>
      </div>
     </div>
   </nav>
  );
};

export default NavBar;