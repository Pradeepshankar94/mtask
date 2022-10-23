import {Link} from 'react-router-dom';

export default function Menu(){
    return(
        <>
        <div className="table-responsive">
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td><Link to="/Task1">Task1 - Kanban Borad API</Link></td>
                        <td><Link to="/Task2">Task2 - Auto Correction APP</Link></td>
                        <td><Link to="/Task3">Task3 - Bit Logic</Link></td>
                        <td><Link to="/Task4">Task4 - Movie title</Link></td>
                        <td><Link to="/Task5">Task5 - Inventory List</Link></td>
                        <td><Link to="/Task6">Task6 - Positioning</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}