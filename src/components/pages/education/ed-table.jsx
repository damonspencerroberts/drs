import React from "react";
/*1-3*/

const FinEduTable = () => 
    <div className = "ed-div">
        <table className = "ed-table">
            <thead>
                <tr>
                    <td>
                        <h3 className = "h3-educ"><a className = "jmu-a" href = "https://www.jmu.edu/">James Madison University</a></h3>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <span className ="span-major">Major: Economics</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className = "span-major">Concentration: Quantitative Economics</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

export default FinEduTable;

