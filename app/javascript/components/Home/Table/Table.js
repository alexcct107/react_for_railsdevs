import React, { Component } from 'react';
import Item from './Item';
import ActiveItem from './ActiveItem';

class Table extends Component {
    constructor(props) {
        super(props)

    }

    render(){
        const item = this.props.course_modules.map( (data) => {
            
            let handleVideoChange = this.props.handleVideoChange.bind(this,data)

            return (
                data.active ?
            <ActiveItem handleVideoChange={handleVideoChange} key={data.id} title={data.title} description={data.description} /> :
            <Item handleVideoChange={handleVideoChange} key={data.id} title={data.title} description={data.description} />
            )
        })

        return(
            <div className='pt-5 pb-5'>
                <div className='container'>
                    <div className='text-center'>
                        <h2 className='pt-4 pb-4'>React para desarrolladores Rails-Videos</h2>
                    </div>
                    {item}
                </div>
            </div>
        )
    }
}


export default Table