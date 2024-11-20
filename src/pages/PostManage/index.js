import { Link } from 'react-router-dom';

function PostManage () {
    return(
        <div className="container mx-auto my-5" style={{maxwidth: "700px"}}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className="h1">Manage Posts</h1>
          <div className="text-end">
            <Link to="/PostAdd" className="btn btn-primary btn-sm"
              >Add New Post</Link>
          </div>
        </div>
        <div className="card mb-2 p-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col" >Title</th>
                <th scope="col">Status</th>
                <th scope="col" className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">5</th>
                <td>Post 5</td>
                <td><span className="badge bg-warning">Pending Review</span></td>
                <td className="text-end">
                  <div className="buttons">
                    <Link to="/SinglePost"
                      target="_blank"
                      className="btn btn-primary btn-sm me-2 disabled"
                      ><i className="bi bi-eye"></i></Link>
                    < Link to="/PostEdit"
                      className="btn btn-secondary btn-sm me-2"
                      ><i className="bi bi-pencil"></i></Link>
                    <Link to="#" className="btn btn-danger btn-sm"
                      ><i className="bi bi-trash"></i></Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Post 4</td>
                <td><span className="badge bg-success">Publish</span></td>
                <td className="text-end">
                  <div className="buttons">
                    <Link to="/SinglePost"
                      target="_blank"
                      className="btn btn-primary btn-sm me-2"
                      ><i className="bi bi-eye"></i></Link>
                    <Link to="/PostEdit"
                      className="btn btn-secondary btn-sm me-2"
                      ><i className="bi bi-pencil"></i></Link>
                    <Link to="#" className="btn btn-danger btn-sm"
                      ><i className="bi bi-trash"></i></Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Post 3</td>
                <td><span className="badge bg-success">Publish</span></td>
                <td className="text-end">
                  <div className="buttons">
                    <Link to="/SinglePost"
                      target="_blank"
                      className="btn btn-primary btn-sm me-2"
                      ><i className="bi bi-eye"></i></Link>
                    <Link to="/PostEdit"
                      className="btn btn-secondary btn-sm me-2"
                      ><i className="bi bi-pencil"></i></Link>
                    <Link to="#" className="btn btn-danger btn-sm"
                      ><i className="bi bi-trash"></i></Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Post 2</td>
                <td><span className="badge bg-success">Publish</span></td>
                <td className="text-end">
                  <div className="buttons">
                    <Link to="/SinglePost"
                      target="_blank"
                      className="btn btn-primary btn-sm me-2"
                      ><i className="bi bi-eye"></i></Link>
                    <Link to="/PostEdit"
                      className="btn btn-secondary btn-sm me-2"
                      ><i className="bi bi-pencil"></i></Link>
                    <Link to="#" className="btn btn-danger btn-sm"
                      ><i className="bi bi-trash"></i ></Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Post 1</td>
                <td><span className="badge bg-success">Publish</span></td>
                <td className="text-end">
                  <div className="buttons">
                    <Link to="/SinglePost"
                      target="_blank"
                      className="btn btn-primary btn-sm me-2"
                      ><i className="bi bi-eye"></i></Link>
                    <Link to="/PostEdit"
                      className="btn btn-secondary btn-sm me-2"
                      ><i className="bi bi-pencil"></i></Link>
                    <Link to="#" className="btn btn-danger btn-sm"
                      ><i className="bi bi-trash"></i></Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <Link to="/Dashboard" className="btn btn-link btn-sm"
            ><i className="bi bi-arrow-left"></i> Back to Dashboard</Link>
        </div>
      </div>
    )
}

export default PostManage;