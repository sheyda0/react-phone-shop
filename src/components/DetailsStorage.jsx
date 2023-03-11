
export default function DetailsStorage({storage, num}) {
    return (
      <div>
          <input type="radio" prefix="+" name="storage" className="select_storage d-none" id={`select-storage-${num}`} />
          <label htmlFor={`select-storage-${num}`} className="subscription__button storage d-flex justify-content-center ">
              <h3 className="h6 text-capitalize storage-title">{storage}</h3>
          </label>
      </div>
    )
  }
  