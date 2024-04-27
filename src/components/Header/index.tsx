import Image from 'next/image'

import Logo from '@/assets/images/kitabisa.jpg'

import Sorting from '../Sorting'

export default function Header() {
  return (
    <header className="mb-10 flex items-center justify-between gap-4 py-4">
      <div className="flex items-center gap-2">
        <Image data-testid="logo-test" src={Logo} alt="Kitabisa" width={50} height={50} />
        <h3 className="xs:block hidden text-xl text-primary">
          <strong data-testid="title-test">Kitabisa</strong>
        </h3>
      </div>
      <Sorting />
    </header>
  )
}
