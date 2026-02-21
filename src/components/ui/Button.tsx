type Props = {
    text: string
}
function Button({text}: Props) {
  return (
    <button className="bg-[#D8B192] text-white px-6 py-3 rounded-full cursor-pointer">{text}</button>
  )
}

export default Button
