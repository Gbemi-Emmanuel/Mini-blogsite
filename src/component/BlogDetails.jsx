import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import {createClient} from 'contentful';


const BlogDetails = () => {

  const [singleBlogPost, setSingleBlogPost] = useState([]);
  const { id } = useParams();

  const client = createClient({space: "57fcvfax3hlo", accessToken: "6cJwLWwi9X-acrg9RRQ-RSWEH-zyyDzKHYgdd9K1klc"});


  console.log(id);
  
  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id)
        .then((entries) => {
          setSingleBlogPost(entries)
        })
      } catch (error) {
        console.log(error);
      }
    }
    getEntryById();
  }, [id])

  console.log(singleBlogPost);
  return (
    <div>
       <div id="layout" className="pure-g">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <Link to="/blogList" className="content-subhead">Blog Posts</Link>

            < section className="post">
              <header className="post-header">
                <img src={singleBlogPost?.fields?.blogImage?.fields?.file?.url} title="" alt={singleBlogPost?.fields?.blogTitle} width="578" height="291" />
                <h2 className="post-title pt-3">{singleBlogPost?.fields?.blogTitle}</h2>
                <p className="post-meta">
                  By <span href="https://thecodeangle.com/" className="post-author">{singleBlogPost?.fields?.blogAuthor}</span> Date: <span></span>
                  <small>
                    {singleBlogPost?.fields?.createdDate === undefined ?
                      "loading"
                      :
                      new Intl.DateTimeFormat('en-GB', {
                        month: 'long',
                        day: '2-digit',
                        year: 'numeric',
                      }).format(singleBlogPost?.fields?.createDate)

                    }
                  </small>
                </p>
              </header>
              <div className="post-description">
                <p>{singleBlogPost?.fields?.postContent}</p>
                {/* <ReactMarkdown children={singleBlogPost?.fields?.postContent} />, */}
              </div>
            </section>

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
    </div >
    </div>
  )
}

export default BlogDetails;
