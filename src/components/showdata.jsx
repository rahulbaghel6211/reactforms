import './showdata.css';

import React from 'react';

export const FormData = ({ data }) => {

    return (

        <div className="main">

            <table  className="table">

                <thead class="head">

                    <tr>
                        <th class="thead" >Name</th>
                        <th class="thead">Age</th>
                        <th class="thead">Gender</th>
                        <th class="thead">Department</th>
                        <th class="thead">Role</th>
                        <th class="thead">Salry</th>
                        <th class="thead">Maratial State</th>
                        <th class="thead">Address</th>
                    </tr>

                </thead>

                <tbody className="tbody">

                    {data.map((e) =>
                        <tr className="row" >
                            <td>{e.Name}</td>
                            <td>{e.Age}</td>
                            <td>{e.Gender}</td>
                            <td>{e.Department}</td>
                            <td>{e.Role}</td>
                            <td>{e.Salry}</td>
                            <td>{e.Maritialstate}</td>
                            <td>{e.Address}</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}