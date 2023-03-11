
export default function DetailsColor({color, click, num}) {
  return (
    <div onClick={click}>
        <input type="radio" name="color" prefix="+" className="select_color d-none" id={`select-color-${num}`} />
        <label htmlFor={`select-color-${num}`} className="subscription__button">
            <div className="rounded-circle mb-1 color" style={{background:`${color}`}}></div>
            <h3 className="h6 subscription__title text-capitalize">{color}</h3>
        </label>
    </div>
  )
}
