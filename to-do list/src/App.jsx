import './App.css'
import { useState } from 'react'

function App() {

  const [list, setList] = useState('')
  const [listCom, setListCom] = useState([])
  const [messagem, setMessagem] = useState('')

  const next = () => {
    if(list.trim() === '') return

    setListCom([...listCom,{text: list, value: false}]);
    setMessagem('Tarefa adiciona com sucesso✅')
    setList('');

    setTimeout(() => {
      setMessagem('')
    }, 3000)
  };


  // check
  const handleCheck = (index) => {
    const newList = [...listCom]
    
    newList[index].value = !newList[index].value
    setListCom(newList)
  }


  // delete
  const handleDelete = (index) => {
  const newList = listCom.filter((_, i) => i !== index)
  setListCom(newList)
  }

  return (
    <div className='container'>
      <h2 className='title'>To-Do List</h2>
      <div className='container-into'>
        <input type="text" value={list} onChange={(e) => setList(e.target.value)} placeholder='digite sua tarefa' />
        <button onClick={next}>✖️</button>
      </div>

      {messagem && <p>{messagem}</p>}

      <div className="map">
        {listCom.map((tables, index) => (
          <p key={index} style={{ backgroundColor: tables.value ? '#ccc' : '#fff' }}>
            {tables.text}
            <i onClick={() => handleCheck(index)} class="fa-solid fa-circle-check check" ></i>
            <i onClick={() => handleDelete(index)} class="fa-solid fa-circle-xmark error"></i>
          </p>

        ))}
      </div>


      <p>{listCom.length}</p>


    </div>
  )
}

export default App
