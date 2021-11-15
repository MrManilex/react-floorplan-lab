import Oven from './Oven.js'
import Sink from './Sink.js'

function Kitchen(props){
  return(
    <>
      <h1>Kitchen</h1>
      <div>
        <Oven />
      </div>
      <div>
        <Sink />
      </div>
    </>
  )
}

export default Kitchen