const createProfilePages = async (actions, graphql, reporter) => {
  const result = await graphql(`
    query MyQuery {
      allProfile {
        nodes {
          id
          name
          description
          image
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("error loading apps", result.errors)
    return
  }

  const profiles = result.data.allProfile.nodes

  profiles.forEach((p) => {
    const { id, name } = p
    const slug = name.toLowerCase().replace(" ", "-")

    actions.createPage({
      path: `/profile/${slug}/`,
      component: require.resolve("./src/templates/profile.js"),
      context: {
        profileId: id,
      },
    })
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  await createProfilePages(actions, graphql, reporter)
}
