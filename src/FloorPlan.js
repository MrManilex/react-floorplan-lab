import Bath from './Bath.js'
import Bedroom from './Bedroom.js'
import Kitchen from './Kitchen.js'
import LivingRoom from './LivingRoom.js'

function FloorPlan(props) {
  return (
    <>
      <Bedroom bedNum={1}/>
      <div>
        <Kitchen />
      </div>
      <Bath size='Full'/>
      <div>
        <LivingRoom />
      </div>
      <Bedroom bedNum={2}/>
      <Bath size='Half'/>
      <Bath size='Quarter'/>
      <Bedroom bedNum={3}/>
    </>
  )
}

export default FloorPlan