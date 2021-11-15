function Bath(props) {
  return(
    <>
    <div id={`bath-${props.size.toLowerCase()}`}>
      <h1>{props.size} Bath</h1>
    </div>
    </>
  )
}

export default Bath