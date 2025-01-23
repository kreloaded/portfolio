import Link from '@/components/Link'

export default function Home({ posts }) {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-white">
        {/* Container for the profile picture and text */}
        <div className="flex items-center space-x-8">
          {/* Profile Picture */}
          <img
            src="/static/images/profile.png"
            alt="Kiran Profile"
            className="h-32 w-32 rounded-full object-cover"
          />
          {/* Name, Title, and Links */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-black">Hi, I am Kiran</h1>
            <p className="text-xl text-black">Software Engineer</p>
            <div className="space-x-4">
              <Link href="/about" className="text-blue-600 hover:underline">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
