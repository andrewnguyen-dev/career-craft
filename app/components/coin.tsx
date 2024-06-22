import Image from 'next/image'
import coinSvg from '../../public/assets/coin.svg'

const Coin = () => {
  return (
    <Image src={coinSvg} alt="coin" width={16} height={16} />
  )
}

export default Coin
