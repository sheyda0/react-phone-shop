
export default function DetailsImages({imageSrc, click, num}) {
    return (
      <div onClick={click}>
          <input type="radio" name="image" prefix="+" className="select_image d-none" id={`select-image-${num}`} />
          <label htmlFor={`select-image-${num}`} className="select-image__button">
            <img src={imageSrc} alt="product image"/>
          </label>
      </div>
    )
  }
