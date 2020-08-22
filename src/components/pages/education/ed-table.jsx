import React from "react";
import { EdDiv, EdTable } from "../../styled-components/pages/educ/educ-table";    
import {H3Educ, SpanMajor, JmuA} from "../../styled-components/pages/educ/educ-jmu";


const FinEduTable = () => 
    <EdDiv>
        <EdTable>
            <thead>
                <tr>
                    <td>
                        <H3Educ><JmuA href = "https://www.jmu.edu/">James Madison University</JmuA></H3Educ>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <SpanMajor>Major: Economics</SpanMajor>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SpanMajor>Concentration: Quantitative Economics</SpanMajor>
                    </td>
                </tr>
            </tbody>
        </EdTable>
    </EdDiv>

export default FinEduTable;

