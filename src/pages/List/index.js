import { useState } from 'react';
import Card from '../../components/Card';

const List = () => {

  const [wishItem, setwishItem] = useState('');

  const [wishlist, serWishList] = useState([
    {
      id: 1,
      title: 'Tênis Nike',
    },
  ]);

  const addWhishItem = () => {
    const newwishItem = {
      id: new Date().getTime(),
      title: wishItem,
    };
    serWishList([...wishlist, newwishItem]);
  }

  return (
    <div className="container">
      <div className="col-6 offset-3 mt-5 text-center">
        <h1 className="mb-2">Lista de Desejos</h1>
        <div class="input-group mb-3 mt-2">
          <input 
            type="text"
            class="form-control"
            placeholder="Adicione um desejo"
            onChange={(e) => {
              setwishItem(e.target.value)
            }}
          />
          <button onClick={addWhishItem} 
            class="btn btn-success"
            type="button" 
            >
              Adicionar Desejo
            </button>
        </div>
      </div>
      <div className='row mt-5'>
        {wishlist?.map(item =>(
          <Card item={item}/>
        ))}
      </div>
    </div>
  );
}

export default List;