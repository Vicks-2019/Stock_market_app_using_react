import React, { useState,useEffect }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StockRow } from './components/StockRow.js';
import Axios from 'axios';
import {
  Card, Col,Row, CardText, CardBody,
  CardTitle, CardColumns
} from 'reactstrap';


function App() {
    const [companyData, setCompanyData] = useState([]);
    const [companyList , setCompanyList] = useState([]);

    useEffect(() => {
        Axios.get(`https://api.coinlore.net/api/tickers/?start=0&limit=20`).then(
            (response) => {
                console.log(response);
                setCompanyData(response.data.data);
                setCompanyList(response.data.data);
            });
    }, []);
    
    return (
        <div className = "App">
              
             
            
            <div style = {{ padding : "20px"}}>
              {companyList.map((item) => 
               <CardColumns>
                  <Card style = {{maxWidth : "250px" , height : "auto",
                   backgroundColor:"red",margin:5}}>
      
                  <CardBody>
                    <CardTitle tag="h5">{item.symbol}</CardTitle>
                    
                    <CardText>
                        <p>name:{item.name}</p>
                        <p>price_btc:{item.price_btc}</p>

                    </CardText>
                    
                  </CardBody>
                  
                </Card>
               
                </CardColumns>
               )}
    </div>
    
                  

    <div className = "container">
                <form>
                    <input type = 'text' 
                    placeholder = 'Search'
                     className = 'coin-input'
                      
                    />
                      <button>Search</button>
                </form>
            </div>

            <div className = "container">
                <table className = "table mt-5">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>symbol</th>
                            <th>price_btc</th>   
                            
                        </tr>
                    </thead>
                    <tbody>
                        {companyData.map((item) => {
                            return <StockRow item={item} />
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App
