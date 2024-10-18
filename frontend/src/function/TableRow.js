import UserSelect from "./UserSelect";
import {useState} from "react";

function TableRow({item, counter}) {

    const [user, setUser] = useState();

    return (
        <tr key={item.id}>
            <td>{counter}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.warranty}</td>
            {/*<td>*/}
            {/*    <UserSelect onSelect={setUser}/>*/}

            {/*</td>*/}
            {/*<td>*/}
            {/*    <button onClick={deleteItem(cnt)}>передать {user}</button>*/}
            {/*</td>*/}
        </tr>
    )
}

export default TableRow;