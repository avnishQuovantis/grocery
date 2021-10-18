import React from 'react'
import "./css/catagory.css"
// import { useHistory } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';
import { useLocation ,useParams} from 'react-router';
// import { AddBasket } from './functions';
import Item from './Item';
export default function Catagory() {
    const param=useParams()
    const select=useSelector((state)=>state.home)
    const dispatch= useDispatch()
    const items=select.data.filter(obj=>{
        console.log(obj.type==param.name);
        return obj.type===param.name
    })
    
    return (
        <div className="mainContainer">
            <Item items={items}/>
        </div>
    )
}
