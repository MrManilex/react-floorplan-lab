import Baths from './Baths.js'
import Bedroom from './Bedroom.js'
import Kitchen from './Kitchen.js'
import LivingRoom from './LivingRoom.js'



function FloorPlan(props) {
  return (
    <>
      <div>
        <Kitchen />
      </div>
      <div>
        <LivingRoom />
      </div>
      <Baths />
      <Bedroom bedNum={1}/>
      <Bedroom bedNum={2}/>
      <Bedroom bedNum={3}/>
    </>
  )
}

export default FloorPlan