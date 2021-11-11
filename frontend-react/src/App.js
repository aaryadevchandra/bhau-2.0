import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const axios = require('axios');

const App = () => {

    const sendRoast = async (formElements) => {
        
        //getting the value from the input tag
        var roast = formElements.value;
        console.log('client side: ' + roast);
        
        axios.post('http://localhost:8080/givemedata', {
            Roast: roast
        }).then((response) => {
            console.log(response.status);
        })
        .catch((error) => {
            console.log(error);
        })
    }


    return (
        <div className="content">
            <div className="container">
            <div className="row">
                <div className="col">
                    <h2 style={{fontSize:'150px'}}>B#@U</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6" > 
                {/* style={{border: '1px solid red'}} */}
                <form id="roast-input-form">
                    <div className="form-group">
                        <label for="cuss-word-input" style={{margin: '5px', fontSize: '20px'}}>Think of the worst possible thing you could say to somebody</label>
                        
                        <input type="text" className="form-control shadow-none" id="cuss-word-input" placeholder="Enter your roast" style={{margin: '5px'}}/>  
                    </div>
                </form>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-5">
                    <button type="submit" className="btn btnhovered shadow-none" style={{margin: '20px', fontSize: '40px'}} onClick={async () => sendRoast(document.getElementById('cuss-word-input'))}>Submit</button>
                </div>
            </div>

            </div>
        </div>
    )
}

export default App;