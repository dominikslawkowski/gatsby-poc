import React, { useEffect } from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($profileId: String!) {
    profile(id: { eq: $profileId }) {
      id
      name
      image
      description
    }
  }
`

const Profile = ({ data: { profile } }) => {
  //   useEffect(() => {
  //       const request = async () => {
  //           const profile = fetch()
  //       }
  //   }, [])

  return (
    <div style={{ width: "50vw", margin: "0 auto" }}>
      <div style={{ display: "flex" }}>
        <img
          src={profile.image}
          alt={profile.name}
          style={{ borderRadius: "50%" }}
        />
        <h1 style={{ marginLeft: "20px" }}>{profile.name}</h1>
      </div>
      <h5 style={{ fontWeight: "500" }}>{profile.description}</h5>
    </div>
  )
}

export default Profile
