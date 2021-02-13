const MdxBtn = ({ text = "click" }) => {
  function handleClick() {
    console.log("clicked")
  }
  return (
    <button className="text-xl capitalize py-1 px-4 rounded-sm border-2 border-black transform duration-75 active:scale-95 focus:outline-none" onClick={handleClick}>{text}</button>
  )
}

export default MdxBtn