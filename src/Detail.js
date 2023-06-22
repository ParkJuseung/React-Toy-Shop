import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {Nav} from "react-bootstrap"


function Detail(props) {
    let {id} = useParams();
    let [alert, setalert]= useState(true);
    let [tab, settab] = useState(0);

  
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

      <Nav justify variant="tabs" defaultActiveKey="/link-0">
      <Nav.Item>
        <Nav.Link eventKey="/link-0" onClick={() => settab(0)}>버튼 0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={() => settab(1)}>버튼 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" onClick={() => settab(2)}>버튼 2</Nav.Link>
      </Nav.Item>
    </Nav>
    <Viewtab tab = {tab}/>
    </div> 
    )
  }
function Viewtab(props){
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]
}
  export default Detail;