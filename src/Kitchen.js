import Oven from './Oven.js'
import Sink from './Sink.js'

function Kitchen(props){
  return(
    <>
      <h1>Kitchen</h1>
      <div id='oven'>
        <Oven />
      </div>
      <div id='sink'>
        <Sink />
      </div>
    </>
  )
}

export default Kitchen