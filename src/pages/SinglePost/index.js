import { Link } from 'react-router-dom';

function SinglePost () {
    return (
        <div className="container mx-auto my-5" style={{maxwidth:"500px"}}>
      <h1 className="h1 mb-4 text-center">Post 1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris purus
        risus, euismod ac tristique in, suscipit quis quam. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Vestibulum eget dapibus nibh. Pellentesque nec maximus odio. In pretium
        diam metus, sed suscipit neque porttitor vitae. Vestibulum a mattis
        eros. Integer fermentum arcu dolor, nec interdum sem tincidunt in. Cras
        malesuada a neque ut sodales. Nulla facilisi.
      </p>

      <p>
        Phasellus sodales arcu quis felis sollicitudin vehicula. Aliquam viverra
        sem ac bibendum tincidunt. Donec pulvinar id purus sagittis laoreet. Sed
        aliquet ac nisi vehicula rutrum. Proin non risus et erat rhoncus
        aliquet. Nam sollicitudin facilisis elit, a consequat arcu placerat eu.
        Pellentesque euismod et est quis faucibus.
      </p>

      <p>
        Curabitur sit amet nisl feugiat, efficitur nibh et, efficitur ex. Morbi
        nec fringilla nisl. Praesent blandit pellentesque urna, a tristique nunc
        lacinia quis. Integer semper cursus lectus, ac hendrerit mi volutpat sit
        amet. Etiam iaculis arcu eget augue sollicitudin, vel luctus lorem
        vulputate. Donec euismod eu dolor interdum efficitur. Vestibulum
        finibus, lectus sed condimentum ornare, velit nisi malesuada ligula,
        eget posuere augue metus et dolor. Nunc purus eros, ultricies in sapien
        quis, sagittis posuere risus.
      </p>
      <div className="text-center mt-3">
        <Link to="/" className="btn btn-link btn-sm"
          ><i className="bi bi-arrow-left"></i> Back </Link>
      </div>
    </div>
    );
}

export default SinglePost;