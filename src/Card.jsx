//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import style from './index.module.css'
function Card({mensaje}) {

  return (
    <div>
      <h2 className={style.titulo}>{mensaje}</h2>
      
    </div>
  );
}

export default Card;
