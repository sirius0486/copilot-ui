"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

// 导入图片
import Picture1 from "../../../public/gallery/1.jpeg"
import Picture2 from "../../../public/gallery/2.jpeg"
import Picture3 from "../../../public/gallery/3.jpg"
import Picture4 from "../../../public/gallery/4.jpg"
import Picture5 from "../../../public/gallery/5.jpg"
import Picture6 from "../../../public/gallery/6.jpg"
import Picture7 from "../../../public/gallery/7.jpeg"
import styles from "./gallery.module.scss"

export default function Gallery() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ]

  return (
    <section className="mt-[20vh]">
      {/* <section className="mb-[100vh] mt-[20vh]"> */}
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div key={index} style={{ scale }} className={styles.el}>
                <div className={styles.imageContainer}>
                  <Image
                    src={src}
                    fill
                    alt="image"
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
