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

    render() {
        return (
            <div>
                <Jumbotron />
                <Table course_modules={this.state.course_modules} />
            </div>
        )
    }
}

export default Home