course = Course.create(title: 'Hello World', description: 'Create an app with rails and react')

section = Section.create(title:'Chapter 1', course: course)

episodes = Episode.create([
    { title: '1.- Setting up a new ruby on rails app with react', description:'Lorem Ipsum', url:"https://www.youtube.com/embed/CS6npdU2rf8", section: section },
    { title: '2.- Adding react to an existing rails app', description:'Lorem Ipsum', url:"https://www.youtube.com/embed/CS6npdU2rf8", section: section},
    { title: '3.- Building a hello world App', description:'Lorem Ipsum', url:"https://www.youtube.com/embed/CS6npdU2rf8", section: section},
    { title: '4.-Adding react router Dom to your App ', description:'Lorem Ipsum', url:"https://www.youtube.com/embed/CS6npdU2rf8", section: section}
])