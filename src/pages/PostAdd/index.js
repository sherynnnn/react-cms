import { Link } from 'react-router-dom';

function PostAdd () {
    return(
        <div className="container mx-auto my-5" style={{maxwidth: "700px"}}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Add New Post</h1>
      </div>
      <div className="card mb-2 p-4">
        <form>
          <div className="mb-3">
            <label for="post-title" className="form-label">Title</label>
            <input type="text" className="form-control" id="post-title" />
          </div>
          <div className="mb-3">
            <label for="post-content" className="form-label">Content</label>
            <textarea
              className="form-control"
              id="post-content"
              rows="10"
            ></textarea>
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
      <div className="text-center">
        <Link to="/PostManage" className="btn btn-link btn-sm"
          ><i className="bi bi-arrow-left"></i> Back to Posts</Link>
      </div>
    </div>
    );
}

export default PostAdd;