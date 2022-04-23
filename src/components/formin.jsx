import './formin.css';

import React from 'react';

export const Forminput = ({ handleChange, handleSubmit, data }) => {

    return (

        <div >

            <h1>Fill the Form</h1>

            <form className="form" onSubmit={handleSubmit}>

                <input onChange={handleChange} type="text" id='Name' placeholder='Name' />

                <input onChange={handleChange} type="number" id='Age' placeholder='Age' />

                <div>
                    Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
                    <div>
                        Male
                        <input
                            onChange={handleChange}
                            id="Gender"
                            className="male"
                            type="radio"
                            value={"male"}

                        />{" "}
                        Female{" "}
                        <input
                            onChange={handleChange}
                            id="Gender"
                            className="female"
                            type="radio"
                            value={"female"}

                        />
                    </div>
                </div>


                <div>
                    <select
                        onChange={handleChange}
                        value={data.preferred_branch}
                        id="Department"
                        className="Department"
                    >
                        <option value="">---Department---</option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="Front-End">Front-End</option>
                        <option value="Back-end">Back-end</option>

                    </select>
                </div>

                <input onChange={handleChange} type="text" id='Role' placeholder='Role' />

                <input onChange={handleChange} type="number" id='Salry' placeholder='Salary' />

                <input onChange={handleChange} type="text" id='Maritialstate' placeholder='Maritial State' />

                
                <input onChange={handleChange} type="text" id='Address' placeholder='Address' />
                <input className="btn1" type="submit" />

            </form>
        </div>
    )
}