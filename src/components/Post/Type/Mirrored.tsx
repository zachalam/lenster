import Slug from '@components/Shared/Slug'
import { Mirror } from '@generated/types'
import { SwitchHorizontalIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
  post: Mirror
}

const Mirrored: FC<Props> = ({ post }) => {
  const postType = post?.metadata?.attributes[0]?.value

  return (
    <div className="flex items-center pb-4 flex-1 overflow-hidden space-x-1 text-gray-500 text-[13px]">
      <SwitchHorizontalIcon className="w-4 h-4" />
      <div className="flex items-center space-x-1 truncate">
        <Link href={`/u/${post?.profile?.handle}`}>
          <a href={`/u/${post?.profile?.handle}`} className="overflow-hidden">
            {post?.profile?.name ? (
              <b>{post?.profile?.name}</b>
            ) : (
              <Slug slug={post?.profile?.handle} prefix="@" />
            )}
          </a>
        </Link>
        <Link href={`/posts/${post?.mirrorOf?.id}`}>
          <a href={`/posts/${post?.mirrorOf?.id}`}>
            <span>mirrored the </span>
            <b>
              {post?.mirrorOf.__typename === 'Post'
                ? postType === 'crowdfund'
                  ? 'crowdfund'
                  : post?.mirrorOf.__typename?.toLowerCase()
                : post?.mirrorOf.__typename?.toLowerCase()}
            </b>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Mirrored
