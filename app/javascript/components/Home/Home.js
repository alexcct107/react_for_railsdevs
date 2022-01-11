import React, { Component } from 'react';
import Jumbotron from '../Jumbotron';
import Table from './Table/Table'


class Home extends Component {
    constructor(){
        super()

        this.state = {
            course_modules: [
        {id: 1, title: 'Setting up a new ruby on rails app with react', description:'Lorem Ipsum', active: false },
        {id: 2, title: 'Adding react to an existing rails app', description:'Lorem Ipsum', active: false },
        {id: 3, title: 'Building a hello world App', description:'Lorem Ipsum', active: false },
        {id: 4, title: 'Adding react router Dom to your App ', description:'Lorem Ipsum', active: false }
        ]
      }
    }

    handleVideoChange(item,event){
        event.preventDefault()

        let course_modules = [...this.state.course_modules]
        
        course_modules.map( data => {
            data.active = false
        })

        item.active = !item.active
        course_modules[item.id - 1] = item

        this.setState({course_modules})
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <Table handleVideoChange={this.handleVideoChange.bind(this)} course_modules={this.state.course_modules} />
            </div>
        )
    }
}

export default Home