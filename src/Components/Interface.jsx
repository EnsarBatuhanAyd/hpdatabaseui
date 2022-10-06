import "./Interface.css";
import { useState, useEffect } from "react";
import logo from "./../img/logo.png";
function Interface() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
   fetch(`https://noveria-software-website.herokuapp.com/api/v1/forms`)
   .then((response) => response.json())
   .then((actualData) => {
    setData(actualData);
    setError(null);
  })
  .catch((err) => {
    setError(err.message);
    setData(null);
  })
  .finally(() => {
    setLoading(false);
  });
  }, []);
  
  return (
    <div className="App">
      <div className="App-Content">
        <div className="App-Content-Top">
          <div className="top-bar">
            <div className="logo-area">
              <img src={logo}></img>
            </div>
            <div className="search-area">
              <input className="search-box"></input>
            </div>
            <div className="profile-area">
              {" "}
              <div className="profile-box">Welcome User</div>
              <div className="pimg-box">P</div>
            </div>
          </div>
        </div>
        <div className="App-Content-Bottom">
          <div className="data-area">
            <div className="headers-area">
              <ul className="table-titles">
                <li>ID</li>
                <li>E-Mail</li>
                <li>Number</li>
                <li>Name</li>
                <li>Demo Code</li>
                <li>Time</li>
                {/* <li>Edit/Delete</li> */}
              </ul>
            </div>
            <hr className="line"></hr>
            <div className="datas-area">
            {data &&
          data.map(({ id, _id, clientMail ,clientFullName,clientTelephoneNumber, clientDemoCode, clientTime }) => (
            
            
            
            <ul key={id} className="table-datas">
                <li className="idclass">{_id}</li>
                <li>{clientMail}</li>
                <li>{clientTelephoneNumber}</li>
                <li>{clientFullName}</li>
                <li>{clientDemoCode}</li>
                <li>{clientTime}  </li>
                {/* <li>Edit/Delete</li> */}
              </ul>
             
          ))}
           
          

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interface;
