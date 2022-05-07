const Card = ({ item }) => {

  const keywords = item?.title?.split(' ')?.join(',')
  return (
    <div class="card" style={{ width : '25%', padding: 0}}>
      <img src={`https://loremflickr.com/320/240/${keywords}`}
      />
      <div class="card-body">
        <h5 class="card-title">{item?.title}</h5>
        
        <a href="#" class="btn btn-danger">
          Remover da lista
        </a>
      </div>
    </div>
  );
}

export default Card;