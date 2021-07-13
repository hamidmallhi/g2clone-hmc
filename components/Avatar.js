import Image from 'next/image'

function Avatar() {
  return (
    <span className="ml-auto">
    <Image
      className={`h-10 rounded-full cursor-pointer transition duration-150 ease-out transform hover:scale-110`}
      loading='lazy'
      src="/images/h5.png"
      alt='Profile Pic'
      height='50'
      width='50'
    />
    </span>
  )
}

export default Avatar
