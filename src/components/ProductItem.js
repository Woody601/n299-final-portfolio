import React from "react"
import styles from "@/styles/styles.module.css"
import { Button, Image} from "semantic-ui-react"
import Link from "next/link"

export default function ProductItem(props) {
  const { src, material, title} = props;
  return (
    
    <>
     <div className={styles.productItem}>
      <Image src={src} />
          <h3>{title}</h3>
          <Button as={Link} href={`/materials/${material}`} color="blue" >
            View {title} Products
          </Button>
        </div>
    </>
  )
}
