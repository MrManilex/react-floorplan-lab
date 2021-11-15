function Bedroom(props) {
  return(
    <div id={`bed-${props.bedNum}`}>
      <h1>Bedroom {props.bedNum}</h1>
    </div>
  )
}

export default Bedroom