//this is the page that gonna show when the component  needs to load
import React from 'react'
import Loader from '@/components/global/loader'

type Props = {
  state: boolean
  className?: string
  children: React.ReactNode
  //ReactNode is useful when you want to specify that a prop or variable can hold any type of content that can be rendered by React, but you don't want to specify a more specific type. 
  color?: string
}


const Loading = (props: Props) => {
  return (
    <div>

    <Loader state>Loading...</Loader>

    </div> 
  )
}

export default Loading