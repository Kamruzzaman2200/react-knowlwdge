import PropTypes from 'prop-types';

const Blogs = ({blog}) => {
    console.log(blog)
    return (
        <div>
            
        </div>
    );
};
Blogs.proptypes={
    blog:PropTypes.object.isRequired
}

export default Blogs;