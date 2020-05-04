import {differenceInDays, format, formatDistance, parseISO} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import {BlockContent} from './BlockContent'
import {Main} from './Layout/Main'
import styles from './project.module.css'
import RoleList from './role-list'

const Project = ({_rawBody, title, categories, mainImage, members, publishedAt, relatedProjects}) => (
  <article className={styles.root}>
    {mainImage && mainImage.asset && (
      <div className={styles.mainImage}>
        <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit('crop')
            .url()}
          alt={mainImage.alt}
        />
      </div>
    )}
    <Main>
      <div className={styles.grid}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>{title}</h1>
          {_rawBody && <BlockContent blocks={_rawBody || []} />}
        </div>
        <aside className={styles.metaContent}>
          {publishedAt && (
            <div className={styles.publishedAt}>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? formatDistance(new Date(publishedAt), new Date())
                : format(parseISO(publishedAt), 'MMMM do yyyy')}
            </div>
          )}
          {members && members.length > 0 && <RoleList items={members} title='Project members' />}
          {categories && categories.length > 0 && (
            <div className={styles.categories}>
              <h3 className={styles.categoriesHeadline}>Categories</h3>
              <ul>
                {categories.map(category => (
                  <li key={category._id}>{category.title}</li>
                ))}
              </ul>
            </div>
          )}
          {relatedProjects && relatedProjects.length > 0 && (
            <div className={styles.relatedProjects}>
              <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
              <ul>
                {relatedProjects.map(project => (
                  <li key={`related_${project._id}`}>
                    {project.slug ? (
                      <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                    ) : (
                      <span>{project.title}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </Main>
  </article>
)

export default Project
