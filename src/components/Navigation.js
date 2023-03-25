const Navigation = (props) => {
  const { mode, textcolor, btntext, toggleMode } = props;
  return (
    <div
      className={`bg-${mode}-600 text-${textcolor} flex justify-between items-center h-14 w-full px-4 shadow-lg`}
    >
      <nav className="flex justify-between items-center w-full">
        <div className="flex justify-between items-center">
          <div className="text-xl px-4">MyProject</div>
          <ul className="flex justify-between items-center">
            <li className="px-4">
              <a href="#">Home</a>
            </li>
            <li className="px-4">
              <a href="#">Contact</a>
            </li>
            <li className="px-4">
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="">
          <label>
            <input onClick={toggleMode} type="checkbox" className="rounded" />{" "}
            <span>{btntext}</span>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
