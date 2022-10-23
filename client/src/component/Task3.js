import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';

export default function Task3(){

    function xorfun(){
        var a = document.getElementById('firstno').value;
        var b = document.getElementById('secondno').value;
        var c = document.getElementById('thirdno').value;
        var output = document.getElementById('output');

        if(a === '' || a === null){
            alert('enter firstno');
        }
        else if(b === '' || b === null || b <= a){
            alert('enter secondno and greater than firstno');
            document.getElementById('secondno').value = '';
        }
        else if(c === '' || c === null){
            alert('enter third no');
        }
        else{
            const a1 = a^b;
            if(a1 < c){
                output.value = a1;
                f1();
            }
            else if(a1 <= c){
                output.value = c ;
                f1();
            }
            else{
                document.getElementById('firstno').value = '';
                document.getElementById('secondno').value = '';
                document.getElementById('thirdno').value = ''; 
            }
        }

    }

    function f1(){
        var thirdno = document.getElementById('thirdno').value;
        var output = document.getElementById('output').value;
        if(output > thirdno){
            document.getElementById('firstno').value = '';
            document.getElementById('secondno').value = '';
            document.getElementById('thirdno').value = '';  
            document.getElementById('output').value = '';    
        } 
    }
    

    return(
        <>
        <div className="container" >
            <div className="row">
                <div className="col-lg-12">
                    <Menu />
                </div>
            </div>
        </div>
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-12">
                <p className="text-center"><b>Bit Logic</b></p>
                </div>
            </div>
        </div>
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-4">
                    <input type="number" name="firstno" id="firstno" className="form-control" placeholder='First no'/>
                    <input type="number" name="secondno" id="secondno" className="form-control" placeholder='Second no'/>
                    <input type="number" name="thirdno" id="thirdno" className="form-control" placeholder='Third no'/>
                    <input type="number" name="output" id="output" className="form-control" readOnly placeholder='Output'/>
                    <button type="button" name="data_submit" id="data_submit" value="submit" className="btn btn-primary mt-1"
                    onClick={xorfun}>
                        Click
                    </button>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
        </div>
        </>
    )
}
