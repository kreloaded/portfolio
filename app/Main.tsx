import Link from '@/components/Link'

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex items-center space-x-8">
          <img
            src="/static/images/profile.png"
            alt="Kiran Profile"
            className="h-32 w-32 rounded-full object-cover"
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Hi, I am Kiran</h1>
            <p className="text-xl">Software Engineer</p>
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
