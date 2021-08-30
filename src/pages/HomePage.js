import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
import { useUserContext } from '../context/user_context'
import Swal from 'sweetalert2'
const HomePage = () => {
  const { myUser } = useUserContext()
  if (myUser) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      confirmButtonColor: '#828DDB',
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
    })

    Toast.fire({
      icon: 'success',
      title: 'Logged in successfully',
      iconColor: '#828DDB',
    })
  }
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage
