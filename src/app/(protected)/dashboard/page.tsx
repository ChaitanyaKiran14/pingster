import React from 'react'

type Props = {}

const Page = async (props: Props) => {

    //we are gonna make server action to onboard the user, so if there is any new user into our application we need to onboard them...
    //so if there are a new user into our application we have to essentially onboard them and if the user is successfully you know created and if or if they already have an account then we're going to check the status which is 200 or 2011 and then accordingly we're going to push them to their specific dashboard page
    //dashboard/id  id of the user
    // if that is not the case then we're going to need to redirect the user to the signin page
     
  return (
    <div >Dashboard Page</div>
  )
}

export default Page