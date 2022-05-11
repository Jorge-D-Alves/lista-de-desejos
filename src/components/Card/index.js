import { useEffect } from 'react';

const Card = ({ item, onRemove = () => {} }) => {

  const keywords = item?.title?.split(' ')?.join(',')

  // Código que será executado apenas quando o componente estiver montado
  // MONTAGEM
  useEffect(() => {
    console.log(`${item?.title} foi montado`);

    // DESMONTAGEM
    return () => {
      console.log(`${item?.title} foi DESMONTADO`);
    };
  }, []);


  // Código que será executado apenas quando algum dos ítens de array for atualiuzado
  // ATUALIZAÇÃO DE PROPS
  useEffect(() => {
    console.log(`${item?.title} foi atualizado`);
  }, [item?.title, item?.id])

  return (
    <div id={item?.id} class="card" style={{ width : '25%', padding: 0}}>
      <img src={`https://loremflickr.com/320/240/${keywords}`}
      />
      <div class="card-body">
        <h5 class="card-title">{item?.title}</h5>
        
        <button onClick={() => onRemove(item?.id)} class="btn btn-danger">
          Remover da lista
        </button>
      </div>
    </div>
  );
}

export default Card;