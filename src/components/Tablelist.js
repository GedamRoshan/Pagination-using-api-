
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { Table } from 'react-bootstrap'
import '../css/Table.css'

function Tablelist() {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0)


    const getData = async () => {
        const res = await axios.get(`https://reqres.in/api/users?page=2`)
        const data = res.data.data;
        const slice = data.slice(offset, offset + perPage)
        console.log(slice);
        setData(slice)
        setPageCount(Math.ceil(data.length / perPage))
    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    useEffect(() => {
        getData()
    }, [offset])
    console.log(data)
    return (
        <div className="App">
            <h1>Pagin List with Api</h1>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Last  Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr>
                            <th>{item.id}</th>
                            <th>{item.first_name}</th>
                            <th>{item.last_name}</th>
                            <th>{item.email}</th>
                            {/* <th>{item.id}</th> */}
                        </tr>
                    ))}
                </tbody>

            </Table>

            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </div>
    );
}

export default Tablelist;
























// import React, { useState, useEffect } from 'react'
// import ReactPaginate from 'react-paginate';
// import axios from 'axios';
// import { Table } from 'react-bootstrap'


// const Tablelist = () => {
//     const [offset, setOffset] = useState(0);
//     const [data, setData] = useState([]);
//     const [parPage] = useState(5);
//     const [pageCount, setPageCount] = useState(0);

//     useEffect(() => {

//         const Newdata = async () => {
//             const res = await axios.get(`https://reqres.in/api/users?page=2`);
//             console.log(res, data)
//             const data = res.data.data
//             // setOffset(res.data.data)
//             const slice = data.slice(offset, offset + parPage)
//             const postData = slice.map(item => (
//                 <ul>
//                     <p>{item.id}</p>
//                 </ul>
//             ))

//             setData(postData);
//             setPageCount(Math.ceil(data.length / parPage))
//         }

//         Newdata();
//     },[data]);
//     console.log(data)

//     return (
//         <div>
//             <h1>Hello</h1>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name </th>
//                         <th>Full Name</th>
//                         <th>Email ID</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                    {data}
//                     {/* <tr>
//                         <th>1</th>
//                         <th>Rahul</th>
//                         <th>Sahare</th>
//                         <th>asb@gmail</th>
//                     </tr> */}
//                 </tbody>
//             </Table>
//         </div>
//     )
// }

// export default Tablelist
