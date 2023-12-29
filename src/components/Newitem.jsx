import image from '../assets/download.jpeg'
const Newitem=({title,description,src,url})=>
{
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-5 mx-5 px-3 py-3" style={{maxWidth:"345px"}}>
    <img src={src?src:image}  style={{height:"200px",width:"320px"}}className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):"News current event.It is information about something that has just happened"}</p>
      <a href={url} className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default Newitem