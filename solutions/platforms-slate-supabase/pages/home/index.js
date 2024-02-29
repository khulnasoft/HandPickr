import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <Head>
        <title>Platforms on Khulnasoft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-auto w-48">
        <Image
          width={512}
          height={512}
          src="/logo.png"
          alt="Platforms on Khulnasoft"
        />
      </div>
    </div>
  )
}
