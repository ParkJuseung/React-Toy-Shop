import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Detail(props) {
    let {id} = useParams();
    let [alert, setalert]= useState(true);
  
    useEffect(() => {
      setTimeout(() => {setalert(false)}, 2000);
    },[])

    
    return (
      <div className="container">
        {
          alert == true 
          ? <div className="alert alert-warning">
          2초 이내 구매시 할인
        </div>
          : null
        }
      <div className="row">
        <div className="col-md-6">
          <img src={props.shoes[id].img} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
    )
  }

  export default Detail;