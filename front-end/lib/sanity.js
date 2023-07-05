import sanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'

const options = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  dataset: 'production',
  projectId: 'ogthfjsu',
  useCdn: process.env.NODE_ENV === 'production',
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
}

const client = sanityClient(options)

export const imageBuilder = source => sanityImage(client).image(source)

export const previewClient = sanityClient({
  ...options,
  useCdn: true,
  token:'sk4uU3T360b91BQIJmG0gcRcavnDDTrYMclPkbcJjKV0PeCiUid545zvZprLZeVztQUPFeZSncXYmUgBH4pBIBVF1uurfRwvQtmpXXLZHlDStfO5UYQTHkM2gUWVBiUumJvk9RUkiHgn5XAaXppIvMwegXoBNpg8LQ3O11cxbfARHBvgyjRB'
})



export default client
