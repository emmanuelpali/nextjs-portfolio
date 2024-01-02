import Image from "next/image";
import React from "react";
import Ellipse from "../Ellipse";
import Reveal from "../Reveal";
import data from "../../../../utils/data";
import styles from "./index.module.css";
import Link from "next/link";

export default function ProjectCard() {
	return (
		<div className="row gap-3">
			{data.map((project) => (
				<div key={project.id} className={`${styles.cover} col-md-4`}>
					<Reveal >
							<div className={styles.projectcard}>
								<div className={styles.imagecontainer}>
									<Image
										className="img-fluid"
										src={project.thumb}
										alt="Picture of the project"
										style={{ objectFit: "cover" }}
									/>
								</div>
								<div className={styles.projectText}>
									<h3 className={`${styles.textcenter} text-center`}>{project.appName}</h3>
									<div className="">{project.shortDescription}</div>
									<div className="d-flex justify-content-center">
											<Link
												href={`/${project.id}`}
												className={styles.btn}>
												More
											</Link>
									</div>
								</div>
							</div>
					</Reveal>
				</div>
			))}
		</div>
	);
}
