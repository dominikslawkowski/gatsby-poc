const fetch = require("node-fetch")

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  const apiUrl = configOptions.apiUrl

  const fetchProfiles = async () => {
    console.log("fetch data from server")
    const response = await fetch(`${apiUrl}/profiles`)
    const profiles = await response.json()

    return profiles
  }

  const createProfileNode = (data) => {
    const nodeMeta = {
      id: createNodeId(data.id),
      parent: null,
      children: [],
      ...data,
      internal: {
        type: "Profile",
        content: JSON.stringify(data),
        contentDigest: createContentDigest(data),
      },
    }
    console.log(`create node for: ${data.name}`)
    createNode(nodeMeta)
  }

  const profiles = await fetchProfiles()
  profiles.forEach((p) => createProfileNode(p))
}
