function Avatar({ className }) {
  return (
    <img
    className={`h-10 rounded-full cursor-pointer transition duration-150 ease-out transform hover:scale-110 ${className}`}
      loading='lazy'
      src="/images/h5.png"
      alt='Profile Pic'
    />
  )
}

export default Avatar