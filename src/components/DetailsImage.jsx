
export default function DetailsImage({imageSrc}) {
  return (
    <div className="img-container d-flex align-items-center justify-content-center m-4 mb-3 py-2 px-5">
        <img src={imageSrc} alt="" />
    </div>
  )
}
