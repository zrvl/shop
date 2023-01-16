import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductInput from '../components/UI/productInput/ProductInput'
import styleInput from '../components/UI/productInput/ProductInput.module.css'
import SaveEditType from '../components/types/SaveEditType'
import { useEffect } from 'react'
import axios from 'axios'

const TypePage = () => {
  const {id} = useParams();
  const [type,setType] = useState({})
  const [editName, setEditName] = useState('')
  const [emptyType, setEmptyType] = useState(false);

  const getType = async () => {
    const resp = await axios.get(`http://127.0.0.1:5000/api/type/${id}`)
    setType(resp.data)
  }

  useEffect(()=>{
    getType()
    setEditName('')
  },[])

  return (
    <>
    {
      emptyType ?
      <div>Введите значение</div>
      :
      <>
        <ProductInput className={styleInput.product__input} onChange={(e) => setEditName(e.target.value)} />
        <SaveEditType newName={editName} oldName={type.name} empty={setEmptyType} />
      </>
      }
    </>
  )
}

export default TypePage