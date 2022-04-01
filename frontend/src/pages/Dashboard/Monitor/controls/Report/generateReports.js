import React from 'react';

const generateReports =  (reports, type)=>{
    let new_reports = [];
    if(type === "nursing_reports"){
        new_reports = reports.map(report =>(
            {
                id: report._id,
                title: report.date,
                body : (
                    <div>
                    <h6>Nursing Report</h6>
                    {report.nursing_report}
                    <h6>Nursing care Plan</h6>
                    {report.nursing_care_plan}
                    </div>
                )
            }
        ))
    }

    if(type === "treatments"){
        new_reports =  reports.map(report =>(
            {
                id: report._id,
                title: report.date,
                body : (
                    <div>
                    <h6>Case History</h6>
                    {report.case_history}
                    <h6>Prescription</h6>
                    {report.prescription }
                    </div>
                )
            }
        ))

    }

    return new_reports;
}

export default generateReports;