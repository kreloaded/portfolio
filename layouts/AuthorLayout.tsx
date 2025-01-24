import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import CustomImage from '@/components/Image' // Renamed to avoid conflicts with global DOM Image

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'> & { skills?: string }
}

// Define badge colors
const badgeColors = [
  'bg-blue-700', // Dark Blue
  'bg-green-700', // Dark Green
  'bg-orange-700', // Dark Orange
  'bg-purple-700', // Dark Purple
  'bg-pink-700', // Dark Pink
  'bg-yellow-700', // Dark Yellow
]

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, linkedin, github, skills } = content

  // Split skills into an array
  const skillsArray = skills ? skills.split(',').map((skill) => skill.trim()) : []

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          {/* Profile Section */}
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <CustomImage
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
            </div>
          </div>

          {/* Content Section */}
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            {children}
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="pb-2 text-xl font-bold">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skillsArray.map((skill, index) => (
                <span
                  key={index}
                  className={`inline-block rounded-full px-3 py-1 text-sm font-medium text-white ${badgeColors[index % badgeColors.length]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
