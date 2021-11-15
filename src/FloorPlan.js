import Bath from './Bath.js'
import Bedroom from './Bedroom.js'
import Kitchen from './Kitchen.js'
import LivingRoom from './LivingRoom.js'

function FloorPlan(props) {
  return (
    <>
      <main>
        <Bedroom bedNum={1}/>
        <div id='kitchen'>
          <Kitchen />
        </div>
        <Bath size='Full'/>
        <div id='living-room'>
          <LivingRoom />
        </div>
        <Bedroom bedNum={2}/>
        <Bath size='Half'/>
        <Bedroom bedNum={3}/>
      </main>
    </>
  )
}

export default FloorPlan