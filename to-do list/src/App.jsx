import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [list, setList] = useState('')
  const [listCom, setListCom] = useState([])
  const [messagem, setMessagem] = useState('')

  const [task, setTask] = useState(0)

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
    const wasCompleted = newList[index].value
    newList[index].value = !newList[index].value

    if(!wasCompleted){
      setTask((prev) => prev + 1)
    }else {
      setTask((prev) => prev - 1)
    }

    setListCom(newList)
    setMessagem('Mensagem concluida ✅')

    setTimeout(() => {
      setMessagem('')
    }, 2000)
  }


  // delete
  const handleDelete = (index) => {
  const completed = listCom[index].value

  const newList = listCom.filter((_, i) => i !== index)
  setListCom(newList)

  if(completed === true) {
    setTask((prev) => prev - 1)
  }

  setMessagem('messagem deletada com sucesso ❌')

  setTimeout(() => {
    setMessagem('')
  }, 2000)
  }

  return (
    <div className='container'>
      <h2 className='title'>To-Do List</h2>
      <div className='container-into'>
        <input type="text" value={list} onChange={(e) => setList(e.target.value)} placeholder='digite sua tarefa' />
        <button onClick={next}>✖️</button>
      </div>

      {messagem && <p className='message'>{messagem}</p>}

      <div className="map">
        {listCom.map((tables, index) => (
          <p key={index} style={{ backgroundColor: tables.value ? '#818181' : '#fff' }}>
            {tables.text}
            <i onClick={() => handleCheck(index)} class="fa-solid fa-circle-check check" ></i>
            <i onClick={() => handleDelete(index)} class="fa-solid fa-circle-xmark error"></i>
          </p>

        ))}
      </div>
      
      <div className="result">
      <p>Total: {listCom.length}</p>
      <p>Realizadas: {task}</p>
      </div>  

    </div>
  )
}

export default App
