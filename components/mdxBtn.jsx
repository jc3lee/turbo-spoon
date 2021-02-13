const MdxBtn = ({ text = "click" }) => {
  function handleClick() {
    console.log("clicked")
  }
  return (
    <button className="text-xl capitalize py-1 px-4 rounded-sm border active:scale-95" onClick={handleClick}>{text}</button>
  )
}

export default MdxBtn