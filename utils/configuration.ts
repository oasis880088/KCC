import { ImageLoader } from "next/image"

const UNOPTIMIZED_IMAGES = process.env.UNOPTIMIZED_IMAGES === 'true'

const Configuration: AppConfiguration = {
    title: 'KITTEN CRYSTALS COLLECTION',
    description: 'Meet KITTEN CRYSTALS COLLECTION, the adorable collectible series from OASIS of the metaverse.',
  unoptimizedImages: UNOPTIMIZED_IMAGES,
  imagesLoader: UNOPTIMIZED_IMAGES ? resolverProps => resolverProps.src : undefined,
  collection: {
    type: 'opensea',
      slug: 'kitten-crystals-collection'
  },
//   collection: {
//       type: 'rarible',
//       blockchain: 'ETHEREUM',
//       address: '0xccc441ac31f02cd96c153db6fd5fe0a2f4e6a68d'
//   }
}

interface RaribleCollection {
  type: 'rarible'
  blockchain: 'ETHEREUM' | 'POLYGON' | 'FLOW' | 'TEZOS' | string
  address: string
}

interface OpenseaCollection {
  type: 'opensea'
  slug: string
}

interface AppConfiguration {
  title: string
  description: string
  collection: OpenseaCollection | RaribleCollection,
  unoptimizedImages: boolean,
  imagesLoader?: ImageLoader
}

export default Configuration
