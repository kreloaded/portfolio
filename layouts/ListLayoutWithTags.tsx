'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.replace(/^\//, '').replace(/\/page\/\d+$/, '')
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div className="mx-auto max-w-6xl pb-12 pt-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Blog</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search articles"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-primary-500"
          />
        </div>

        <div className="mt-8">
          <ul className="divide-y divide-gray-200">
            {displayPosts.map((post) => {
              const { path, date, title, summary, tags } = post
              return (
                <li key={path} className="flex flex-col py-8 sm:flex-row sm:justify-between">
                  <div className="text-gray-500 dark:text-gray-400 sm:w-1/4">
                    {formatDate(date, siteMetadata.locale)}
                  </div>

                  <div className="sm:w-3/4">
                    <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                      <Link href={`/${path}`} className="hover:underline">
                        {title}
                      </Link>
                    </h2>

                    <div className="mt-1 flex flex-wrap text-blue-500">
                      {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                    </div>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">{summary}</p>
                  </div>
                </li>
              )
            })}
          </ul>

          {pagination && pagination.totalPages > 1 && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </div>
      </div>
    </>
  )
}
