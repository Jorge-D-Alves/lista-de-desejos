import Card from '../../components/Card';

const List = () => {
  return (
    <div className="container">
      <div className="col-6 offset-3 mt-5 text-center">
        <h1 className="mb-2">Lista de Desejos</h1>
        <div class="input-group mb-3 mt-2">
          <input 
            type="text"
            class="form-control"
            placeholder="Adicione um desejo"
          />
          <button 
            class="btn btn-success"
            type="button" 
            >
              Adicionar Desejo
            </button>
        </div>
      </div>
      <div className='row mt-5'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />


      </div>
    </div>
  );
}

export default List;