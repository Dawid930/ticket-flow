import Image from "next/image"
import Link from "next/link"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="TicketFlow logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2023 TicketFlow. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
