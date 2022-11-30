import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole(props) {

  function isVisible({here}){
    console.log()
  }


  return (
    <div className="den">
      <img src={MoleIcon} className="Mole" alt="Mole" />
    </div>
  )
}

export default Mole
