import React from 'react'
import './issuePage.css';
import { Adjust } from '@material-ui/icons';

const Issuepage = ({ issues }) => {
    return (
        <>
            {issues?.map(issue => (
                <div className='issue-div' key={issue.publishedAt}>
                    <div className='list-heading'>
                        <div>
                            <Adjust className='icon' />
                        </div>
                        <h3 className='issue-title'>{issue?.title}</h3>
                    </div>
                    <p className='paragraph'>{issue?.url}</p>
                </div>
            ))}
        </>
    )
}

export default Issuepage