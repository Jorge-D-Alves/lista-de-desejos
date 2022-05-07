const Card = ({ item, onRemove = () => {} }) => {

  const keywords = item?.title?.split(' ')?.join(',')
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