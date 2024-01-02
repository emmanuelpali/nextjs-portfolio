'use client'
import Link from 'next/link'
import React from 'react'
import data from "../../../utils/data";
import Image from 'next/image';
import Looper from '../Component/Looper';
import styles from './index.module.css'
import { useRouter } from 'next/navigation';

const page = async ({params}) => {
   const project = data.filter(project => project.id == params.id)[0];
   const router = useRouter();
  return (
	project && (<div key={project.id} className={`${styles.singleProject}`}>
					<div className={styles.looperWrapper}>
							<Looper speed="50" direction="left" className='details'>
									{project.pictures.map((image, idx) => (
											<div className={styles.looper_img} key={idx}>
												<Image
													className="img-fluid"
													src={image}
													alt="Picture of the project"
													style={{ objectFit: "cover" }}
												/>
											</div>
										))}
							</Looper>
					</div>
					<h3 className="text-center">{project.appName}</h3>
					<div className={styles.projectText}>
							<div className="">{project.shortDescription}</div>
							<div className="description">{project.description}</div>
							<div className="d-flex gap-5 justify-content-center">
									<button type="button" onClick={() => router.back()}
										className={styles.btn}>
										Back
										</button>
									<Link
										href={`${project.webAddress}`}
										title={`${project.appName} opens on a new page`}
										target="_blank"
										className={styles.btn}>
										Visit Site
									</Link> 
							</div>
					</div>
				</div>)
    
      

  )
}

export default page