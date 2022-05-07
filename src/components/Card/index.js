const Card = () => {

  return (
    <div class="card" style={{ width : '25%'}}>
      <img src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-97-masculino-921826-015-10.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
        <a href="#" class="btn btn-danger">
          Remover da lista
        </a>
      </div>
    </div>
  );
}

export default Card;