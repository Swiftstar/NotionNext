import BLOG from '@/blog.config'
import { DiscussionEmbed } from 'disqus-react'

const Disqus = ({ frontMatter }) => {
  return (
    <DiscussionEmbed
    shortname={BLOG.COMMENT_DISQUS_SHORT_NAME}
    config={
        {
          url: frontMatter.slug,
          identifier: frontMatter.id,
          title: frontMatter.title,
          language: BLOG.COMMENT_DISQUS_LANG
        }
    }
    />
  )
}

export default Disqus
