import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id: 0,
        title: "Resume Builder",
        description: "Unique Path and Shareable link Resume Builder",
        image: "/project_05.png",
        link: "https://milestone5bysyedzeeshaniqbal.vercel.app/",
        tags: ["HTML","Node","CSS","Typescript"],
  
    }
]

const Projects = () => {
  return (
    <div id='projects'className='container pt-32'>
     <Heading title = "Projects"/>
     <div className= 'grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
      {data.map(el =>(<Card
      key={el.id}
      title={el.title}
      description = {el.description}
      image = {el.image}
      tags = {el.tags}
      />))}
      </div> 
    </div>
  )
}

export default Projects
