import { useState, useEffect } from 'react';
import Card from '../../components/Card';

const List = () => {

  const [wishItem, setwishItem] = useState('');

  const [wishlist, setWishList] = useState([
    {
      id: 1,
      title: 'Tênis Nike 1',
    },
  ]);

  const addWhishItem = () => {
    const newwishItem = {
      id: new Date().getTime(),
      title: wishItem,
    };

    setWishList([...wishlist, newwishItem]);
    setwishItem('');
  };

  const removeWhishItem = (id) => {
    const removeConfirm = window.confirm(
      'Tem certeza que deseja remover esse dsejo?'
    );

    if (removeConfirm) {
      const newwishItem = wishlist?.filter((item) => item?.id !== id);
      setWishList(newwishItem)
    }
  };

  const updateTenisNike = () => {
    setWishList([
      {
        id: 1,
        title: 'Tênis Nike Atualizado',
      },
      // ...wishlist,
    ]);
  };

  // MONTAGEM
  useEffect(() => {
    setTimeout (() => {
      updateTenisNike();
    }, 1000 * 3);
  }, []);

  // SE PRECISAR CHAMAR A RE-RENDERIZAÇÃO POR QUALQUER MOTIVO
  useEffect(() => {
    console.log('O componente foi re-renderizado')
  })

  // ATUALIZAÇÃO DE STATE
  useEffect(() => {
    console.log('A Lista foi atualizada')
  }, [wishlist]);

  return (
    <div className="container">
      <div className="col-6 offset-3 mt-5 text-center">
        <h1 className="mb-2">Lista de Desejos</h1>
        <div class="input-group mb-3 mt-2">
          <input 
            type="text"
            class="form-control"
            placeholder="Adicione um desejo"
            value={wishItem}
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
          <Card item={item} onRemove={(id) =>removeWhishItem(id)}/>
        ))}
      </div>
    </div>
  );
}

export default List;