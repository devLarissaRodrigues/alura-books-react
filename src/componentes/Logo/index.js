import './estilo.css'
import logo from '../../imagens/logo.svg'
//Componentes são funções que retornam um HTML
function Logo(){
  return (
    <div className='logo'>
      <img src={logo} alt='Logo' className='logo__img'></img>
      <p><strong>Alura</strong>Books</p>
    </div>
  )
 }

 export default Logo;