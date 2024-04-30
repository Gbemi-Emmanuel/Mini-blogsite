import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {createClient} from 'contentful'

const BlogList = () => {

  const [blogPosts, setBlogPost] = useState([]);

  const client = createClient({space: "57fcvfax3hlo", accessToken: "6cJwLWwi9X-acrg9RRQ-RSWEH-zyyDzKHYgdd9K1klc"});

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries()
        .then((entries) => {
          console.log(entries);
          setBlogPost(entries)
        })
      } catch (error) {
        console.log(error);
      }
    }
    getAllEntries();
  }, [])

  return (
    <div>
         <div id="layout" className="pure-g">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <h1 className="content-subhead">Web Dev Blog</h1>

            {blogPosts?.items?.map((post) => (
              <section className="post" key={post.sys.id}>
                <header className="post-header">
                  <img src={post.fields.blogImage.fields.file.url} title="" alt={post.fields.title} width="578" height="291" />
                  <h2 className="post-title pt-3">{post.fields.title}</h2>
                  <p className="post-meta">
                    By <span href="https://thecodeangle.com/" className="post-author">{post.fields.blogAuthor}</span> Date <span></span>
                    <small>
                      {new Intl.DateTimeFormat('en-GB', {
                        month: 'long',
                        day: '2-digit',
                        year: 'numeric',
                      }).format(post.fields.createDate)}
                    </small>
                  </p>
                </header>
                <div className="post-description">
                  <p>{post.fields.blogSummary} 
                  </p>
                  <Link
                    to={`/blogDetails/${post.sys.id}`}
                    className="button button1">
                    Read More
                  </Link>
                </div>
              </section>
            ))}
          </div>


          <div className="footer">
            <div className="pure-menu pure-menu-horizontal">
              <div className="pure-menu-item">
                <a href="http://twitter.com/thecodeangle" className="pure-menu-link">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BlogList;
