import React from 'react'
import './style.scss'
const Project = ({item,index}) => {
    const {description,image,title,urlDemo,urlSource}=item
    return (
        <div className='project'>
            <div className={(index%2)?'projectContainer':'projectContainer reverse'}>
                <div className="projectImage" style={{backgroundImage:`url(${image})`}}>
                </div>
                <div className="projectContent">
                    <div className="projectTitle">
                       {title}
                    </div>
                    <div className="projectDescription">
                       {description}
                    </div>
                    <div className="projectAction">
                        <div className="projectBtn">
                            <a href={urlDemo}>Demo</a>
                        </div>
                        <div className="projectBtn">
                            <a href={urlSource}>Source code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project